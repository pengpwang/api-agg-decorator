import { description, entity } from '../lib/decorators';
import { Api_NodegetImageList_Params } from './Api_NodegetImageList_Params'
import { Api_NodeSEGMENT_SegmentInfo } from './Api_NodeSEGMENT_SegmentInfo';
import { Api_NodeTEXT_TextInfo } from './Api_NodeTEXT_TextInfo';
import { Api_NodeVIDEO_VideoInfo } from './Api_NodeVIDEO_VideoInfo';

export class Api_NodeCOVERIMAGE_CoverImageInfo {
  
  @description('图片链接', 'string')
  url: string
    
  @description('图宽度', 'int')
  width: number
    
  @description('图高度', 'int')
  height: number

  @description('字符串数组', '[string]')
  strArr: Array<string>

  @description('测试', Api_NodegetImageList_Params)
  spu: any

  @description('测试', [ Api_NodegetImageList_Params ])
  spuList: Array<any>

  @description('内容信息 本字段为动态数据类型, 可能类型为以下种类:SegmentInfo, TextInfo, VideoInfo, ImageInfo, SpuInfo, ','[Api_DynamicEntity]')
  @entity(Api_NodeSEGMENT_SegmentInfo,Api_NodeTEXT_TextInfo,Api_NodeVIDEO_VideoInfo)
  dynamicEntityList: Array<any>

}
