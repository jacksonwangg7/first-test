var bmap = require('../../libs/bmap-wx.min.js');
// pages/demo/demo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0,
    inputVal: "",
    subShow: false,
    sugData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    const _this = this
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        console.log(res)
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      subShow: true
    });
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'vZ8DsEICEjMSULTztOf3cG4F1ML1YGNC'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      console.log(data)
      var sugData = data.result;
      that.setData({
        sugData: sugData
      });
    }
    // 发起suggestion检索请求 
    BMap.suggestion({
      query: e.detail.value,
      region: '贵州',
      city_limit: true,
      fail: fail,
      success: success
    });
  },
  routerLink: function (option) {
    var subid = option.currentTarget.dataset.subid
    const latitude = this.data.sugData[subid].location.lat
    const longitude = this.data.sugData[subid].location.lng
    const name = this.data.sugData[subid].name
    const that = this
    wx.openLocation({
      latitude,
      longitude,
      name,
      scale: 15,
      success(res) {
        that.setData({
          inputVal: "",
          subShow: false
        });
      }
    })
  },
  subHide: function () {
    this.setData({
      subShow: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})