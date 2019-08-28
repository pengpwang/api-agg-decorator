import { Data } from './types';
declare class DataCenter {
    data: Data;
    controllerMap: Map<string, Function>;
    constructor();
    add(target: any, name: string, content: any): void;
    addController(target: any, content: any): void;
}
declare const dataCenter: DataCenter;
export default dataCenter;
