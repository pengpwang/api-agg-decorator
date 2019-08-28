"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = __importDefault(require("ramda"));
const dataCenter_1 = __importDefault(require("./dataCenter"));
const _desc = (type, text) => (target, name, descriptor) => {
    descriptor.value[type] = text;
    dataCenter_1.default.add(target, name, { [type]: text });
    return descriptor;
};
const apiInfo = (content) => (target, name, descriptor) => {
    dataCenter_1.default.add(target, name, Object.assign({}, content));
    return descriptor;
};
exports.apiInfo = apiInfo;
const desc = ramda_1.default.curry(_desc);
const Description = desc('description');
exports.Description = Description;
const origin = desc('origin');
exports.origin = origin;
const detail = desc('detail');
exports.detail = detail;
const groupOwner = desc('groupOwner');
exports.groupOwner = groupOwner;
const groupName = desc('groupName');
exports.groupName = groupName;
const methodName = desc('methodName');
exports.methodName = methodName;
const methodOwner = desc('methodOwner');
exports.methodOwner = methodOwner;
const securityLevel = desc('securityLevel');
exports.securityLevel = securityLevel;
const state = desc('state');
exports.state = state;
const mt = desc('mt');
exports.mt = mt;
const encryptionOnly = desc('encryptionOnly');
exports.encryptionOnly = encryptionOnly;
const needVerify = desc('needVerify');
exports.needVerify = needVerify;
const controller = (router) => (target) => {
    dataCenter_1.default.addController(target, { [router]: target });
};
exports.controller = controller;
const reqBody = (type) => (target, name, descriptor) => {
    dataCenter_1.default.add(target, name, { reqBody: type.name });
    return descriptor;
};
exports.reqBody = reqBody;
const resSucc = (type) => (target, name, descriptor) => {
    dataCenter_1.default.add(target, name, { resSucc: type.name, returnType: type.name });
    return descriptor;
};
exports.resSucc = resSucc;
const resFail = (type) => (target, name, descriptor) => {
    dataCenter_1.default.add(target, name, { resFail: type.name });
    return descriptor;
};
exports.resFail = resFail;
const description = (desc, type, isRequired = true) => (target, key) => {
    let t = Object.prototype.toString.call(type);
    let isList = false;
    if (t === '[object Function]') {
        if (!(type instanceof Function)) {
            throw new Error(`${target.constructor.name}实体中的${key}字段类型错误，非自定义字段需要传入字符串`);
        }
        type = type.prototype.constructor.name;
    }
    else if (t === '[object Array]') {
        if (!(type[0] instanceof Function)) {
            throw new Error(`${target.constructor.name}实体中的${key}字段类型错误，非自定义字段需要传入字符串`);
        }
        type = type[0].prototype.constructor.name;
        isList = true;
    }
    else if (t === '[object String]') {
        if (type.includes('[') && type.includes(']')) {
            isList = true;
            type = type.replace(/\[|\]/g, '');
        }
    }
    if (!target[`${key}`])
        target[`${key}`] = {};
    target[`${key}`] = Object.assign({}, target[`${key}`], { name: key, desc,
        type,
        isRequired,
        isList });
};
exports.description = description;
const entity = (...args) => (target, key) => {
    let extInfo = { keyValue: [] };
    args.forEach((v) => {
        extInfo.keyValue.push({
            key: v.prototype.constructor.name.split('_').pop(),
            value: v.prototype.constructor.name,
        });
    });
    if (!target[`${key}`])
        target[`${key}`] = {};
    target[`${key}`] = Object.assign({}, target[`${key}`], { extInfo });
};
exports.entity = entity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQXNCO0FBQ3RCLDhEQUFzQztBQUV0QyxNQUFNLEtBQUssR0FBRyxDQUFDLElBQVksRUFBRSxJQUE4QixFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQVcsRUFBRSxJQUFZLEVBQUUsVUFBOEIsRUFBRSxFQUFFO0lBQzVILFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzlCLG9CQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDL0MsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBVyxFQUFFLElBQVksRUFBRSxVQUE4QixFQUFFLEVBQUU7SUFDakcsb0JBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksb0JBQU8sT0FBTyxFQUFHLENBQUM7SUFDN0MsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBMEdBLDBCQUFPO0FBeEdULE1BQU0sSUFBSSxHQUFHLGVBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBMkZ0QyxrQ0FBVztBQTFGYixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUEyRjVCLHdCQUFNO0FBMUZSLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQTJGNUIsd0JBQU07QUExRlIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FB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QUUsQ0FBQztJQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDdEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDcEIsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ2xELEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJO1NBQ3BDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQUUsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFNUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMscUJBQ1gsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFDbkIsT0FBTyxHQUNSLENBQUM7QUFDSixDQUFDLENBQUM7QUFzQkEsd0JBQU0ifQ==