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
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("../lib/decorators");
const Api_NodegetImageList_Params_1 = require("./Api_NodegetImageList_Params");
const Api_NodeSEGMENT_SegmentInfo_1 = require("./Api_NodeSEGMENT_SegmentInfo");
const Api_NodeTEXT_TextInfo_1 = require("./Api_NodeTEXT_TextInfo");
const Api_NodeVIDEO_VideoInfo_1 = require("./Api_NodeVIDEO_VideoInfo");
class Api_NodeCOVERIMAGE_CoverImageInfo {
}
__decorate([
    decorators_1.description('图片链接', 'string'),
    __metadata("design:type", String)
], Api_NodeCOVERIMAGE_CoverImageInfo.prototype, "url", void 0);
__decorate([
    decorators_1.description('图宽度', 'int'),
    __metadata("design:type", Number)
], Api_NodeCOVERIMAGE_CoverImageInfo.prototype, "width", void 0);
__decorate([
    decorators_1.description('图高度', 'int'),
    __metadata("design:type", Number)
], Api_NodeCOVERIMAGE_CoverImageInfo.prototype, "height", void 0);
__decorate([
    decorators_1.description('字符串数组', '[string]'),
    __metadata("design:type", Array)
], Api_NodeCOVERIMAGE_CoverImageInfo.prototype, "strArr", void 0);
__decorate([
    decorators_1.description('测试', Api_NodegetImageList_Params_1.Api_NodegetImageList_Params),
    __metadata("design:type", Object)
], Api_NodeCOVERIMAGE_CoverImageInfo.prototype, "spu", void 0);
__decorate([
    decorators_1.description('测试', [Api_NodegetImageList_Params_1.Api_NodegetImageList_Params]),
    __metadata("design:type", Array)
], Api_NodeCOVERIMAGE_CoverImageInfo.prototype, "spuList", void 0);
__decorate([
    decorators_1.description('内容信息 本字段为动态数据类型, 可能类型为以下种类:SegmentInfo, TextInfo, VideoInfo, ImageInfo, SpuInfo, ', '[Api_DynamicEntity]'),
    decorators_1.entity(Api_NodeSEGMENT_SegmentInfo_1.Api_NodeSEGMENT_SegmentInfo, Api_NodeTEXT_TextInfo_1.Api_NodeTEXT_TextInfo, Api_NodeVIDEO_VideoInfo_1.Api_NodeVIDEO_VideoInfo),
    __metadata("design:type", Array)
], Api_NodeCOVERIMAGE_CoverImageInfo.prototype, "dynamicEntityList", void 0);
exports.Api_NodeCOVERIMAGE_CoverImageInfo = Api_NodeCOVERIMAGE_CoverImageInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBpX05vZGVDT1ZFUklNQUdFX0NvdmVySW1hZ2VJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL0FwaV9Ob2RlQ09WRVJJTUFHRV9Db3ZlckltYWdlSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtEQUF3RDtBQUN4RCwrRUFBMkU7QUFDM0UsK0VBQTRFO0FBQzVFLG1FQUFnRTtBQUNoRSx1RUFBb0U7QUFFcEUsTUFBYSxpQ0FBaUM7Q0F3QjdDO0FBckJDO0lBREMsd0JBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDOzs4REFDbkI7QUFHWDtJQURDLHdCQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQzs7Z0VBQ2I7QUFHYjtJQURDLHdCQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQzs7aUVBQ1o7QUFHZDtJQURDLHdCQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQzs4QkFDekIsS0FBSztpRUFBUTtBQUdyQjtJQURDLHdCQUFXLENBQUMsSUFBSSxFQUFFLHlEQUEyQixDQUFDOzs4REFDdkM7QUFHUjtJQURDLHdCQUFXLENBQUMsSUFBSSxFQUFFLENBQUUseURBQTJCLENBQUUsQ0FBQzs4QkFDMUMsS0FBSztrRUFBSztBQUluQjtJQUZDLHdCQUFXLENBQUMsbUZBQW1GLEVBQUMscUJBQXFCLENBQUM7SUFDdEgsbUJBQU0sQ0FBQyx5REFBMkIsRUFBQyw2Q0FBcUIsRUFBQyxpREFBdUIsQ0FBQzs4QkFDL0QsS0FBSzs0RUFBSztBQXRCL0IsOEVBd0JDIn0=