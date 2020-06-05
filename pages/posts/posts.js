// pages/posts/posts.js
import postsdata from '../../data/posts-data.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: 'May 25 2020',
    title: '第二篇',
    img_src: '../../image/article2.jpg',
    content: '原来那个女孩子在我心里留下了一滴眼泪，我完全可以感受到她当时是多么的伤心。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      post_content: postsdata.postLists
    }) //给变量赋值，可以是已定义的，也可以是未定义的，返回一个对象
  },
  onTap: function (options) {
    console.log(options)
    wx.navigateTo({
      url: '../post-detail/post-detail?postId=' + options.currentTarget.dataset.postid
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