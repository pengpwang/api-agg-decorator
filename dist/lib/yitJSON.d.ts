import { Data } from './types';
declare class YitJSON {
    private static ApiModelsPath;
    private static ModelsFileLists;
    private static handlerApiType;
    private static GenerateStructListItem;
    private static GenerateStructList;
    private static GenerateParameterInfoList;
    private static GenerateReqStructList;
    private static GenerateRespStructList;
    private static GenerateCodeList;
    static generateYitJSON(data: Data): {
        apiList: any[];
        codeList: any[];
    };
}
export default YitJSON;
