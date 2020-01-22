let defaultUrl = 'http://localhost:3000'

export default function (params) {

  wx.showLoading({
    title: '数据获取中...',
    mask: true
  })

  let {url, data, method} = params
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${defaultUrl}/${url}`,
      method,
      data,
      success (res) {
        resolve(res)
      },
      fail (err) {
        console.log('请求模块出错', err)
        reject(err)
      },
      complete () {
        wx.hideLoading()
      }
    })
  })
}