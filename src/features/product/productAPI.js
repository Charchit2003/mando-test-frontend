// For Wholesalers -> Detailed overview about the product
export function fetchProductDetailsbyProductid (product_id){
  return new Promise(async (resolve)=> {
    const respone = await fetch('/products/'+product_id)
    const data = await respone.json
    resolve({data:{product:data,productID:product_id}});
    
  })
}

// For Sellers and Manufacturers

export function createProduct(product, seller, user_id) {
  return new Promise(async (resolve) => {
  let queryString = '';
  queryString += 'user_id='+user_id+'&';
  if(seller) queryString += `seller=true`;
  const response = await fetch('/products?'+queryString, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: { 'content-type': 'application/json' },
  });
  const data = await response.json();
  resolve({data:{product:data.product,productID:data.product_id}});
});
}

export function updateProduct(update, seller, user_id) {
  return new Promise(async (resolve) => {
    let queryString = '';
    queryString += 'user_id='+user_id+'&';
    if(seller) queryString += `seller=true`;
    const response = await fetch(
      '/products' + update.id+'?'+queryString,
      {
        method: 'PATCH',
        body: JSON.stringify(update),
        headers: { 'content-type': 'application/json' },
      }
    );
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({data:{product:data.product,productID:data.product_id}});
  });
}