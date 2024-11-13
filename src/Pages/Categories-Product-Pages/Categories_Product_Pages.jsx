import React from 'react';
import '../Categories-Product-Pages/Categories_Product.css'

export default function Categories_Product_Pages() {
  const boxes = Array.from({ length: 11 }, (_, index) => index + 1);

  return (
    <div className='bg-white pt-8'>
      <div className="container m-auto px-9 product-grids">
        <div className="flex flex-wrap">
          <div class="w-full md:w-1/4">
            <div class="product-sidebar">

              <div class="single-widget search mb-6">
                <h3 class="text-lg font-semibold mb-4">Search Product</h3>
                <form action="#" class="flex">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    class="flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
                  />
                  <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-r">
                    <i class="lni lni-search-alt"></i>
                  </button>
                </form>
              </div>
              <div class="single-widget mb-6">
                <h3 class="text-lg font-semibold mb-4">All Categories</h3>
                <ul class="list">
                  <li class="flex justify-between mb-2">
                    <a href="/" class="text-blue-500 hover:underline">Farm machinery</a>
                    <span class="text-gray-500">(1138)</span>
                  </li>
                  <li class="flex justify-between mb-2">
                    <a href="/" class="text-blue-500 hover:underline">Pump and Motor</a>
                    <span class="text-gray-500">(2356)</span>
                  </li>
                  <li class="flex justify-between mb-2">
                    <a href="/" class="text-blue-500 hover:underline">Workshop Tool</a>
                    <span class="text-gray-500">(420)</span>
                  </li>
                  <li class="flex justify-between mb-2">
                    <a href="/" class="text-blue-500 hover:underline">Home Improvement</a>
                    <span class="text-gray-500">(874)</span>
                  </li>
                  <li class="flex justify-between mb-2">
                    <a href="/" class="text-blue-500 hover:underline">Food processing</a>
                    <span class="text-gray-500">(1239)</span>
                  </li>
                  <li class="flex justify-between mb-2">
                    <a href="/" class="text-blue-500 hover:underline">packing</a>
                    <span class="text-gray-500">(340)</span>
                  </li>
                  <li class="flex justify-between mb-2">
                    <a href="/" class="text-blue-500 hover:underline">Foot sprayer</a>
                    <span class="text-gray-500">(512)</span>
                  </li>
                </ul>
              </div>



              <div class="single-widget range mb-6">
                <h3 class="text-lg font-semibold mb-4">Price Range</h3>
                <input
                  type="range"
                  class="form-range w-full"
                  name="range"
                  step="1"
                  min="100"
                  max="10000"
                  value="10"
                  onchange="rangePrimary.value=value"
                />
                <div class="range-inner flex items-center mt-2">
                  <label class="mr-2">₹</label>
                  <input type="text" id="rangePrimary" placeholder="100" class="border border-gray-300 rounded px-2 py-1 focus:outline-none" />
                </div>
              </div>



              <div class="single-widget condition mb-6">
                <h3 class="text-lg font-semibold mb-4">Filter by Price</h3>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                  <label class="form-check-label" for="flexCheckDefault1">₹50 - ₹100L (208)</label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                  <label class="form-check-label" for="flexCheckDefault2">₹100L - ₹500 (311)</label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                  <label class="form-check-label" for="flexCheckDefault3">₹500 - ₹1,000 (485)</label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                  <label class="form-check-label" for="flexCheckDefault4">₹1,000 - ₹5,000 (213)</label>
                </div>
              </div>



              <div class="single-widget condition">
                <h3 class="text-lg font-semibold mb-4">Filter by Brand</h3>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                  <label class="form-check-label" for="flexCheckDefault11">Crompton (254)</label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault22" />
                  <label class="form-check-label" for="flexCheckDefault22">Havells (39)</label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault33" />
                  <label class="form-check-label" for="flexCheckDefault33">Khatan (128)</label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault44" />
                  <label class="form-check-label" for="flexCheckDefault44">Yamaha (310)</label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault55" />
                  <label class="form-check-label" for="flexCheckDefault55">Lakshmi (42)</label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault66" />
                  <label class="form-check-label" for="flexCheckDefault66">Balwaan (217)</label>
                </div> 
              </div>

            </div>
          </div>
          <div className="w-full md:w-3/4 pl-5">
            <div className="product-grids-head">
              <div class="product-grid-topbar">
                <div class="flex flex-wrap items-center">
                  <div class="w-full md:w-10/12 lg:w-9/12 flex items-center">
                    <div class="product-sorting flex items-center space-x-4">
                      <label for="sorting" class="text-gray-700 w-96">Sort by:</label>
                      <select id="sorting" class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-sm">
                        <option>Popularity</option>
                        <option>Low - High Price</option>
                        <option>High - Low Price</option>
                        <option>Average Rating</option>
                        <option>A - Z Order</option>
                        <option>Z - A Order</option>
                      </select>
                      
                      <select id="sorting" class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-sm">
                        <option>All Brands</option>
                        <option>--</option>
                        <option>--</option>
                        <option>--</option>
                        <option>--</option>
                      </select>
                      
                      <select id="sorting" class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-sm">
                        <option>All Sellers</option>
                        <option>--</option>
                        <option>--</option>
                        <option>--</option>
                        <option>--</option>
                        <option>--</option>
                      </select> 
                      
                      <p class="text-gray-700 font-xs w-full">Showing: <span class="text-indigo-500">1 - 12 items</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                  <div class="grid grid-cols-12 gap-6">
                    <div class="lg:col-span-4 md:col-span-6 col-span-12">
                      <div class="single-product">
                        <div class="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <div class="button">
                            <a href="product-details.html" class="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div class="product-info">
                          <span class="category">Moters</span>
                          <h4 class="title">
                            <a href="/">Moter Crom</a>
                          </h4>
                          <div class="review">
                            <div class="flex reviewStar"><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div class="price">
                            <span>₹199.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="lg:col-span-4 md:col-span-6 col-span-12">

                      <div class="single-product">
                        <div class="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <span class="sale-tag">-25%</span>
                          <div class="button">
                            <a href="product-details.html" class="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div class="product-info">
                          <span class="category">Motors</span>
                          <h4 class="title">
                            <a href="/">Laxmi Motor</a>
                          </h4>
                          <div class="review">
                            <div class="flex reviewStar"><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div class="price">
                            <span>₹275.00</span>
                            <span class="discount-price">₹300.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="lg:col-span-4 md:col-span-6 col-span-12">

                      <div class="single-product">
                        <div class="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <div class="button">
                            <a href="product-details.html" class="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div class="product-info">
                          <span class="category">Height Power</span>
                          <h4 class="title">
                            <a href="/">moter</a>
                          </h4>
                          <div class="review">
                            <div class="flex reviewStar"><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div class="price">
                            <span>₹399.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="lg:col-span-4 md:col-span-6 col-span-12">

                      <div class="single-product">
                        <div class="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <span class="new-tag">New</span>
                          <div class="button">
                            <a href="product-details.html" class="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div class="product-info">
                          <span class="category">Jio</span>
                          <h4 class="title">
                            <a href="/">Moter flec</a>
                          </h4>
                          <div class="review">
                            <div class="flex reviewStar"><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div class="price">
                            <span>₹400.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="lg:col-span-4 md:col-span-6 col-span-12">

                      <div class="single-product">
                        <div class="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <div class="button">
                            <a href="product-details.html" class="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div class="product-info">
                          <span class="category">Best Motor</span>
                          <h4 class="title">
                            <a href="/">Motor Copper whire</a>
                          </h4>
                          <div class="review">
                            <div class="flex reviewStar"><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div class="price">
                            <span>₹350.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="lg:col-span-4 md:col-span-6 col-span-12">

                      <div class="single-product">
                        <div class="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <div class="button">
                            <a href="product-details.html" class="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div class="product-info">
                          <span class="category">Mini</span>
                          <h4 class="title">
                            <a href="/">Mini Mototor</a>
                          </h4>
                          <div class="review">
                            <div class="flex reviewStar"><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div class="price">
                            <span>₹70.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="lg:col-span-4 md:col-span-6 col-span-12">

                      <div class="single-product">
                        <div class="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <span class="sale-tag">-50%</span>
                          <div class="button">
                            <a href="product-details.html" class="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div class="product-info">
                          <span class="category">Local company</span>
                          <h4 class="title">
                            <a href="/">Moter Local</a>
                          </h4>
                          <div class="review">
                            <div class="flex reviewStar"><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div class="price">
                            <span>₹100.00</span>
                            <span class="discount-price">₹200.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="lg:col-span-4 md:col-span-6 col-span-12">

                      <div class="single-product">
                        <div class="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <div class="button">
                            <a href="product-details.html" class="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div class="product-info">
                          <span class="category">Motor</span>
                          <h4 class="title">
                            <a href="/">Largest Moter</a>
                          </h4>
                          <div class="review">
                            <div class="flex reviewStar"><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div class="price">
                            <span>₹899.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="lg:col-span-4 md:col-span-6 col-span-12">

                      <div class="single-product">
                        <div class="product-image">
                          <img src="https://m.media-amazon.com/images/I/51LigmbiuqL._SL1000_.jpg" alt="#" />
                          <span class="sale-tag">-25%</span>
                          <div class="button">
                            <a href="product-details.html" class="btn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg> Add to Cart</a>
                          </div>
                        </div>
                        <div class="product-info">
                          <span class="category">Heigh Power</span>
                          <h4 class="title">
                            <a href="/">Heigh Power Moter</a>
                          </h4>
                          <div class="review">
                            <div class="flex reviewStar"><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span><span class="star ">★</span></div>
                            <li><span>5.0 Review(s)</span></li>
                          </div>
                          <div class="price">
                            <span>₹275.00</span>
                            <span class="discount-price">₹300.00</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="flex flex-col w-full">
                    <div class="w-full">
                      <div class="pagination flex justify-center my-4">
                        <ul class="flex space-x-2">
                          <li><a href="javascript:void(0)" class="px-3 py-1 border border-gray-300 rounded mx-1">1</a></li>
                          <li class="active"><a href="javascript:void(0)" class="px-3 py-1 border border-gray-300 bg-blue-500 text-white rounded">2</a></li>
                          <li><a href="javascript:void(0)" class="px-3 py-1 border border-gray-300 rounded mx-1">3</a></li>
                          <li><a href="javascript:void(0)" class="px-3 py-1 border border-gray-300 rounded mx-1">4</a></li>
                          <li><a href="javascript:void(0)" class="px-3 py-1 border border-gray-300 rounded mx-1"><i class="lni lni-chevron-right"></i></a></li>
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
