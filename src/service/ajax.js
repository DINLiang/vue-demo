import Vue from 'vue';
import Axios from 'axios';

let _options = (options) => {
    return options || {}
}

let _request = (method, url, data, options) => {
    let reqestOptions = {
        method: method,
        body: data,
        url: url,
        timeout: 3000
    }

    if (options.headers) {
        reqestOptions.headers = options.headers;
    }

    if (options.params) {
        reqestOptions.params = options.params;
    }

    return new Promise((resolve, reject) => {
        Axios.request(reqestOptions)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                console.log('ajax error', err);
                reject(err)
            });
    });
}

/*
 * GET/POST data
 * @param url api地址
 * @param options 配置项
 * @param data 需要提交的数据
 */

export const ajax = {
    get(url, options) {
        return _request('get', url, null, _options(options))
    },
    post(url, data, options) {
        return _request('post', url, data, _options(options))
    }
}