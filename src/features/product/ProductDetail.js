import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchProductByIdAsync,
//   selectProductById,
//   selectProductListStatus,
// } from '../productSlice';
import { useParams } from 'react-router-dom';
// import { addToCartAsync, selectItems } from '../../cart/cartSlice';
// import { selectLoggedInUser } from '../../auth/authSlice';
// import { discountedPrice } from '../../../app/constants';
// import { useAlert } from 'react-alert';
import { Grid } from 'react-loader-spinner';

const highlights = [
  'Hand cut and sewn locally',
  'Dyed with our proprietary colors',
  'Pre-washed & pre-shrunk',
  'Ultra-soft 100% cotton',
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// TODO : Loading UI

export default function ProductDetail() {

  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const items = [
    {
      
      "id" : "3",
      "category_id" : "1",
      "shop_id" :"1",
      "user_id" :"1",
      "images" : [
          "df",
          "dlfl",
          "dfdf"
      ],
      "purity" : "92",
      "making_touch" : "5",
      "total_weight" : "5",
      "gold_weight" : "4.5",
      "min_quantity" : "2",
      "max_quantity" : "10"
    },
  ]
  const product = {
      "id" : "1",
      "category_id" : "1",
      "shop_id" :"1",
      "user_id" :"1",
      "name" :"Chain Set",
      "images" : [
          "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg",
          "dlfl",
          "dfdf"
      ],
      "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg",
      "purity" : "92",
      "making_touch" : "5",
      "total_weight" : "5",
      "gold_weight" : "4.5",
      "min_quantity" : "2",
      "max_quantity" : "10"
  };
  
  const status = "finished";
  // const items = useSelector(selectItems);
  // const product = useSelector(selectProductById);
  const dispatch = useDispatch();
  const params = useParams();
  // const alert = useAlert();
  // const status = useSelector(selectProductListStatus);
  const [mainImage, setMainImage] = useState(product.images[0]);

  const changeImage = (src) => {
    setMainImage(src);
  };

  const handleCart = (e) => {
    e.preventDefault();
    if (items.findIndex((item) => item.product.id === product.id) < 0) {
 
      const newItem = {
        product: product.id,
        quantity: 1,
      };
      if (selectedColor) {
        newItem.color = selectedColor;
      }
      if (selectedSize) {
        newItem.size = selectedSize;
      }
      // dispatch(addToCartAsync(newItem));
      // TODO: it will be based on server response of backend
      // alert.success('Item added to Cart');
      console.log('Item added to Cart');
    } else {
      // alert.error('Item Already added');
      console.log('Item already added');
    }
  };

  
  const [openSections, setOpenSections] = useState({
    metalDetails: true,
    productDetails: true,
    stoneInfo: true
  });
  

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  // useEffect(() => {
  //   dispatch(fetchProductByIdAsync(params.id));
  // }, [dispatch, params.id]);

  return (
    <div className="">
      {status === 'loading' ? (
        <Grid
          height="80"
          width="80"
          color="rgb(79, 70, 229) "
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : null}
      {
      product && (
        <div className="pt-6">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
              {/* Product Images */}
              <div className="w-full md:w-1/2 px-4 mb-8">
                <img src={mainImage} alt="Product" className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage" />
                <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                  {product.images.map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`Image ${index + 1}`}
                      className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                      onClick={() => changeImage(img)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Product Details */}
              <div className="w-full md:w-1/2 px-4 text-center">
                <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                {/* <p className="text-gray-600 mb-4">{`by ${findSellerByProductid(product.id)}`}</p> */}
                <p className="text-gray-600 mb-4">{`by Paharia Finance`}</p>
                
                
                <p className="text-gray-700 mb-6">{product.description}</p>

                  {/* Product Table Section */}
                <div className="max-w-3xl mx-auto p-4 space-y-4 text-center">
                  <div className="border-gray-800 rounded-lg shadow-sm">
                  <button 
                    onClick={() => toggleSection('metalDetails')}
                    className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg relative"
                  >
                    <div className="flex-1" /> {/* Left spacer */}
                    <h2 className="text-lg font-medium absolute left-1/2 -translate-x-1/2">Metal Details</h2>
                    {openSections.metalDetails ? 
                      <ChevronUpIcon className="h-5 w-5" /> : 
                      <ChevronDownIcon className="h-5 w-5" />
                    }
                  </button>
                    
                    {openSections.metalDetails && (
                      
                      <div className="divide-y grid grid-cols-2 p-3">
                        <div className="font-medium">METAL</div>
                        <div>GOLD</div>
                        <div className="font-medium">PURITY (KT)</div>
                        <div>22</div>
                        <div className="font-medium">FINISH</div>
                        <div>OXIDISE</div>
                        <div className="font-medium">COLOR</div>
                        <div>YELLOW</div>
                      </div>

                    )}
                  </div>
                  <div className="border-gray-800 rounded-lg shadow-sm">
                  <button 
                    onClick={() => toggleSection('metalDetails')}
                    className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg relative"
                  >
                    <div className="flex-1" /> {/* Left spacer */}
                    <h2 className="text-lg font-medium absolute left-1/2 -translate-x-1/2">Metal Details</h2>
                    {openSections.metalDetails ? 
                      <ChevronUpIcon className="h-5 w-5" /> : 
                      <ChevronDownIcon className="h-5 w-5" />
                    }
                  </button>
                    
                    {openSections.metalDetails && (
                      
                      <div className="divide-y grid grid-cols-2 p-3">
                        <div className="font-medium">METAL</div>
                        <div>GOLD</div>
                        <div className="font-medium">PURITY (KT)</div>
                        <div>22</div>
                        <div className="font-medium">FINISH</div>
                        <div>OXIDISE</div>
                        <div className="font-medium">COLOR</div>
                        <div>YELLOW</div>
                      </div>

                    )}
                  </div>
                  <div className="border-gray-800 rounded-lg shadow-sm">
                  <button 
                    onClick={() => toggleSection('metalDetails')}
                    className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg relative"
                  >
                    <div className="flex-1" /> {/* Left spacer */}
                    <h2 className="text-lg font-medium absolute left-1/2 -translate-x-1/2">Metal Details</h2>
                    {openSections.metalDetails ? 
                      <ChevronUpIcon className="h-5 w-5" /> : 
                      <ChevronDownIcon className="h-5 w-5" />
                    }
                  </button>
                    
                    {openSections.metalDetails && (
                      
                      <div className="divide-y grid grid-cols-2 p-3">
                        <div className="font-medium">METAL</div>
                        <div>GOLD</div>
                        <div className="font-medium">PURITY (KT)</div>
                        <div>22</div>
                        <div className="font-medium">FINISH</div>
                        <div>OXIDISE</div>
                        <div className="font-medium">COLOR</div>
                        <div>YELLOW</div>
                      </div>

                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                  <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>

                <div className="flex space-x-4 mb-6">
                  <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}