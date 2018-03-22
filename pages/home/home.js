// pages/home/home.js
var bmap = require('../../libs/bmap-wx.js'); 
Page({
  data: {
    location: null,
    locationDetail: null,
    weatherData: '',
    userCity: '',
    imgUrls: [
      '/../../static/images/im3.jpeg',
      './../../static/images/im2.jpeg',
      './../../static/images/im1.jpeg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
  },
    openMap(){
    },
  getWeather () {
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
              userCity: data.currentWeather[0].currentCity,
              weatherData: weatherData
          });
      }
      // 发起weather请求
      BMap.weather({
          fail: fail,
          success: success
      });
  },
  getLocation () {
      wx.getLocation({
          type: 'gcj02',
          success: (res) => {
            let {latitude, longitude, speed, accuracy} = res
            this.setData({
                location:{
                    latitude: latitude,
                    longitude: longitude,
                    speed: speed,
                    accuracy: accuracy
                }
            })
            wx.setStorage({
              key: 'USERLOCATION',
              data: {
                latitude: latitude,
                longitude: longitude
              },
            })
            this.getLocationDetail()
          }
      })
  },
  getLocationDetail(){
      var BMap = new bmap.BMapWX({
          ak: 'qjR3D2sOtxn8U32h8IB3UNerVBuvbQIk'
      });
      var fail = (data) => {
          console.log(data)
      };
      var success = (data) => {
        this.setData({
            locationDetail: data.wxMarkerData[0].address
        });
      }
      // 发起regeocoding检索请求
      BMap.regeocoding({
          fail: fail,
          success: success
      });
  },
  onLoad: function () {
    this.getWeather()
    this.getLocation()
  } 
})
