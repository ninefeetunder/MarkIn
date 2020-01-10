Page({
  data: {
    imgUrl: 'https://images.pexels.com/photos/3522560/pexels-photo-3522560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/3522560/pexels-photo-3522560.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x'
  },
  handleGotoMarks () {
    wx.redirectTo({
      url: '/pages/marks/marks'
    })
  }
})
