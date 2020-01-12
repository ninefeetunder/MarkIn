// pages/newMark/newMark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '',
    markTitle: ''
  },
  handleChooseImage () {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        let imgUrl = res.tempFilePaths[0]
        this.setData({
          imgUrl
        })
      }
    })
  },
  handleGetTitle (res) {
    let { value } = res.detail
    value = value.trim()
    this.setData({
      markTitle: value
    })
  }
})