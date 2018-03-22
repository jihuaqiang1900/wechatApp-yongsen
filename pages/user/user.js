//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        menus: [
            {src:"../../static/images/expressman.png",name:"工作签到",to:"sign"},
            {src:"../../static/images/edit_light.png",name:"电梯档案",to:"mask"},
            {src:"../../static/images/notification.png",name:"公告",to:"tips"},
            {src:"../../static/images/pic_fill.png",name:"天气查询",to:"weather"},
            {src:"../../static/images/subtitle_unblock_light.png",name:"技术分享",to:"share"},
            {src:"../../static/images/phone.png",name:"联系我们",to:"callPhone"},
            {src:"../../static/images/location_light.png",name:"公司地址",to:"place"},
            {src:"../../static/images/mark_fill.png",name:"意见反馈"},
            {src:"../../static/images/all.png",name:"更多"}
        ],
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    jumpTo(e){
        var index = e.currentTarget.dataset.to
        console.log(index)
        switch (index) {
            case'weather':
                wx.navigateTo({
                    url: "../weather/weather"
                })
                break;
            case'callPhone':
                wx.makePhoneCall({
                    phoneNumber: '13663353841'
                })
                break;
            default:
                wx.showToast({
                    title: '功能暂未开放',
                    icon: 'loading',
                    duration: 1000
                })
        }
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
          console.log(app.globalData.userInfo)
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse){
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})
