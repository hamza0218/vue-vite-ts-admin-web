import request from '../utils/request';
const TEST = '';

export const fetchData = () => {
    return request({
        url: './table.json',
        method: 'get'
    });
};
// 登录
export const login_ax = (query:any) => {
    return request({
        url: TEST + '/im-admin/login',
        method: 'get',
        params: query
    });
};