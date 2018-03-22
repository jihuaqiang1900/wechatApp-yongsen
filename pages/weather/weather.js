// pages/home/home.js
var bmap = require('../../libs/bmap-wx.js');
Page({
  data: {
    weatherData: ''
  },
  getWeather() {
    // 新建百度地图对象
    var BMap = new bmap.BMapWX({
      ak: 'qjR3D2sOtxn8U32h8IB3UNerVBuvbQIk'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = (data) => {
      let weatherData = data.currentWeather[0];
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      this.setData({
        weatherData: weatherData
      });
    }
    // 发起weather请求
    BMap.weather({
      fail: fail,
      success: success
    });
  },
  onLoad: function () {
    this.getWeather()
  }
})
