/* jshint esversion: 6 */

/**
 * 封装微信的异步请求 改为 promise
 * @param {funciton} fn 传入的微信请求方法
 */
export const toPromise = (fn) => {
  return (obj = {}) => {

    return new Promise((resolve, reject) => {
      obj.success = (res) => {
        res = res.data ? res.data : res;
        resolve(res);
      };
      obj.fail = (res) => {
        reject(res);
      };
      fn(obj);
    });
  };
}

module.export = {
  toPromise: toPromise
};
