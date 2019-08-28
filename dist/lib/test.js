"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const yitJSON_1 = __importDefault(require("./yitJSON"));
const decorators_1 = require("./decorators");
const dataCenter_1 = __importDefault(require("./dataCenter"));
const Api_NodegetImageList_Params_1 = require("../models/Api_NodegetImageList_Params");
const Api_NodeCOVERIMAGE_CoverImageInfo_1 = require("../models/Api_NodeCOVERIMAGE_CoverImageInfo");
const Api_NodeNEWCROWDFUNDING_HomeError_1 = require("../models/Api_NodeNEWCROWDFUNDING_HomeError");
let node_time = class node_time {
    constructor(ctx) {
        this.getServerTime(ctx);
    }
    // @Description('获取服务器时间')
    // @groupName('node_time')
    getServerTime(/** @isRequired('id', 'name', 'age') */ ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let page = ctx.request.body.page;
                // page.limit;
                // page.offset;
                page.limit;
                // 业务逻辑
                console.log(1);
            }
            catch (err) {
                throw new Error('Error');
            }
        });
    }
};
__decorate([
    decorators_1.detail('覆盖apiInfo')
    // @groupOwner('kedi')
    // @methodName('node_time.getServerTime')
    // @methodOwner('wpp')
    // @securityLevel('Anonym')
    // @state('OPEN')
    // @mt('activityNotify.addActivityNotify')
    // @needVerify(false)
    // @encryptionOnly(true)
    ,
    decorators_1.apiInfo({
        description: '获取服务器时间',
        methodName: 'node_time.getServerTime',
        groupName: 'node_time',
        groupOwner: 'kedi',
        methodOwner: 'wpp',
        securityLevel: 'Anonym',
        mt: 'activityNotify.addActivityNotify',
        detail: 'apiInfo'
    }),
    decorators_1.reqBody(Api_NodegetImageList_Params_1.Api_NodegetImageList_Params),
    decorators_1.resSucc(Api_NodeCOVERIMAGE_CoverImageInfo_1.Api_NodeCOVERIMAGE_CoverImageInfo),
    decorators_1.resFail(Api_NodeNEWCROWDFUNDING_HomeError_1.Api_NodeNEWCROWDFUNDING_HomeError),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], node_time.prototype, "getServerTime", null);
node_time = __decorate([
    decorators_1.controller('node_time.getServerTime'),
    __metadata("design:paramtypes", [Object])
], node_time);
exports.default = node_time;
fs_1.default.writeFile('./info.json', JSON.stringify(yitJSON_1.default.generateYitJSON(dataCenter_1.default.data), null, '\t'), 'utf8', (err) => {
    if (err) {
        throw err;
    }
    dataCenter_1.default.data = null;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBb0I7QUFFcEIsd0RBQWdDO0FBQ2hDLDZDQWlCc0I7QUFDdEIsOERBQXNDO0FBQ3RDLHVGQUFvRjtBQUNwRixtR0FBZ0c7QUFDaEcsbUdBQWdHO0FBR2hHLElBQU0sU0FBUyxHQUFmLE1BQU0sU0FBUztJQUNiLFlBQVksR0FBZ0I7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQXVCcEIsYUFBYSxDQUFDLHVDQUF1QyxDQUFDLEdBQWdCOztZQUMxRSxJQUFJO2dCQUNGLElBQUksSUFBSSxHQUF3QyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3RFLGNBQWM7Z0JBQ2QsZUFBZTtnQkFHZixJQUFJLENBQUMsS0FBSyxDQUFBO2dCQUVWLE9BQU87Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDO0tBQUE7Q0FFRixDQUFBO0FBaEJDO0lBdEJDLG1CQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3BCLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLHFCQUFxQjtJQUNyQix3QkFBd0I7O0lBQ3ZCLG9CQUFPLENBQUM7UUFDUCxXQUFXLEVBQUUsU0FBUztRQUN0QixVQUFVLEVBQUUseUJBQXlCO1FBQ3JDLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLEVBQUUsRUFBRSxrQ0FBa0M7UUFDdEMsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FBQztJQUNELG9CQUFPLENBQUMseURBQTJCLENBQUM7SUFDcEMsb0JBQU8sQ0FBQyxxRUFBaUMsQ0FBQztJQUMxQyxvQkFBTyxDQUFDLHFFQUFpQyxDQUFDOzs7OzhDQWUxQztBQTNDRyxTQUFTO0lBRGQsdUJBQVUsQ0FBQyx5QkFBeUIsQ0FBQzs7R0FDaEMsU0FBUyxDQTZDZDtBQUdELGtCQUFlLFNBQVMsQ0FBQztBQUd6QixZQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFPLENBQUMsZUFBZSxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ2hILElBQUcsR0FBRyxFQUFDO1FBQ0wsTUFBTSxHQUFHLENBQUM7S0FDWDtJQUNELG9CQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQyJ9