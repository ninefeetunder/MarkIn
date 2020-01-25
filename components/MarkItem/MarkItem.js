// components/MarkItem/MarkItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    time: {
      type: String,
      value: new Date().toDateString()
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
