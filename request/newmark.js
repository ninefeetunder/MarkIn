import request from '../utils/request'

export default function (data) {
  return request({
    url: 'add_new_mark',
    method: 'post',
    data
  })
}