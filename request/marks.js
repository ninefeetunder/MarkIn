import request from '../utils/request'


export default function getMarksList () {
  let params = {
    url: 'getmarks',
    data: {},
    method: 'get'
  }
  return request(params)
}