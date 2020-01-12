// pages/marks/marks.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    marksList: [
      {
        id: 0,
        imgUrl: '',
        title: '',
        time: ''
      }
    ]
  },
  handleGoMarkDetail () {
    wx.navigateTo({
      url: '/pages/markinfo/markinfo'
    })
  },
  handleAddNewMark () {
    wx.navigateTo({
      url: '/pages/newMark/newMark'
    })
  }
})