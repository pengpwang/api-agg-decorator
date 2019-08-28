import fs from 'fs';
import { BaseContext } from 'koa';
import YitJSON from './yitJSON';
import { 
  controller, 
  groupName, 
  // Description, 
  detail, 
  groupOwner, 
  methodName, 
  methodOwner, 
  securityLevel, 
  state, 
  mt, 
  needVerify, 
  encryptionOnly, 
  apiInfo, 
  resSucc,
  reqBody,
  resFail
} from './decorators';
import dataCenter from './dataCenter';
import { Api_NodegetImageList_Params } from '../models/Api_NodegetImageList_Params';
import { Api_NodeCOVERIMAGE_CoverImageInfo } from '../models/Api_NodeCOVERIMAGE_CoverImageInfo';
import { Api_NodeNEWCROWDFUNDING_HomeError } from '../models/Api_NodeNEWCROWDFUNDING_HomeError';

@controller('node_time.getServerTime')
class node_time {
  constructor(ctx: BaseContext) {
    this.getServerTime(ctx);
  }

  // @Description('获取服务器时间')
  // @groupName('node_time')
  @detail('覆盖apiInfo')
  // @groupOwner('kedi')
  // @methodName('node_time.getServerTime')
  // @methodOwner('wpp')
  // @securityLevel('Anonym')
  // @state('OPEN')
  // @mt('activityNotify.addActivityNotify')
  // @needVerify(false)
  // @encryptionOnly(true)
  @apiInfo({
    description: '获取服务器时间',
    methodName: 'node_time.getServerTime',
    groupName: 'node_time',
    groupOwner: 'kedi',
    methodOwner: 'wpp',
    securityLevel: 'Anonym',
    mt: 'activityNotify.addActivityNotify',
    detail: 'apiInfo'
  })
  @reqBody(Api_NodegetImageList_Params)
  @resSucc(Api_NodeCOVERIMAGE_CoverImageInfo)
  @resFail(Api_NodeNEWCROWDFUNDING_HomeError)
  async getServerTime(/** @isRequired('id', 'name', 'age') */ ctx: BaseContext) {
    try {
      let page: Api_NodegetImageList_Params['page'] = ctx.request.body.page;
      // page.limit;
      // page.offset;
      
      
      page.limit

      // 业务逻辑
      console.log(1);
    } catch (err) {
      throw new Error('Error');
    }
  }

}


export default node_time;


fs.writeFile('./info.json', JSON.stringify(YitJSON.generateYitJSON(dataCenter.data), null, '\t'), 'utf8', (err) => {
  if(err){
    throw err;
  }
  dataCenter.data = null;
});


