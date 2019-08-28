import path from 'path';
import fs from 'fs';
import { Data } from './types';

class FsHandler {
  static getAllFilesInDir(root: string) {
    let jsonFiles: any[] = [];
    
    function findJsonFile(_path: string) {
      let files = fs.readdirSync(_path);
      files.forEach(function (item) {
        let fPath = path.join(_path, item);
        let stat = fs.statSync(fPath);
        if (stat.isDirectory() === true) {
          findJsonFile(fPath);
        }
        if (stat.isFile() === true) {
          jsonFiles.push({
            path: fPath,
            filename: path.basename(fPath, '.ts')
          });
        }
      });
    }

    findJsonFile(root);
    return jsonFiles;
  }
}

class Util {
  
  static uniqBy(arr: object[], identity: string) {
    if(!Array.isArray(arr)) return [];
  
    function isInRes(res: any[], val: any) {
      for(let v of res){
        if(v[identity] === val[identity]){
          return true;
        }
      }
      return false;
    }
    let res = [];
    for(let v of arr){
      if(!isInRes(res, v)){
        res.push(v);
      }
    }
  
    return res;
  }
}

class YitJSON {
  private static ApiModelsPath: string = path.join(__dirname, '../models');
  private static ModelsFileLists: any[] = FsHandler.getAllFilesInDir(YitJSON.ApiModelsPath);

  // 非动态实体处理
  private static handlerApiType(typeName: string) {
    let AllApiTypes = YitJSON.ModelsFileLists.map(v => v.filename);
    if(!AllApiTypes.includes(typeName)){
      throw new Error(`models文件：${typeName}.ts 不存在`);
    }
    for(let v of YitJSON.ModelsFileLists){
      if(v.filename === typeName){
        const apiModelMod = require(v.path)[v.filename];
        const apiModelInstance = new apiModelMod();
        return apiModelInstance.__proto__;
      }
    }
  }

  private static GenerateStructListItem(apiType: string, groupName: string) {
    let fieldList: object[] = [];
    let apiTypeArr: string[] = [];

    // 处理动态实体
    if(apiType === 'Api_DynamicEntity'){
      fieldList = [{
        desc: '动态类型的类型名',
        isList: false,
        name: 'typeName',
        type: 'string'
      },{
        desc: '动态类型实体',
        isList: false,
        name: 'entity',
        type: '<T>'
      }];
    }else {
      // 非动态实体处理
      const __proto__ = YitJSON.handlerApiType(apiType);
      for(let key in __proto__){
        let fieldListItem = {
          desc: __proto__[key]['desc'],
          isList: __proto__[key]['isList'],
          name: __proto__[key]['name'],
          type: __proto__[key]['type'],
        };
        // 动态实体处理
        if(__proto__[key]['type'] === 'Api_DynamicEntity'){
          fieldList.push({
            ...fieldListItem,
            extInfo: __proto__[key]['extInfo']
          });
          __proto__[key]['extInfo']['keyValue'].forEach((v: any) => {
            if(v.value.startsWith('Api_')){
              apiTypeArr.push(v.value);
            }
          });
        }else{
          fieldList.push(fieldListItem);
        }

        if(__proto__[key]['type'].startsWith('Api_')){
          apiTypeArr.push(__proto__[key]['type']);
        }
      }
    }

    let structListItem = {
      fieldList,
      groupName,
      name: apiType
    };

    return {
      structListItem,
      apiTypeArr
    }
  }

  private static GenerateStructList(apiTypeArr: string[], groupName: string) {
    let structList: object[] = [];

    // TODO: 待优化
    function deepHandleApiType(apiTypeArr: string[], structList: object[]) {
      apiTypeArr.forEach((apiType: string) => {
        let { structListItem, apiTypeArr: subApiTypeArr} = YitJSON.GenerateStructListItem(apiType, groupName);
        structList.push(structListItem);

        if(subApiTypeArr.length){
          deepHandleApiType(subApiTypeArr, structList);
        }

      });

      return structList;
    }
    
    structList = deepHandleApiType(apiTypeArr, structList);

    // 去重
    structList = Util.uniqBy(structList, 'name');

    return structList;

  }

  private static GenerateParameterInfoList(typeName: string) {
    let parameterInfoList: object[] = [];
    const __proto__ = YitJSON.handlerApiType(typeName);

    for(let key in __proto__){
      parameterInfoList.push({
        description: __proto__[key]['desc'],
        injectOnly: false,
        isRequired: __proto__[key]['isRequired'],
        isRsaEncrypt: false,
        name: __proto__[key]['name'],
        sequence: '',
        type: __proto__[key]['type'],
        isList: __proto__[key]['isList']
      });
    }

    return parameterInfoList;
  }

  private static GenerateReqStructList(parameterInfoList: any[], groupName: string) {
    let apiTypeArr: string[] = [];
    parameterInfoList.forEach((v) => {
      if(v.type.startsWith('Api_')){
        apiTypeArr.push(v.type);
      }
    });

    return YitJSON.GenerateStructList(apiTypeArr, groupName);  
  }

  private static GenerateRespStructList(typeName: string, groupName: string) {
    return YitJSON.GenerateStructList([ typeName ], groupName);  
  }

  private static GenerateCodeList(typeName: string) {
    let codeArr: object[] = [];
    const __proto__ = YitJSON.handlerApiType(typeName);

    for(let key in __proto__){
      codeArr.push({
        code: key.split('_').pop(),
        desc: __proto__[key]['desc'],
        isDesign: true,
        name: __proto__[key]['name']
      });
    }

    return codeArr;
  }

  static generateYitJSON (data: Data) {
    let apiList: any[] = [];
    let codeList: any[] = [];
    for(let [c, v] of Object.entries(data)){
      for(let [c0, v0] of Object.entries(v)){
        if(c0 === 'reqBody'){
          let parameterInfoList = YitJSON.GenerateParameterInfoList(v0);
          v.parameterInfoList = parameterInfoList;
          v.reqStructList = YitJSON.GenerateReqStructList(parameterInfoList, v.groupName);
        }else if(c0 === 'resSucc'){
          v.respStructList = YitJSON.GenerateRespStructList(v0, v.groupName);
        }else if(c0 === 'resFail'){
          codeList.push(...YitJSON.GenerateCodeList(v0));
        }
      }
      delete v.reqBody;
      delete v.resSucc;
      delete v.resFail;
      apiList.push(v);
    }

    return { 
      apiList, 
      codeList 
    };
  }
}


export default YitJSON;