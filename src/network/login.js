import {request} from './request'

export function GoodsData() {
  return request({
    url:'/login'
  });
}

// export function getData(type, page) {
//   return request({
//     url:'/test/getGoods',
//     params:{
//       type,
//       page
//     }
//   });
// }
