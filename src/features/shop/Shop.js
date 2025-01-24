// List of all shops with the category ID selected..
import React, { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   fetchBrandsAsync,
//   fetchCategoriesAsync,
//   fetchproductsByFiltersAsync,
//   selectAllProducts,
//   selectBrands,
//   selectCategories,
//   selectProductListStatus,
//   selectTotalItems,
// } from '../productSlice';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon, ShoppingCartIcon, } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  InformationCircleIcon,
  Squares2X2Icon,
  StarIcon,
} from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
// import { ITEMS_PER_PAGE, discountedPrice } from '../../../app/constants';
// import Pagination from '../../common/Pagination';
import { Grid } from 'react-loader-spinner';

const sortOptions = [
  { name: 'Best Rating', sort: 'rating', order: 'desc', current: false },
  { name: 'Price: Low to High', sort: 'price', order: 'asc', current: false },
  { name: 'Price: High to Low', sort: 'price', order: 'desc', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Shop() {
  const dispatch = useDispatch();
  const products = [
    {
      "id" : "1",
      "category_id" : "1",
      "shop_id" :"1",
      "user_id" :"1",
      "name" : "Product 1",
      "images" : [
        "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg",
        "https://static.vecteezy.com/system/resources/previews/038/000/334/non_2x/ai-generated-beautiful-gold-ring-with-a-diamond-in-the-shape-of-a-heart-photo.jpg",
        "dfdf"
      ],
      "purity" : "92",
      "making_touch" : "5",
      "total_weight" : "5",
      "gold_weight" : "4.5",
      "min_quantity" : "2",
      "max_quantity" : "10"
    },
    {
      "id" : "2",
      "category_id" : "1",
      "shop_id" :"1",
      "user_id" :"1",
      "images" : [
        "df",
        "dlfl",
        "dfdf"
      ],
      "name" : "Product 1",
      "purity" : "92",
      "making_touch" : "5",
      "total_weight" : "5",
      "gold_weight" : "4.5",
      "min_quantity" : "2",
      "max_quantity" : "10"
    },
    {
      "id" : "3",
      "category_id" : "1",
      "shop_id" :"1",
      "user_id" :"1",
      "images" : [
        "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg",
        "https://static.vecteezy.com/system/resources/previews/038/000/334/non_2x/ai-generated-beautiful-gold-ring-with-a-diamond-in-the-shape-of-a-heart-photo.jpg",
        "dfdf"
      ],
      "name" : "Product 1",
      "purity" : "92",
      "making_touch" : "5",
      "total_weight" : "5",
      "gold_weight" : "4.5",
      "min_quantity" : "2",
      "max_quantity" : "10"
    },
    {
      "id" : "4",
      "category_id" : "1",
      "shop_id" :"1",
      "user_id" :"1",
      "images" : [
        "df",
        "dlfl",
        "dfdf"
      ],
      "name" : "Product 1",
      "purity" : "92",
      "making_touch" : "5",
      "total_weight" : "5",
      "gold_weight" : "4.5",
      "min_quantity" : "2",
      "max_quantity" : "10"
    },
    
  ]
  const cities = [{label : 'Chennai'}, {label : 'Bangalore'}];
  const states = [{label : 'Tamil Nadu'}, {label : 'Karnataka'}];
  const totalItems = 10;
  const status = "fulfilled";
  const Checkuser = true;
  const categoryid = 5;
  const SellerInfo = "Paharia Finance is the leading Jewllery Shop in the World."
  //   const products = useSelector(selectAllProducts);
  //   const brands = useSelector(selectBrands);
  //   const categories = useSelector(selectCategories);
  //   const totalItems = useSelector(selectTotalItems);
  //   const status = useSelector(selectProductListStatus);
  const filters = [
    {
      id: 'city',
      name: 'City',
      options: cities,
    },
    {
      id: 'state',
      name: 'State',
      options: states,
    },
  ];

  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [aboutSellerOpen, setAboutSellerOpen] = useState(false);
  const [page, setPage] = useState(1);

  const handleFilter = (e, section, option) => {
    const newFilter = { ...filter };
    // TODO : on server it will support multiple categories
    if (e.target.checked) {
      if (newFilter[section.id]) {
        newFilter[section.id].push(option.value);
      } else {
        newFilter[section.id] = [option.value];
      }
    } else {
      const index = newFilter[section.id].findIndex(
        (el) => el === option.value
      );
      newFilter[section.id].splice(index, 1);
    }

    setFilter(newFilter);
  };

  const handleSort = (e, option) => {
    const sort = { _sort: option.sort, _order: option.order };
    setSort(sort);
  };

  const handlePage = (page) => {
    setPage(page);
  };


  // useEffect(() => {
  //   const pagination = { _page: page, _per_page: ITEMS_PER_PAGE };
  //   dispatch(fetchProductsByFiltersAsync({ filter, sort, pagination }));
  // }, [dispatch, filter, sort, page]);

  // useEffect(()=>{
  //   setPage(1)
  // },[totalItems,sort])

  // useEffect(() => {
  //   dispatch(fetchBrandsAsync());
  //   dispatch(fetchCategoriesAsync());
  // }, []);

  return (
    <div>
    <div>

      <AboutSeller
        SellerInfo={SellerInfo}
        setAboutSellerOpen={setAboutSellerOpen}
      ></AboutSeller>

      <MobileFilter
        handleFilter={handleFilter}
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
        filters={filters}
      ></MobileFilter>

      <main className="mx-auto w-full px-4 sm:px-6 lg:px-8">

        <h1 className="font-serif text-3xl font-extrabold text-[#4e3629] pt-5" >Choose Your Design -</h1>
        <div className="flex justify-end space-x-1 border-b border-gray-200 pb-6 pt-7 items-center">
          
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md shadow-2xl ring-1 ring-black bg-[#F5DEB3] ring-opacity-50 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <p
                          onClick={(e) => handleSort(e, option)}
                          className={classNames(
                            option.current
                              ? 'font-medium text-gray-900'
                              : 'text-gray-500',
                            active ? 'bg-[#F5DEC9]' : '',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          {option.name}
                        </p>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <button
            type="button"
            className="-m-2 ml-4 p-2 text-gray-700 hover:text-gray-900 sm:ml-6 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="sr-only">Filters</span>
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          
          <button
            type="button"
            className="-m-2 ml-4 p-2 text-gray-700 hover:text-gray-900 sm:ml-6 lg:hidden"
            onClick={() => setAboutSellerOpen(true)}
          >
            <span className="sr-only">About Seller</span>
            <InformationCircleIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="-m-2 ml-5 p-2 text-gray-700 hover:text-gray-900 sm:ml-7"
          >
            <span className="sr-only">Reset</span>
            Reset
          </button>
          
        </div>
        

        <section aria-labelledby="shops-heading" className="pb-24 pt-6">
          <h2 id="shops-heading" className="sr-only">
            Shops
          </h2>

          <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8">
            {/* Desktop Filter */}
            <div className="hidden lg:block w-1/4 lg:w-1/5">
              <DesktopFilter handleFilter={handleFilter} filters={filters} />
              <div>
                <h2 className="font-medium text-gray-900 w-fit mx-auto">About Seller</h2>
                {/* Mention all the details about the Seller overhere. */}
              </div>
            </div>

            {/* Shop Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-y-6 sm:gap-y-10">
                <ProductGrid products={products} status={status} categoryid={categoryid} user={Checkuser}/>
              </div>
            </div>
          </div>
        </section>

        {/* section of product and filters ends */}
        {/* <Pagination
          page={page}
          setPage={setPage}
          handlePage={handlePage}
          totalItems={totalItems}
        ></Pagination> */}
      </main>
    </div>
    </div>
  );
}

function AboutSeller({SellerInfo, setAboutSellerOpen}){
  // create a panel and show information about the seller.

}

function MobileFilter({
  mobileFiltersOpen,
  setMobileFiltersOpen,
  handleFilter,
  filters,
}) {
return (
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 lg:hidden"
        onClose={setMobileFiltersOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative ml-auto flex h-full w-full bg-[#F5DEB3] max-w-xs flex-col overflow-y-auto py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg text-center font-medium text-gray-900">All Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200 ">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between  px-2 py-3 text-gray-600 hover:text-gray-900">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  onChange={(e) =>
                                    handleFilter(e, section, option)
                                  }
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 min-w-0 flex-1 text-gray-900"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function DesktopFilter({ handleFilter, filters }) {
  return (
    <form className="hidden lg:block">
      <h2 className="font-medium text-gray-900 w-fit mx-auto">All Filters</h2>
      {filters.map((section) => (
        <Disclosure
          as="div"
          key={section.id}
          className="border-b border-gray-200 py-6"
        >
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">
                    {section.name}
                  </span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        defaultChecked={option.checked}
                        onChange={(e) => handleFilter(e, section, option)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  );
}


function ProductGrid({ products, status, categoryid, user }) {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
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
          {products.map((product) => (
            <div className="relative border-solid border-2 p-2 border-gray-800">
              <div className=" group aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-800 lg:aspect-none lg:h-60  relative">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-opacity duration-300"
                />
                <img
                  src={product.images[1]} // Assuming you have a second image
                  alt={product.title}
                  className="absolute top-0 right-0 h-full w-full object-cover object-center lg:h-full lg:w-full opacity-0 transition-all duration-300 transform translate-x-full 
                  sm:group-[.active]:opacity-100 sm:group-[.active]:translate-x-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0"
                />
              </div>

              <div className="mt-4 justify-between">
                <div>
                  <h2 className="text-lg text-gray-700 text-center font-extrabold">
                    <span aria-hidden="true" className="absolute" />
                    {product.name} 
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-y-1 sm:gap-y-2 mt-3 px-8">
                  <div className="grid grid-cols-2 col-span-2 -mx-4">
                    <div className="text-right pr-4">Purity(%)</div>
                    <div className="text-left pl-4">Data 2</div>
                    <div className="text-right pr-4">Net_Weight(gms)</div>
                    <div className="text-left pl-4">Data 2</div>
                    <div className="text-right pr-4">Making_Charge(%)</div>
                    <div className="text-left pl-4">Data 2</div>
                  </div>
                </div>
              </div>
            
              <div className="flex mt-4 sm:mt-6 w-full">
                <Link 
                  to={`/product/${product.id}`} 
                  key={product.id}
                  className="w-3/4 mr-2"
                >
                  <div className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {`More Details`}
                  </div>
                </Link>
                <button
                  type="button"
                  className="w-1/4 flex items-center justify-center rounded-lg bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  // onClick={(e) => handleCart(e, product.id)}
                >
                  <span className="sr-only">Add To Cart</span>
                  <ShoppingCartIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              </div>

              </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}