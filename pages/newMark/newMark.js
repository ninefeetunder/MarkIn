import addNewMark from '../../request/newmark.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '',
    markTitle: ''
  },
  // ------- 事件处理函数 ---------
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
  },
  handleAddMark () {
    if (!this.imgUrl || !this.markTitle) {
      wx.showToast({
        title: '请填写相关信息',
        duration: 2000
      })
      return
    }
    const data = {
      img_url: this.imgUrl,
      title: this.markTitle
    }
    addNewMark(data)
    .then(res => {
      // 实现路由跳转
      // console.log(res, '添加成功')
      wx.redirectTo({
        url: '/pages/marks/marks'
      })
    })
    .catch(err => {
      console.log('添加新标签失败', err)
    })
  }
})