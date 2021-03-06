const tabBarData = (theme) => {
  let data
  // 设置主题
  const defaultData = {
    'color': '#fff',
    'selectedColor': '#fff',
    'borderStyle': 'white',
    'backgroundColor': '#fff',
    'list': [
      {
        'pagePath': 'pages/home/main',
        'iconPath': 'static/images/icon/nothing.png',
        'selectedIconPath': 'static/images/icon/nothing.png',
        'text': '首页'
      },
      {
        'pagePath': 'pages/componentsDemoMenu/main',
        'iconPath': 'static/images/icon/nothing.png',
        'selectedIconPath': 'static/images/icon/nothing.png',
        'text': '组件'
      }
    ]
  }
  // 可以配置底部导航主题
  switch (theme) {
    case 'green':
      break
    default:
      data = defaultData
      break
  }
  return data
}

const windowData = (theme) => {
  let data
  const defaultData = {
    'backgroundTextStyle': 'light',
    'navigationBarBackgroundColor': '#fff',
    'navigationBarTitleText': 'WeChat',
    'navigationBarTextStyle': 'black'
  }
  switch (theme) {
    case 'green':
      break
    default:
      data = defaultData
      break
  }
  return data
}

module.exports = {
  // 云函数启用
  'cloud': true,
  // 使用插件
  // 'plugins': {
  //   'myPlugin': {
  //     'version': '1.0.0',
  //     'provider': 'wx116d0dd5e6a39ac7'
  //   }
  // },
  'networkTimeout': {
    'request': 50000
  },
  'window': windowData(),
  // 页面配置
  'pages': [
    'pages/home/main',
    // 测试首页
    'pages/componentsDemoMenu/main'
  ],
  // 分包
  'subPackages': [
    // 测试模块
    {
      'root': 'pages/test',
      // 处理不同环境的打包
      'pages': process.env.NODE_ENV === 'development' ? [
        'cloudTest/main',
        'font_color/main',
        'newpagedemo/main',
        'componentsDemo/Layout/main',
        'componentsDemo/Button/main',
        'componentsDemo/Cell/main',
        'componentsDemo/Icon/main',
        'componentsDemo/Popup/main',
        'componentsDemo/scoreStar/main',
        'componentsDemo/Transition/main',
        'componentsDemo/CheckBox/main',
        'componentsDemo/Field/main',
        'componentsDemo/Radio/main',
        'componentsDemo/Rate/main',
        'componentsDemo/Search/main',
        'componentsDemo/Slider/main',
        'componentsDemo/Stepper/main',
        'componentsDemo/Switch/main',
        'componentsDemo/SwitchCell/main',
        'componentsDemo/ActionSheet/main',
        'componentsDemo/Dialog/main',
        'componentsDemo/Loading/main',
        'componentsDemo/Notify/main',
        'componentsDemo/SwipeCell/main',
        'componentsDemo/Toast/main',
        'componentsDemo/Collapse/main',
        'componentsDemo/NoticeBar/main',
        'componentsDemo/Panel/main',
        'componentsDemo/Progress/main',
        'componentsDemo/Steps/main',
        'componentsDemo/Tag/main',
        'componentsDemo/TreeSelect/main',
        'componentsDemo/Badge/main',
        'componentsDemo/NavBar/main',
        'componentsDemo/Tab/main',
        'componentsDemo/Tabbar/main',
        'componentsDemo/Card/main',
        'componentsDemo/SubmitBar/main',
        'componentsDemo/Calendar/main',
        'componentsDemo/GoodsAction/main',
        'componentsDemo/Lottery-Wheel/main',
        'componentsDemo/Lottery-Table/main',
        'componentsDemo_vue/formTable/main',
        'componentsDemo_vue/upLoadImgs/main'
      ] : ['cloudTest/main']
    }
  ],
  // 导航栏
  'tabBar': tabBarData(process.env.THEME),
  // 使用的组件
  'usingComponents': {
    'van-action-sheet': '/static/components/action-sheet/index',
    'van-badge': '/static/components/badge/index',
    'van-badge-group': '/static/components/badge-group/index',
    'van-button': '/static/components/button/index',
    'van-card': '/static/components/card-mo/index',
    'van-calendar': '/static/components/calendar/index',
    'van-cell': '/static/components/cell/index',
    'van-cell-group': '/static/components/cell-group/index',
    'van-checkbox': '/static/components/checkbox/index',
    'van-checkbox-group': '/static/components/checkbox-group/index',
    'van-col': '/static/components/col/index',
    'van-dialog': '/static/components/dialog/index',
    'van-field': '/static/components/field/index',
    'van-goods-action': '/static/components/goods-action/index',
    'van-goods-action-icon': '/static/components/goods-action-icon/index',
    'van-goods-action-button': '/static/components/goods-action-button/index',
    'van-icon': '/static/components/icon/index',
    'van-loading': '/static/components/loading/index',
    'van-nav-bar': '/static/components/nav-bar/index',
    'van-notice-bar': '/static/components/notice-bar/index',
    'van-notify': '/static/components/notify/index',
    'van-panel': '/static/components/panel/index',
    'van-popup': '/static/components/popup/index',
    'van-progress': '/static/components/progress/index',
    'van-progress-cycle': '/static/components/progress-cycle/index',
    'van-radio': '/static/components/radio/index',
    'van-radio-group': '/static/components/radio-group/index',
    'van-row': '/static/components/row/index',
    'van-search': '/static/components/search/index',
    'van-slider': '/static/components/slider/index',
    'van-stepper': '/static/components/stepper/index',
    'van-steps': '/static/components/steps/index',
    'van-submit-bar': '/static/components/submit-bar/index',
    'van-swipe-cell': '/static/components/swipe-cell/index',
    'van-switch': '/static/components/switch/index',
    'van-switch-cell': '/static/components/switch-cell/index',
    'van-tab': '/static/components/tab/index',
    'van-tabs': '/static/components/tabs/index',
    'van-tabbar': '/static/components/tabbar/index',
    'van-tabbar-item': '/static/components/tabbar-item/index',
    'van-tag': '/static/components/tag/index',
    'van-toast': '/static/components/toast/index',
    'van-transition': '/static/components/transition/index',
    'van-tree-select': '/static/components/tree-select/index',
    'van-rate': '/static/components/rate/index',
    'van-collapse': '/static/components/collapse/index',
    'van-collapse-item': '/static/components/collapse-item/index',
    'score-star': '/static/components/score-star/index',
    'lottery-table': '/static/components/lottery-table/index',
    'lottery-wheel': '/static/components/lottery-wheel/index',
    'cover-getformid': '/static/components/cover-Getformid/index'
    // 'video-player': 'plugin://myPlugin/player'
  },
  'permission': {
    'scope.userLocation': {
      'desc': '你的位置信息将用于小程序位置接口的效果展示'
    }
  },
  'navigateToMiniProgramAppIdList': [
    'wx423e2c8e95f14239',
    'wx0366ac869c1db611',
    'wx7ec177e36220242a',
    'wx6909a1104b564657'
  ]
}
