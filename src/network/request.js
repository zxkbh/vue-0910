import Axios from "axios";

export function request(config) {
  // 创建Axios实例
  const instance = Axios.create({
    baseURL: "http://127.0.0.1:8085",
    // baseURL: "/api",
    timeout: 1000
  });

  // Axios请求拦截
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    result => {
      return result.data;
    },
    err => {
      console.log(err);
    }
  );

  // 发送网络请求 axios返回的是Promise
  return instance(config);
}
