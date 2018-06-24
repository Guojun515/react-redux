import * as appIndexType from './appIndex-action-type';
import { get } from './../../axios/HttpUtils';

//首页数据请求Action对象
export const appIndexAction = {
    //往后台请求数据的Action (使用了redux-thunk 中间件)
    getappIndexData: () => (dispatch, getState) => {
        //在函数体内可以使用 dispatch 方法来发射其他 action
        //在函数体内可以使用 getState 方法来获取当前的state
        get("/vm/getVmConfig").then((response) => {
            // 发送数据到store，渲染页面
            dispatch({
                type: appIndexType.SYS_VM_INFO,
                appIndexData : response
            });
        })
    }
}