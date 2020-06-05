Page({
  onTop: function () {
    wx.switchTab({ //跳转到有tabBar的页面
      url: '../posts/posts'
    })
    // wx.redirectTo({//页面跳转左上角没有返回按钮
    //   url: '../posts/posts'
    // })
  },
  onSub: function () {
    console.log('onSub')
  },
  onHide: function () { //页面存在可返回
    console.log('welcome is onHide.')
  },
  onUnload: function () { //页面销毁不存在
    console.log('welcome is onUnload.')
  }
})