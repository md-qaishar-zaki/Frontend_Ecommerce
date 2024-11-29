import React, { useEffect, useState, useCallback, useMemo } from 'react';
import '../Categories-Product-Pages/Categories_Product.css';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import debounce from 'lodash.debounce'; // Import debounce from lodash

const apiUrl = import.meta.env.VITE_API_URL;

export default function CategoriesProductPages() {
  const location = useLocation(); 
  const [searchValue, setSearchValue] = useState('');
  const [catIdValue, setCatIdValue] = useState('');
  const [products, setProducts] = useState([]);
  const [recentProduct, setRecentProduct] = useState(null);
  const [priceRange, setPriceRange] = useState(10000);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isPriceRangeChanged, setIsPriceRangeChanged] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search') || '';
    const catId = queryParams.get('catId') || '';
    setSearchValue(search);
    setCatIdValue(catId);
  }, [location.search]);

  const fetchProduct = useCallback(async () => {
    try {

      let productapi = location.pathname === '/SearchResult/Features' 
          ? 'getis_featuredproduct' 
          : location.pathname === '/SearchResult/Catid'
          ? 'getCateidProduct'
          : location.pathname === '/SearchResult/SubCatid'
          ? 'getSubCateidProduct'
          : location.pathname === '/SearchResult/SubsubCatid'
          ? 'getSubSubCateidProduct'
          :'getproductSearch';
      const response = await axios.get(`${apiUrl}/api/${productapi}`, {
        params: { search: searchValue, cat_id: catIdValue }
      });
      if (response.status === 200) {
        setProducts(response.data.product.data);
        setRecentProduct(response.data.recent_products);
        setBrands(response.data.brands);
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

    fetchCategories();
  }, [fetchProduct]);

  const handleSearchChange = debounce((e) => {
    setSearchValue(e.target.value);
  }, 300); // Debounce the search input

  const sortedAndFilteredProducts = useMemo(() => {
    let filtered = [...products];

    // Combine selected brands from dropdown and checkboxes
    const allSelectedBrands = new Set(selectedBrands);
    if (selectedBrand) {
      allSelectedBrands.add(parseInt(selectedBrand, 10));
    }

    // Filter by selected brand IDs
    if (allSelectedBrands.size > 0) {
      filtered = filtered.filter(product => allSelectedBrands.has(product.brand_id));
    }

    // Filter by selected category IDs
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.cat_id));
    }

    // Filter by price range
    if (isPriceRangeChanged) {
      filtered = filtered.filter(product => product.price <= priceRange);
    }

    // Sort products
    switch (sortOption) {
      case 'low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'a-z':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'z-a':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    return filtered;
  }, [products, sortOption, selectedBrand, selectedBrands, selectedCategories, priceRange, isPriceRangeChanged]);

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortOption(selectedSort);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('sort', selectedSort);
    window.history.replaceState(null, '', `?${queryParams.toString()}`);
  };

  const handleBrandChange = (e) => {
    const brandId = parseInt(e.target.value, 10);
    setSelectedBrand(brandId);
    setSelectedBrands(brandId ? [brandId] : []); // Update selectedBrands to reflect the dropdown selection
    const queryParams = new URLSearchParams(location.search);
    if (brandId) {
      queryParams.set('brand', brandId);
    } else {
      queryParams.delete('brand');
    }
    window.history.replaceState(null, '', `?${queryParams.toString()}`);
  };

  const handleBrandCheckboxChange = (e) => {
    const brandId = parseInt(e.target.value, 10);
    setSelectedBrands(prevSelectedBrands => {
      let updatedBrands;
      if (prevSelectedBrands.includes(brandId)) {
        // Remove brand if already selected
        updatedBrands = prevSelectedBrands.filter(id => id !== brandId);
      } else {
        // Add brand if not selected
        updatedBrands = [...prevSelectedBrands, brandId];
      }
      setSelectedBrand(updatedBrands.length === 1 ? updatedBrands[0] : ''); // Update selectedBrand if only one brand is selected

      // Update URL
      const queryParams = new URLSearchParams(location.search);
      if (updatedBrands.length > 0) {
        queryParams.set('brand', updatedBrands.join(','));
      } else {
        queryParams.delete('brand');
      }
      window.history.replaceState(null, '', `?${queryParams.toString()}`);

      return updatedBrands;
    });
  };

  const handleCategoryCheckboxChange = (e) => {
    const categoryId = parseInt(e.target.value, 10);
    setSelectedCategories(prevSelectedCategories => {
      let updatedCategories;
      if (prevSelectedCategories.includes(categoryId)) {
        // Remove category if already selected
        updatedCategories = prevSelectedCategories.filter(id => id !== categoryId);
      } else {
        // Add category if not selected
        updatedCategories = [...prevSelectedCategories, categoryId];
      }

      // Update URL
      const queryParams = new URLSearchParams(location.search);
      if (updatedCategories.length > 0) {
        queryParams.set('category', updatedCategories.join(','));
      } else {
        queryParams.delete('category');
      }
      window.history.replaceState(null, '', `?${queryParams.toString()}`);

      return updatedCategories;
    });
  };

  const handlePriceRangeChange = (e) => {
    const newPriceRange = e.target.value;
    setPriceRange(newPriceRange);
    setIsPriceRangeChanged(true);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (selectedBrands.length > 0) {
      queryParams.set('brand', selectedBrands.join(','));
    } else {
      queryParams.delete('brand');
    }
    window.history.replaceState(null, '', `?${queryParams.toString()}`);
  }, [selectedBrands]);

  useEffect(() => {
    if (isPriceRangeChanged) {
      const queryParams = new URLSearchParams(location.search);
      queryParams.set('price', priceRange);
      window.history.replaceState(null, '', `?${queryParams.toString()}`);
    }
  }, [priceRange, isPriceRangeChanged]);

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
                    defaultValue={searchValue}
                    onChange={handleSearchChange}
                  />
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
                    <i className="lni lni-search-alt"></i>
                  </button>
                </form>
              </div>
              <div className="single-widget condition">
                <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
                {categories.map((category, index) => (
                  <div className="form-check mb-2" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={category.id}
                      id={`categoryCheck${index}`}
                      onChange={handleCategoryCheckboxChange}
                      checked={selectedCategories.includes(category.id)} // Ensure checkbox reflects the state
                    />
                    <label className="form-check-label" htmlFor={`categoryCheck${index}`}>
                      {category.title} ({category.count})
                    </label>
                  </div>
                ))}
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
                  onChange={handlePriceRangeChange}
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
              <div className="single-widget condition">
                <h3 className="text-lg font-semibold mb-4">Filter by Brand</h3>
                {brands.map((brand, index) => (
                  <div className="form-check mb-2" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={brand.id}
                      id={`brandCheck${index}`}
                      onChange={handleBrandCheckboxChange}
                      checked={selectedBrands.includes(brand.id)} // Ensure checkbox reflects the state
                    />
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
                      <select id="sorting" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-sm" onChange={handleSortChange}>
                        <option value="">Select Sort</option>
                        <option value="low-high">Low - High Price</option>
                        <option value="high-low">High - Low Price</option>
                        <option value="rating">Average Rating</option>
                        <option value="a-z">A - Z Order</option>
                        <option value="z-a">Z - A Order</option>
                      </select>
                      <select id="brand-filter" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-sm" onChange={handleBrandChange} value={selectedBrand}>
                        <option value="">All Brands</option>
                        {brands.map((brand, index) => (
                          <option key={index} value={brand.id}>{brand.title}</option>
                        ))}
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
                    {sortedAndFilteredProducts.map((product) => {
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
