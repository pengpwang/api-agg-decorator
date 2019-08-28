"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    parameterInfoList: [],
    reqStructList: [],
    respStructList: [],
    returnType: '',
    securityLevel: '',
    state: 'OPEN'
};
class DataCenter {
    constructor() {
        this.data = {};
        this.controllerMap = new Map();
    }
    add(target, name, content) {
        // if(!is.object(content)){
        //   throw new Error(`illegal params [content] for DataCenter.add`);
        // }
        // 兼容当target为实例原型的时候，将target指回类本身
        if (!target.prototype && target.constructor) {
            target = target.constructor;
        }
        const key = `${target.name}.${name}`;
        if (!this.data[key])
            this.data[key] = JSON.parse(JSON.stringify(dataItemTpl));
        //对content统一处理
        Object.keys(content).forEach(k => {
            // 数组处理
            if (Array.isArray(this.data[key][k])) {
                this.data[key][k] = [...this.data[key][k], ...content[k]];
            }
            else {
                // 对象处理
                Object.assign(this.data[key], { [k]: content[k] });
            }
        });
        // console.log(this.data);
    }
    addController(target, content) {
        // if(!is.object(content)){
        //   throw new Error(`illegal params [content] for DataCenter.addController`);
        // }
        let k = Object.keys(content)[0];
        this.controllerMap.set(k, content[k]);
        // console.log(this.controllerMap);
    }
}
const dataCenter = new DataCenter();
exports.default = dataCenter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YUNlbnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kYXRhQ2VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsSUFBSSxXQUFXLEdBQUc7SUFDaEIsV0FBVyxFQUFFLEVBQUU7SUFDZixNQUFNLEVBQUUsRUFBRTtJQUNWLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFNBQVMsRUFBRSxFQUFFO0lBQ2IsVUFBVSxFQUFFLE1BQU07SUFDbEIsVUFBVSxFQUFFLEVBQUU7SUFDZCxXQUFXLEVBQUUsRUFBRTtJQUNmLEVBQUUsRUFBRSxFQUFFO0lBQ04sVUFBVSxFQUFFLEtBQUs7SUFDakIsTUFBTSxFQUFFLE1BQU07SUFDZCxpQkFBaUIsRUFBVSxFQUFFO0lBQzdCLGFBQWEsRUFBVSxFQUFFO0lBQ3pCLGNBQWMsRUFBVSxFQUFFO0lBQzFCLFVBQVUsRUFBRSxFQUFFO0lBQ2QsYUFBYSxFQUFFLEVBQUU7SUFDakIsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFDO0FBRUYsTUFBTSxVQUFVO0lBSWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsR0FBRyxDQUFDLE1BQVcsRUFBRSxJQUFZLEVBQUUsT0FBWTtRQUN6QywyQkFBMkI7UUFDM0Isb0VBQW9FO1FBQ3BFLElBQUk7UUFFSixpQ0FBaUM7UUFDakMsSUFBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBQztZQUN6QyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUM3QjtRQUVELE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNyQyxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRTdFLGNBQWM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixPQUFPO1lBQ1AsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNEO2lCQUFJO2dCQUNILE9BQU87Z0JBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3BEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCwwQkFBMEI7SUFDNUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUFXLEVBQUUsT0FBWTtRQUNyQywyQkFBMkI7UUFDM0IsOEVBQThFO1FBQzlFLElBQUk7UUFFSixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0QyxtQ0FBbUM7SUFDckMsQ0FBQztDQUNGO0FBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUVwQyxrQkFBZSxVQUFVLENBQUMifQ==