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
    console.log(value)
    value = value.trim()
    this.setData({
      markTitle: value
    })
  },
  handleAddMark () {
    if (!this.data.imgUrl || !this.data.markTitle) {
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
    wx.uploadFile({
      url: 'https://images.ac.cn/Home/Index/UploadAction',
      filePath: data.img_url,
      name: 'file',
      formData: {},
      success: (res) => {
        // console.log(res)
        url = JSON.parse(res.data)
        data.img_url = url
      },
      fail: (err) => {
        console.log('图片上传失败', err)
        return
      }
    })
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