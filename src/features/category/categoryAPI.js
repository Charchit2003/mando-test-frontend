// Category-Home Page
export function fetchCategories() {
  return new Promise(async (resolve) =>{
    const response = await fetch('/category') 
    const data = await response.json()
    resolve({data})
  }
  );
}

// Category Details Page - List of all shops with particular Category

export function fetchLocations(category_id){
  return new Promise(async (resolve) =>{
    const response = await fetch('/category/allLocation?category_id='+category_id)
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchShopsByFilters(filter, sort, pagination, category_id) {
  // filter = {"category":["chains","rings"]}
  // sort = {_sort:"number_of_products",_order="desc"}
  // pagination = {_page:1,_limit=10} 
  // TODO : on server we will support multi values in filter
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }

  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('/'+category_id+'?'+queryString) 
    const data = await response.json()
    const category = await category_id
    const totalShops = await response.headers.get('X-Total-Count')
    // const totalShops = data.Shops
    resolve({data:{shops:data,totalShops:+totalShops, category:category}})
  }
  );
}
