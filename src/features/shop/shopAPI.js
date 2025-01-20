// On Home Page - for All
export function fetchExoticCollection(){
  return new Promise(async (resolve) =>{
    const response = await fetch('/shops/exotic')
    const data = await response.json
    const totalProducts = await response.headers.get('X-Total-Count')
    
    resolve({data:{shops:data,totalProducts:+totalProducts}})
    resolve({data})
  });
}

// For Visible, Wholesaler
// 1) Shop Details and overview of all products for this category id.
export function fetchShopDetailbyCategoryid (category_id, shop_id) {
  return new Promise(async (resolve)=> {
    let queryString = '';
    queryString += `category_id=${category_id}&`;
    const response = await fetch('/shops/'+shop_id+'?'+queryString)
    const data = await response.json
    const totalProducts = await response.headers.get('X-Total-Count')
    
    resolve({data:{shops:data,totalProducts:+totalProducts, shop_id:shop_id}})
    
  })
}

// For Owner, Manufacturer
export function fetchMyShopDetail (user_id, shop_id) {
  return new Promise(async (resolve)=> {
    let queryString = '';
    queryString += `user_id=${user_id}&`;
    const response = await fetch('/shops/'+shop_id+'?'+queryString)
    const data = await response.json
    const totalProducts = await response.headers.get('X-Total-Count')
    
    resolve({data:{shops:data,totalProducts:+totalProducts, shop_id:shop_id}})

  })
}