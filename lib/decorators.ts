import R from 'ramda';
import dataCenter from './dataCenter';

const _desc = (type: string, text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => {
  descriptor.value[type] = text;
  dataCenter.add(target, name, { [type]: text });
  return descriptor;
};

const apiInfo = (content: object) => (target: any, name: string, descriptor: PropertyDescriptor) => {
  dataCenter.add(target, name, { ...content });
  return descriptor;
};

const desc = R.curry(_desc);
const Description = desc('description');
const origin = desc('origin');
const detail = desc('detail');
const groupOwner = desc('groupOwner');
const groupName = desc('groupName');
const methodName = desc('methodName');
const methodOwner = desc('methodOwner');
const securityLevel = desc('securityLevel');
const state = desc('state');
const mt = desc('mt');
const encryptionOnly = desc('encryptionOnly');
const needVerify = desc('needVerify');


const controller = (router: string) => (target: any) => {
  dataCenter.addController(target, { [router]: target });
};


const reqBody = (type: Function) => (target: any, name: string, descriptor: PropertyDescriptor) => {
  dataCenter.add(target, name, { reqBody: type.name });
  return descriptor;
};

const resSucc = (type: Function) => (target: any, name: string, descriptor: PropertyDescriptor) => {
  dataCenter.add(target, name, { resSucc: type.name, returnType: type.name });
  return descriptor;
};

const resFail = (type: Function ) => (target: any, name: string, descriptor: PropertyDescriptor) => {
  dataCenter.add(target, name, { resFail: type.name });
  return descriptor;
};


const description = (desc: string, type: any, isRequired = true) => (target: any, key: string) => {
  let t = Object.prototype.toString.call(type);
  let isList = false;
  
  if (t === '[object Function]') {
    if (!(type instanceof Function)) {
      throw new Error(`${target.constructor.name}实体中的${key}字段类型错误，非自定义字段需要传入字符串`)
    }
    type = type.prototype.constructor.name
  } else if (t === '[object Array]') {
    if (!(type[0] instanceof Function)) {
      throw new Error(`${target.constructor.name}实体中的${key}字段类型错误，非自定义字段需要传入字符串`)
    }
    type = type[0].prototype.constructor.name;
    isList = true;
  } else if(t === '[object String]') {
    if(type.includes('[') && type.includes(']')){
      isList = true;
      type = type.replace(/\[|\]/g, '');
    }
  }

  if(!target[`${key}`]) target[`${key}`] = {};

  target[`${key}`] = { 
    ...target[`${key}`], 
    name: key,
    desc,
    type,
    isRequired,
    isList
  };

};


const entity = (...args: any) => (target: any, key: string) => {
  let extInfo = { keyValue: <any>[] };
  args.forEach((v: any) => {
    extInfo.keyValue.push({
      key: v.prototype.constructor.name.split('_').pop(),
      value: v.prototype.constructor.name,
    })
  });

  if(!target[`${key}`]) target[`${key}`] = {};

  target[`${key}`] = {
    ...target[`${key}`], 
    extInfo
  };
};


export {
  controller,
  Description,
  origin,
  detail,
  groupOwner,
  groupName,
  methodName,
  methodOwner,
  securityLevel,
  state,
  mt,
  encryptionOnly,
  needVerify,
  apiInfo,
  reqBody,
  resSucc,
  resFail,
  description,
  entity
};