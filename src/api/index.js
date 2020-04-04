import axios from 'axios'

let url = process.env.VUE_APP_API
// 只是练习，就不对接口地址进行过滤判断，直接写入baseUrl
axios.defaults.baseURL = url


export const requst = ({
    type = 'post',
    data = {},
    globalTips = true,
    config = {},
    url
} = {}) => {
    return axios[type](url, type === 'post' ? { params: data } : data, config).cacth(
        err => {
            // 这里做全局错误拦截处理s
        }
    )
}