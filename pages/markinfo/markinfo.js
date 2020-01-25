import getMarkInfo from '../../request/markinfo'

Page({
  data: {
    id: '',
    data: {}
  },
  onLoad: function (options) {
    let {id} = options
    this.setData({
      id
    })
  },
  onShow: function () {

  },
  // ------------ 请求数据方法 ------------
  _getMarkInfo () {
    let id = this.id
    getMarkInfo(id).then((res) => {
      const {data} = res.data
      this.setData({
        data
      })
    })
  }
})