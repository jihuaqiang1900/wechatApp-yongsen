//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    menus: [
    {src:"../../static/images/gengyangxincheng.jpeg",name:"唐山市丰润区浭阳新城",subTitle:"项目简介。。。"},
    {src:"../../static/images/wutongdadao.jpeg",name:"唐山市路北区梧桐大道",subTitle:"项目简介。。。"}
],
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
