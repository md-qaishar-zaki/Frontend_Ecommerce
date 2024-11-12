import React from 'react';
import './Categories_Product.css'

export default function Categories_Product_Pages() {
  const boxes = Array.from({ length: 11 }, (_, index) => index + 1);

  return (
    <>
      <div className="flex">
        <div class="w-full lg:w-1/4">
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
                  <a href="product-grids.html" class="text-blue-500 hover:underline">Computers &amp; Accessories</a>
                  <span class="text-gray-500">(1138)</span>
                </li>
                <li class="flex justify-between mb-2">
                  <a href="product-grids.html" class="text-blue-500 hover:underline">Smartphones &amp; Tablets</a>
                  <span class="text-gray-500">(2356)</span>
                </li>
                <li class="flex justify-between mb-2">
                  <a href="product-grids.html" class="text-blue-500 hover:underline">TV, Video &amp; Audio</a>
                  <span class="text-gray-500">(420)</span>
                </li>
                <li class="flex justify-between mb-2">
                  <a href="product-grids.html" class="text-blue-500 hover:underline">Cameras, Photo &amp; Video</a>
                  <span class="text-gray-500">(874)</span>
                </li>
                <li class="flex justify-between mb-2">
                  <a href="product-grids.html" class="text-blue-500 hover:underline">Headphones</a>
                  <span class="text-gray-500">(1239)</span>
                </li>
                <li class="flex justify-between mb-2">
                  <a href="product-grids.html" class="text-blue-500 hover:underline">Wearable Electronics</a>
                  <span class="text-gray-500">(340)</span>
                </li>
                <li class="flex justify-between mb-2">
                  <a href="product-grids.html" class="text-blue-500 hover:underline">Printers &amp; Ink</a>
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
                <label class="mr-2">$</label>
                <input type="text" id="rangePrimary" placeholder="100" class="border border-gray-300 rounded px-2 py-1 focus:outline-none" />
              </div>
            </div>



            <div class="single-widget condition mb-6">
              <h3 class="text-lg font-semibold mb-4">Filter by Price</h3>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                  <label class="form-check-label" for="flexCheckDefault1">$50 - $100L (208)</label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                  <label class="form-check-label" for="flexCheckDefault2">$100L - $500 (311)</label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                  <label class="form-check-label" for="flexCheckDefault3">$500 - $1,000 (485)</label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                  <label class="form-check-label" for="flexCheckDefault4">$1,000 - $5,000 (213)</label>
              </div>
            </div>



            <div class="single-widget condition">
              <h3 class="text-lg font-semibold mb-4">Filter by Brand</h3>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                  <label class="form-check-label" for="flexCheckDefault11">Apple (254)</label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault22" />
                  <label class="form-check-label" for="flexCheckDefault22">Bosh (39)</label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault33" />
                  <label class="form-check-label" for="flexCheckDefault33">Canon Inc. (128)</label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault44" />
                  <label class="form-check-label" for="flexCheckDefault44">Dell (310)</label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault55" />
                  <label class="form-check-label" for="flexCheckDefault55">Hewlett-Packard (42)</label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault66" />
                  <label class="form-check-label" for="flexCheckDefault66">Hitachi (217)</label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault77" />
                  <label class="form-check-label" for="flexCheckDefault77">LG Electronics (310)</label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault88" />
                  <label class="form-check-label" for="flexCheckDefault88">Panasonic (74)</label>
              </div>
            </div>

          </div>
        </div>

        <div className="w-4/6">
         
        </div>
      </div>
    </>
  )
}
