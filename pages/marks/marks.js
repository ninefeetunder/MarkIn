import getMarksList from '../../request/marks'
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
  onShow () {
    this._getMarksList()
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
  },
  // --------- 请求数据处理函数 --------
  _getMarksList () {
    getMarksList().then((res) => {
      let list = res.data.marksList
      this.setData({
        marksList: list
      })
      .catch((err) => {
        console.log('打卡列表获取失败', err)
      })
    })
  }
})