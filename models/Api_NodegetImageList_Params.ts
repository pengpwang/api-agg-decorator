import { description } from '../lib/decorators';
import { Api_NodeNEWCROWDFUNDING_PageParameter } from './Api_NodeNEWCROWDFUNDING_PageParameter'

export class Api_NodegetImageList_Params {
  @description('spuId', 'int')
  spuId: number

  @description('contentType', 'string', false)
  contentType: string

  @description('分页', Api_NodeNEWCROWDFUNDING_PageParameter)
  page: Api_NodeNEWCROWDFUNDING_PageParameter

}