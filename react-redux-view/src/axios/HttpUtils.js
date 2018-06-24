import axios from 'axios';
import { notification } from 'antd';

//默认携带cookie信息
axios.defaults.withCredentials=true;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    showErrorMsg(error.message);
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    let data = response.data;
    let status = response.status;
    if (status === 200) {
        if (!data.success) {
            showErrorMsg(data.message ? data.message : "系统异常");
        }
    } else {
        if (!data.success) {
            showErrorMsg("系统异常：" + status);
        }
    }
    return data.result;
}, function (error) {
    showErrorMsg(error.message);
    return Promise.reject(error);
});

/**
 * 统一处理错误请求的错误消息
 * @param {*} errorMsg 
 */
const showErrorMsg = errorMsg => {
    notification['error']({
        message: '错误',
        description: errorMsg,
    });
}

/**
 * 网络请求get方法
 * @param {*} url 
 * @param {*} config 
 */
export const get = (url, config) => axios.get(url,config);

/**
 * 网络请求Post方法
 * @param {*} url 
 * @param {*} data 
 * @param {*} config 
 */
export const post = (url, data, config) => axios.post(url,data, config);