import { description } from '../lib/decorators';

export class Api_NodeNEWCROWDFUNDING_PageParameter {
  @description('记录偏移量','int')
  offset: number

  @description('返回记录最大数量','int')
  limit: number

}