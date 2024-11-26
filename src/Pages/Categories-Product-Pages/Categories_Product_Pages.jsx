import React, { useEffect, useState, useCallback } from 'react';
import '../Categories-Product-Pages/Categories_Product.css';
import { useParams } from "react-router-dom";
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export default function CategoriesProductPages() {
  const { search, catId } = useParams();
  const searchValue = search !== 'null' ? search : '';
  const catIdValue = catId !== 'null' ? catId : '';
  const [products, setProducts] = useState([]);
  const [recentProduct, setRecentProduct] = useState(null);
  const [priceRange, setPriceRange] = useState(0);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const fetchProduct = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/getproductSearch`, {
        params: { search: searchValue, cat_id: catIdValue }
      });
      if (response.status === 200) {
        setProducts(response.data.product.data);        
        setRecentProduct(response.data.recent_products);
        if (response.data.product.data.length === 0) {
          setProducts(recentProduct);
        }
      } else {
        setProducts([]);
        setRecentProduct(null);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }, [searchValue, catIdValue]);

  useEffect(() => {
    fetchProduct();
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/getcatwithsubandsub`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    const fetchBrands = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/getbrandlist`);
        setBrands(response.data.brands);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchCategories();
    fetchBrands();
  }, [fetchProduct]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className='bg-white pt-8'>
      <div className="container m-auto px-9 product-grids">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <div className="product-sidebar">
              <div className="single-widget search mb-6">
                <h3 className="text-lg font-semibold mb-4">Search Product</h3>
                <form action="#" className="flex" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Search Here..."
                    className="flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
                    <i className="lni lni-search-alt"></i>
                  </button>
                </form>
              </div>
              <div className="single-widget mb-6">
                <h3 className="text-lg font-semibold mb-4">All Categories</h3>
                <ul className="list">
                  {categories.map((category, index) => (
                    <li key={index} className="flex justify-between mb-2">
                      <a href="/" className="text-blue-500 hover:underline">{category.title}</a>
                      <span className="text-gray-500">({category.count})</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="single-widget range mb-6">
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <input
                  type="range"
                  className="form-range w-full"
                  name="range"
                  step="1"
                  min="100"
                  max="10000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                />
                <div className="range-inner flex items-center mt-2">
                  <label className="mr-2">₹</label>
                  <input
                    type="text"
                    id="rangePrimary"
                    value={priceRange}
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none"
                    onChange={(e) => setPriceRange(e.target.value)}
                  />
                </div>
              </div>
              <div className="single-widget condition mb-6">
                <h3 className="text-lg font-semibold mb-4">Filter by Price</h3>
                <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                  <label className="form-check-label" htmlFor="flexCheckDefault1">₹50 - ₹100L (208)</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                  <label className="form-check-label" htmlFor="flexCheckDefault2">₹100L - ₹500 (311)</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                  <label className="form-check-label" htmlFor="flexCheckDefault3">₹500 - ₹1,000 (485)</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                  <label className="form-check-label" htmlFor="flexCheckDefault4">₹1,000 - ₹5,000 (213)</label>
                </div>
              </div>
              <div className="single-widget condition">
                <h3 className="text-lg font-semibold mb-4">Filter by Brand</h3>
                {brands.map((brand, index) => (
                  <div className="form-check mb-2" key={index}>
                    <input className="form-check-input" type="checkbox" value={brand.title} id={`brandCheck${index}`} />
                    <label className="form-check-label" htmlFor={`brandCheck${index}`}>
                      {brand.title} ({brand.slug})
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 pl-5">
            <div className="product-grids-head">
              <div className="product-grid-topbar">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-10/12 lg:w-9/12 flex items-center">
                    <div className="product-sorting flex items-center space-x-4">
                      <label htmlFor="sorting" className="text-gray-700 w-96">Sort by:</label>
                      <select id="sorting" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-sm">
                        <option>Popularity</option>
                        <option>Low - High Price</option>
                        <option>High - Low Price</option>
                        <option>Average Rating</option>
                        <option>A - Z Order</option>
                        <option>Z - A Order</option>
                      </select>
                      <select id="sorting" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-sm">
                        <option>All Brands</option>
                        <option>--</option>
                        <option>--</option>
                        <option>--</option>
                        <option>--</option>
                      </select>
                      <select id="sorting" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-sm">
                        <option>All Sellers</option>
                        <option>--</option>
                        <option>--</option>
                        <option>--</option>
                        <option>--</option>
                        <option>--</option>
                      </select>
                      <p className="text-gray-700 font-xs w-full">Showing: <span className="text-indigo-500">1 - 12 items</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                  <div className="grid grid-cols-12 gap-6">
                    {products.map((product) => {
                      const firstPhoto = product.photoproduct?.[0];
                      return (
                        <div className="lg:col-span-4 md:col-span-6 col-span-12" key={product.id}>
                          <div className="single-product">
                            {firstPhoto && (
                              <div className="product-image">
                                <img src={firstPhoto.photo_path || "https://via.placeholder.com/150"} alt={product.title} />
                                <div className="button">
                                  <a href={`/product-details/${product.slug}`} className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                         stroke="currentColor" className="size-6">
                                      <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                    </svg>
                                    Add to Cart
                                  </a>
                                </div>
                              </div>
                            )}
                            <div className="product-info">
                              <span className="category">{product.cat_id}</span> {/* Replace with actual category name if available */}
                              <h4 className="title">
                                <a href={`/product-details/${product.slug}`}>{product.title}</a>
                              </h4>
                              <div className="review">
                                <div className="flex reviewStar">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                  ))}
                                </div>
                                <li><span>{product.rating || 0} Review(s)</span></li>
                              </div>
                              <div className="price">
                                <span>₹{product.price}</span>
                                {product.discount && <span className="discount-price">₹{product.price - (product.price * product.discount / 100)}</span>}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="w-full">
                      <div className="pagination flex justify-center my-4">
                        <ul className="flex space-x-2">
                          <li>
                            <a href="#" onClick={(e) => e.preventDefault()} className="px-3 py-1 border border-gray-300 rounded mx-1">1</a>
                          </li>
                          <li className="active">
                            <a href="#" onClick={(e) => e.preventDefault()} className="px-3 py-1 border border-gray-300 bg-blue-500 text-white rounded">2</a>
                          </li>
                          <li>
                            <a href="#" onClick={(e) => e.preventDefault()} className="px-3 py-1 border border-gray-300 rounded mx-1">3</a>
                          </li>
                          <li>
                            <a href="#" onClick={(e) => e.preventDefault()} className="px-3 py-1 border border-gray-300 rounded mx-1">4</a>
                          </li>
                          <li>
                            <a href="#" onClick={(e) => e.preventDefault()} className="px-3 py-1 border border-gray-300 rounded mx-1">
                              <i className="lni lni-chevron-right"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
