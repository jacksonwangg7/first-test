// pages/post-detail/post-detail.js
import postsdata from '../../data/posts-data.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var post_id = options.postId
    this.data.currentPostId = post_id
    this.setData({
      postdata: postsdata.postLists[post_id]
    })
    // 读取缓存
    var postsCollected = wx.getStorageSync('postsCollected')
    if (postsCollected) {
      if (postsCollected[post_id]) {
        this.setData({
          collected: postsCollected[post_id]
        })
      }
    } else {
      postsCollected = {}
      postsCollected[post_id] = false
      wx.setStorageSync('postsCollected', postsCollected)
    }
  },
  // 收藏功能
  collectTap: function () {
    var postsCollected = wx.getStorageSync('postsCollected')
    var postCollected = postsCollected[this.data.currentPostId]
    postCollected = !postCollected
    this.setData({
      collected: postCollected
    })
    postsCollected[this.data.currentPostId] = postCollected
    wx.setStorageSync('postsCollected', postsCollected)
    wx.showToast({
      title: postCollected ? '收藏成功' : '取消成功',
      icon:'success'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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