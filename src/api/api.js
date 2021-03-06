/* jshint esversion: 6 */
// 统一处理 页面请求 
import {
  ajaxAll
} from "@/utils/Wxrequest";
import basicInfo from "../store/basicInfo.js";
import {
  decrypt
} from "@/utils/cloudfunc/crypt";
import {
  getOpenid
} from "@/utils/cloudfunc/getUserInfo";

import dialog from "@/../static/components/dialog-mo/dialog";
import config from '@/config.js'

// 页面接口 

// 获取首页信息
export const getHomeInfo = async () => {
  let commonheader = await getcommonheader();
  let url = `${config.static_url_basic}${config.static_url_file}/home_data.json`;
  // decryptheader();

  return ajaxAll(url, "GET", {}, commonheader).then(res => {
    let resdata = res;
    return resdata;
  })
}


// 用户接口

/**
 * 从服务器获取用户基本信息
 * @param {Number} retryTimes 当前登录重试次数
 * @param {Number} isReGet 是否重新获取信息 true 时重新获取
 */
export const getUserInfoSer = async (retryTimes) => {
  retryTimes = retryTimes | 0;
  let url = `${config.host}/userInfo`;
  return getOpenid().then(async (res) => {
    console.log("res.islogin", res.islogin)
    if (res.islogin) {
      return res;
    } else {
      if (res.openid) {
        let commonheader = {
          appid: res.appid,
          openid: res.openid
        }
        return ajaxAll(url, "GET", {}, commonheader).then(res => {
          let resdata = res.result;
          resdata.isgetinfo = true;
          basicInfo.commit('updataByKey', resdata);
          wx.setStorageSync('openid', basicInfo.state);
          return resdata;
        })
      } else if (retryTimes < config.loginRetryTimes - 1) { // 登录重试
        retryTimes++
        await setTimeout(function () {
          return getUserInfoSer(retryTimes);
        }, config.loginRetryDelay)
      } else { // 重试超时
        wx.showToast({
          title: '网络异常，请尝试重启小程序',
          icon: 'none'
        });
      }
    }
  });

}

/**
 * 提交修改信息
 * @param {Object} data 修改后的用户信息
 */
export const saveEditUser = async (data) => {
  let commonheader = await getcommonheader();
  let url = `${config.host}/editUser`;
  return ajaxAll(url, "POST", data, commonheader).then(res => {
    let resdata = res;
    return resdata;
  })
}

// 发送ajax 请求 带 请求头
export const ajax = async (url, method, params) => {
  let commonheader = await getcommonheader();
  return ajaxAll(url, method, params, commonheader).then(res => {
    let resdata = res;
    return resdata;
  })
}

// 获取通用请求头
export const getcommonheader = async () => {
  let commonheader = {};
  if (basicInfo.state.islogin) {
    commonheader = {
      appid: basicInfo.state.appid,
      openid: basicInfo.state.openid
    }
  }
  return commonheader
}

// 解密请求头内的appid 和 openid
const decryptheader = async () => {
  let _aid = await decrypt(basicInfo.state.appid);
  let _oid = await decrypt(basicInfo.state.openid);
  let decrypt_data = {
    appid: _aid,
    openid: _oid
  }
  console.log("解密结果", decrypt_data);
}

const Api = {};
Api.getcommonheader = getcommonheader;
Api.getUserInfoSer = getUserInfoSer;
Api.saveEditUser = saveEditUser;
Api.getHomeInfo = getHomeInfo;
Api.ajax = ajax;
export default Api;

module.export = {
  getcommonheader,
  getUserInfoSer,
  saveEditUser,
  getHomeInfo,
  ajax
}
