// components/btn/btn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 返回顶部的触发事件
  toTopFn() {
    // 传递给父组件
    this.triggerEvent('totop', 0);
  },
  // 拨打电话事件
  callFn() {
    wx.makePhoneCall({
      phoneNumber: '13026703941',
    })
  },
  // 跳转到地图页面
  jumpToMap() {
    wx.navigateTo({
      url: '/pages/map/map',
    })
  }
})