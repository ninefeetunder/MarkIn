import request from '../utils/request'


export default function () {
  const params = {
    url: 'getmarks',
    data: {},
    method: 'get'
  }
  return request(params)
}