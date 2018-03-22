// pages/home/home.js
Page({
    data: {
      location: null,
    },
    onLoad: function () {
      wx.getStorage({
        key: 'USERLOCATION',
          success: (res)=>{
            this.setData({
                location: res.data
            })
          }
      })
    }
})
