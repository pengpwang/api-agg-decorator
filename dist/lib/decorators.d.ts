declare const apiInfo: (content: object) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
declare const Description: import("ts-toolbelt/out/types/src/Function/Curry").Curry<(text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor>;
declare const origin: import("ts-toolbelt/out/types/src/Function/Curry").Curry<(text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor>;
declare const detail: import("ts-toolbelt/out/types/src/Function/Curry").Curry<(text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor>;
declare const groupOwner: import("ts-toolbelt/out/types/src/Function/Curry").Curry<(text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor>;
declare const groupName: import("ts-toolbelt/out/types/src/Function/Curry").Curry<(text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor>;
declare const methodName: import("ts-toolbelt/out/types/src/Function/Curry").Curry<(text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor>;
declare const methodOwner: import("ts-toolbelt/out/types/src/Function/Curry").Curry<(text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor>;
declare const securityLevel: import("ts-toolbelt/out/types/src/Function/Curry").Curry<(text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor>;
declare const state: import("ts-toolbelt/out/types/src/Function/Curry").Curry<(text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor>;
declare const mt: import("ts-toolbelt/out/types/src/Function/Curry").Curry<(text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor>;
declare const encryptionOnly: import("ts-toolbelt/out/types/src/Function/Curry").Curry<(text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor>;
declare const needVerify: import("ts-toolbelt/out/types/src/Function/Curry").Curry<(text: string | boolean | any[]) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor>;
declare const controller: (router: string) => (target: any) => void;
declare const reqBody: (type: Function) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
declare const resSucc: (type: Function) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
declare const resFail: (type: Function) => (target: any, name: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
declare const description: (desc: string, type: any, isRequired?: boolean) => (target: any, key: string) => void;
declare const entity: (...args: any) => (target: any, key: string) => void;
export { controller, Description, origin, detail, groupOwner, groupName, methodName, methodOwner, securityLevel, state, mt, encryptionOnly, needVerify, apiInfo, reqBody, resSucc, resFail, description, entity };