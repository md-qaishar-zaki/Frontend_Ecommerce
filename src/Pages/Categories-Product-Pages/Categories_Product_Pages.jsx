import React from 'react';
import '../Categories-Product-Pages/Categories_Product.css'

export default function Categories_Product_Pages() {
  const boxes = Array.from({ length: 11 }, (_, index) => index + 1);

  return (
    <div className='bg-white pt-8'>
      <div className="container m-auto px-9 product-grids">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <div className="product-sidebar">

              <div className="single-widget search mb-6">
                <h3 className="text-lg font-semibold mb-4">Search Product</h3>
                <form action="#" className="flex">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    className="flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
                  />
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
                    <i className="lni lni-search-alt"></i>
                  </button>
                </form>
              </div>
              <div className="single-widget mb-6">
                <h3 className="text-lg font-semibold mb-4">All Categories</h3>
                <ul className="list">
                  <li className="flex justify-between mb-2">
                    <a href="/" className="text-blue-500 hover:underline">Farm machinery</a>
                    <span className="text-gray-500">(1138)</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <a href="/" className="text-blue-500 hover:underline">Pump and Motor</a>
                    <span className="text-gray-500">(2356)</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <a href="/" className="text-blue-500 hover:underline">Workshop Tool</a>
                    <span className="text-gray-500">(420)</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <a href="/" className="text-blue-500 hover:underline">Home Improvement</a>
                    <span className="text-gray-500">(874)</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <a href="/" className="text-blue-500 hover:underline">Food processing</a>
                    <span className="text-gray-500">(1239)</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <a href="/" className="text-blue-500 hover:underline">packing</a>
                    <span className="text-gray-500">(340)</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <a href="/" className="text-blue-500 hover:underline">Foot sprayer</a>
                    <span className="text-gray-500">(512)</span>
                  </li>
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
                  value="10"
                  onchange="rangePrimary.value=value"
                />
                <div className="range-inner flex items-center mt-2">
                  <label className="mr-2">₹</label>
                  <input type="text" id="rangePrimary" placeholder="100" className="border border-gray-300 rounded px-2 py-1 focus:outline-none" />
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
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                  <label className="form-check-label" htmlFor="flexCheckDefault11">Crompton (254)</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault22" />
                  <label className="form-check-label" htmlFor="flexCheckDefault22">Havells (39)</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault33" />
                  <label className="form-check-label" htmlFor="flexCheckDefault33">Khatan (128)</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault44" />
                  <label className="form-check-label" htmlFor="flexCheckDefault44">Yamaha (310)</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault55" />
                  <label className="form-check-label" htmlFor="flexCheckDefault55">Lakshmi (42)</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault66" />
                  <label className="form-check-label" htmlFor="flexCheckDefault66">Balwaan (217)</label>
                </div> 
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
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">
                      <div className="single-product">
                        <div className="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <div className="button">
                            <a href="product-details.html" className="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div className="product-info">
                          <span className="category">Moters</span>
                          <h4 className="title">
                            <a href="/">Moter Crom</a>
                          </h4>
                          <div className="review">
                            <div className="flex reviewStar"><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div className="price">
                            <span>₹199.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">

                      <div className="single-product">
                        <div className="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <span className="sale-tag">-25%</span>
                          <div className="button">
                            <a href="product-details.html" className="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div className="product-info">
                          <span className="category">Motors</span>
                          <h4 className="title">
                            <a href="/">Laxmi Motor</a>
                          </h4>
                          <div className="review">
                            <div className="flex reviewStar"><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div className="price">
                            <span>₹275.00</span>
                            <span className="discount-price">₹300.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">

                      <div className="single-product">
                        <div className="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <div className="button">
                            <a href="product-details.html" className="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div className="product-info">
                          <span className="category">Height Power</span>
                          <h4 className="title">
                            <a href="/">moter</a>
                          </h4>
                          <div className="review">
                            <div className="flex reviewStar"><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div className="price">
                            <span>₹399.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">

                      <div className="single-product">
                        <div className="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <span className="new-tag">New</span>
                          <div className="button">
                            <a href="product-details.html" className="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div className="product-info">
                          <span className="category">Jio</span>
                          <h4 className="title">
                            <a href="/">Moter flec</a>
                          </h4>
                          <div className="review">
                            <div className="flex reviewStar"><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div className="price">
                            <span>₹400.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">

                      <div className="single-product">
                        <div className="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <div className="button">
                            <a href="product-details.html" className="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div className="product-info">
                          <span className="category">Best Motor</span>
                          <h4 className="title">
                            <a href="/">Motor Copper whire</a>
                          </h4>
                          <div className="review">
                            <div className="flex reviewStar"><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div className="price">
                            <span>₹350.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">

                      <div className="single-product">
                        <div className="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <div className="button">
                            <a href="product-details.html" className="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div className="product-info">
                          <span className="category">Mini</span>
                          <h4 className="title">
                            <a href="/">Mini Mototor</a>
                          </h4>
                          <div className="review">
                            <div className="flex reviewStar"><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div className="price">
                            <span>₹70.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">

                      <div className="single-product">
                        <div className="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <span className="sale-tag">-50%</span>
                          <div className="button">
                            <a href="product-details.html" className="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div className="product-info">
                          <span className="category">Local company</span>
                          <h4 className="title">
                            <a href="/">Moter Local</a>
                          </h4>
                          <div className="review">
                            <div className="flex reviewStar"><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div className="price">
                            <span>₹100.00</span>
                            <span className="discount-price">₹200.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">

                      <div className="single-product">
                        <div className="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <div className="button">
                            <a href="product-details.html" className="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div className="product-info">
                          <span className="category">Motor</span>
                          <h4 className="title">
                            <a href="/">Largest Moter</a>
                          </h4>
                          <div className="review">
                            <div className="flex reviewStar"><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div className="price">
                            <span>₹899.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="lg:col-span-4 md:col-span-6 col-span-12">

                      <div className="single-product">
                        <div className="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <span className="sale-tag">-25%</span>
                          <div className="button">
                            <a href="product-details.html" className="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div className="product-info">
                          <span className="category">Heigh Power</span>
                          <h4 className="title">
                            <a href="/">Heigh Power Moter</a>
                          </h4>
                          <div className="review">
                            <div className="flex reviewStar"><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span><span className="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div className="price">
                            <span>₹275.00</span>
                            <span className="discount-price">₹300.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="w-full">
                      <div className="pagination flex justify-center my-4">
                        <ul className="flex space-x-2">
                          <li><a href="javascript:void(0)" className="px-3 py-1 border border-gray-300 rounded mx-1">1</a></li>
                          <li className="active"><a href="javascript:void(0)" className="px-3 py-1 border border-gray-300 bg-blue-500 text-white rounded">2</a></li>
                          <li><a href="javascript:void(0)" className="px-3 py-1 border border-gray-300 rounded mx-1">3</a></li>
                          <li><a href="javascript:void(0)" className="px-3 py-1 border border-gray-300 rounded mx-1">4</a></li>
                          <li><a href="javascript:void(0)" className="px-3 py-1 border border-gray-300 rounded mx-1"><i className="lni lni-chevron-right"></i></a></li>
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
  )
}
