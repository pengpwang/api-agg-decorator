"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class FsHandler {
    static getAllFilesInDir(root) {
        let jsonFiles = [];
        function findJsonFile(_path) {
            let files = fs_1.default.readdirSync(_path);
            files.forEach(function (item) {
                let fPath = path_1.default.join(_path, item);
                let stat = fs_1.default.statSync(fPath);
                if (stat.isDirectory() === true) {
                    findJsonFile(fPath);
                }
                if (stat.isFile() === true) {
                    jsonFiles.push({
                        path: fPath,
                        filename: path_1.default.basename(fPath, '.ts')
                    });
                }
            });
        }
        findJsonFile(root);
        return jsonFiles;
    }
}
class Util {
    static uniqBy(arr, identity) {
        if (!Array.isArray(arr))
            return [];
        function isInRes(res, val) {
            for (let v of res) {
                if (v[identity] === val[identity]) {
                    return true;
                }
            }
            return false;
        }
        let res = [];
        for (let v of arr) {
            if (!isInRes(res, v)) {
                res.push(v);
            }
        }
        return res;
    }
}
class YitJSON {
    // 非动态实体处理
    static handlerApiType(typeName) {
        for (let v of YitJSON.ModelsFileLists) {
            if (v.filename === typeName) {
                const apiModelMod = require(v.path)[v.filename];
                const apiModelInstance = new apiModelMod();
                return apiModelInstance.__proto__;
            }
        }
    }
    static GenerateStructListItem(apiType, groupName) {
        let fieldList = [];
        let apiTypeArr = [];
        // 处理动态实体
        if (apiType === 'Api_DynamicEntity') {
            fieldList = [{
                    desc: '动态类型的类型名',
                    isList: false,
                    name: 'typeName',
                    type: 'string'
                }, {
                    desc: '动态类型实体',
                    isList: false,
                    name: 'entity',
                    type: '<T>'
                }];
        }
        else {
            // 非动态实体处理
            const __proto__ = YitJSON.handlerApiType(apiType);
            for (let key in __proto__) {
                let fieldListItem = {
                    desc: __proto__[key]['desc'],
                    isList: __proto__[key]['isList'],
                    name: __proto__[key]['name'],
                    type: __proto__[key]['type'],
                };
                // 动态实体处理
                if (__proto__[key]['type'] === 'Api_DynamicEntity') {
                    fieldList.push(Object.assign({}, fieldListItem, { extInfo: __proto__[key]['extInfo'] }));
                    __proto__[key]['extInfo']['keyValue'].forEach((v) => {
                        if (v.value.startsWith('Api_')) {
                            apiTypeArr.push(v.value);
                        }
                    });
                }
                else {
                    fieldList.push(fieldListItem);
                }
                if (__proto__[key]['type'].startsWith('Api_')) {
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
        };
    }
    static GenerateStructList(apiTypeArr, groupName) {
        let structList = [];
        // TODO: 待优化
        function deepHandleApiType(apiTypeArr, structList) {
            apiTypeArr.forEach((apiType) => {
                let { structListItem, apiTypeArr: subApiTypeArr } = YitJSON.GenerateStructListItem(apiType, groupName);
                structList.push(structListItem);
                if (subApiTypeArr.length) {
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
    static GenerateParameterInfoList(typeName) {
        let parameterInfoList = [];
        const __proto__ = YitJSON.handlerApiType(typeName);
        for (let key in __proto__) {
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
    static GenerateReqStructList(parameterInfoList, groupName) {
        let apiTypeArr = [];
        parameterInfoList.forEach((v) => {
            if (v.type.startsWith('Api_')) {
                apiTypeArr.push(v.type);
            }
        });
        return YitJSON.GenerateStructList(apiTypeArr, groupName);
    }
    static GenerateRespStructList(typeName, groupName) {
        return YitJSON.GenerateStructList([typeName], groupName);
    }
    static GenerateCodeList(typeName) {
        let codeArr = [];
        const __proto__ = YitJSON.handlerApiType(typeName);
        for (let key in __proto__) {
            codeArr.push({
                code: key.split('_').pop(),
                desc: __proto__[key]['desc'],
                isDesign: true,
                name: __proto__[key]['name']
            });
        }
        return codeArr;
    }
    static generateYitJSON(data) {
        let apiList = [];
        let codeList = [];
        for (let [c, v] of Object.entries(data)) {
            for (let [c0, v0] of Object.entries(v)) {
                if (c0 === 'reqBody') {
                    let parameterInfoList = YitJSON.GenerateParameterInfoList(v0);
                    v.parameterInfoList = parameterInfoList;
                    v.reqStructList = YitJSON.GenerateReqStructList(parameterInfoList, v.groupName);
                }
                else if (c0 === 'resSucc') {
                    v.respStructList = YitJSON.GenerateRespStructList(v0, v.groupName);
                }
                else if (c0 === 'resFail') {
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
YitJSON.ApiModelsPath = path_1.default.join(__dirname, '../models');
YitJSON.ModelsFileLists = FsHandler.getAllFilesInDir(YitJSON.ApiModelsPath);
exports.default = YitJSON;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWl0SlNPTi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi95aXRKU09OLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLDRDQUFvQjtBQUdwQixNQUFNLFNBQVM7SUFDYixNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBWTtRQUNsQyxJQUFJLFNBQVMsR0FBVSxFQUFFLENBQUM7UUFFMUIsU0FBUyxZQUFZLENBQUMsS0FBYTtZQUNqQyxJQUFJLEtBQUssR0FBRyxZQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO2dCQUMxQixJQUFJLEtBQUssR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxJQUFJLEdBQUcsWUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxFQUFFO29CQUMvQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO2dCQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksRUFBRTtvQkFDMUIsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDYixJQUFJLEVBQUUsS0FBSzt3QkFDWCxRQUFRLEVBQUUsY0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO3FCQUN0QyxDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGO0FBRUQsTUFBTSxJQUFJO0lBRVIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFhLEVBQUUsUUFBZ0I7UUFDM0MsSUFBRyxDQUFDLEtBQUssQ0FBQyxPQUFP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