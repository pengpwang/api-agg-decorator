import { BaseContext } from 'koa';
declare class node_time {
    constructor(ctx: BaseContext);
    getServerTime(/** @isRequired('id', 'name', 'age') */ ctx: BaseContext): Promise<void>;
}
export default node_time;
