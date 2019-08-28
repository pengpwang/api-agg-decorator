// import is from 'is-type-of';
import { Data } from './types';

let dataItemTpl = {
  description: '',
  detail: '',
  encryptionOnly: false,
  groupName: '',
  groupOwner: 'kedi',
  methodName: '',
  methodOwner: '',
  mt: '',
  needVerify: false,
  origin: 'node',
  parameterInfoList: <object>[],
  reqStructList: <object>[],
  respStructList: <object>[],
  returnType: '',
  securityLevel: '',
  state: 'OPEN'
};

class DataCenter {
  data: Data;
  controllerMap: Map<string, Function>;

  constructor() {
    this.data = {};
    this.controllerMap = new Map();
  }

  add(target: any, name: string, content: any) {
    // if(!is.object(content)){
    //   throw new Error(`illegal params [content] for DataCenter.add`);
    // }

    // 兼容当target为实例原型的时候，将target指回类本身
    if(!target.prototype && target.constructor){
      target = target.constructor;
    }

    const key = `${target.name}.${name}`;
    if(!this.data[key]) this.data[key] = JSON.parse(JSON.stringify(dataItemTpl));

    //对content统一处理
    Object.keys(content).forEach(k => {
      // 数组处理
      if(Array.isArray(this.data[key][k])){
        this.data[key][k] = [...this.data[key][k], ...content[k]];
      }else{
        // 对象处理
        Object.assign(this.data[key], { [k]: content[k] });
      }
    });

    // console.log(this.data);
  }

  addController(target: any, content: any) {
    // if(!is.object(content)){
    //   throw new Error(`illegal params [content] for DataCenter.addController`);
    // }

    let k = Object.keys(content)[0];
    this.controllerMap.set(k, content[k]);

    // console.log(this.controllerMap);
  }
}

const dataCenter = new DataCenter();

export default dataCenter;