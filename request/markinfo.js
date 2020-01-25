import request from '../utils/request'

export default function (id) {
  const params = {
    url: 'get_mark_info',
    data: {
      id
    },
    method: 'get'
  }
  return request(params)
}