import React, { useState, useEffect, useRef } from "react";
import Products from "../../Components/Products/Products.jsx";
import FeaturedProduct from "../../Components/Featured_Product/FeaturedProduct.jsx";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

export default function Home() {
  const [bannerImg, setBannerImg] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const navigate = useNavigate();
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);
 
  //banner Images
  useEffect(() => {
    const fetchBannerImg = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/getbannerlist`);
        const data = await response.json();
        setBannerImg(data);
      } catch (error) {
        console.error("Error fetching banner images:", error);
      }
    };

    fetchBannerImg();
  }, []);

  //category list with sub and sub-sub category
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/getcatwithsubandsub`);
        const data = await response.json();
        setCategoryDetails(data.categories || []);
      } catch (error) {
        console.error("Error fetching category images:", error);
      }
    };

    fetchCategories();
  }, []);

  // image path url setting
  const getFullImageUrl = (path) => {
    return path.startsWith("http")
      ? path
      : `https://siyabling.com/machintools/public${path}`;
  };

  const handleSearchlick = (search, catId) => {
    if (!search && !catId) {
      alert("Please enter a search term or select a category.");
      return; // Prevent navigation if both are empty
    }
    let path = "/SearchResult";
    if (search) path += `?search=${search}`;
    else path += `?search=''`;
    if (catId) path += `&catId=${catId}`;
    else path += `&catId=''`;

    navigate(path);
  };

  const handleSearchcatlick = (catid)=>{
    let path = "/SearchResult/Catid?catId=" + catid;
    navigate(path);
  }
  const handleSearchsubclick = (subcatid)=>{
    let path = "/SearchResult/SubCatid?catId=" + subcatid;
    navigate(path);
  }
  const handleSearchsubsubclick = (subsubcatid)=>{
    let path = "/SearchResult/SubsubCatid?catId=" + subsubcatid;
    navigate(path);
  }

  //slider css
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Menu show and hide
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
  // Menu show and hide
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Features Product list fetch
  useEffect(() => {
    const fetchFeaturedProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/getis_featuredproduct`);
        const data = await response.json();
        setFeaturedProduct(data.product.data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchFeaturedProduct();
  }, [apiUrl]);

  return (
    <>
      <section className="categories">
        <div className="container-fluid">
          <div className="flex flex-wrap">
            <div
              ref={sidebarRef}
              className={`pr-4 pt-4 pb-4 pl-4 w-[20%] ${
                isMenuOpen ? "active" : ""
              }`}
            >
              <nav className="bg-white rounded-md h-full overflow-hidden offcanvas__menu offcanvas-menu-wrapper">
                {categoryDetails.map((category, index) => (
                  <ul key={index}>
                    <li onMouseEnter={() => setSelectedCategory(category)}>
                      <a onClick={() => handleSearchcatlick( category.id)}>
                        <img src={category.icon_path} alt={category.title} />
                        {category.title}
                      </a>
                    </li>
                    {/* <li>View All Category</li> */}
                  </ul>
                ))}
              </nav>
            </div>
            <div className="relative mt-4 pr-4 pb-4 w-[80%]">
              <div className="relative bg-white mb-12 rounded-md">
                <div className="sliders">
                  <Slider {...settings}>
                    {bannerImg.length > 0 &&
                      bannerImg.map((image, index) => (
                        <div
                          key={index}
                          className="bg-cover bg-center h-100 categories__item categories__large__item object-cover"
                        >
                          <img
                            src={`${getFullImageUrl(image.photo)}`}
                            alt=""
                            className="h-100"
                          />
                        </div>
                      ))}
                  </Slider>
                </div>
                <div className="flex flex-wrap justify-center brandsBar">
                  <div className="flex-1 min-w-[100px]">
                    <div className="CompanyLogo">
                      <img
                        src="https://www.crompton.co.in/cdn/shop/files/crompton-greaves-logo.webp"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-[100px]">
                    <div className="CompanyLogo">
                      <img
                        src="https://havells.com/media/logo/stores/1/Havells_Logo.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-[100px]">
                    <div className="CompanyLogo">
                      <img
                        src="https://www.khaitan.com/wp-content/uploads/2022/03/Logo.gif"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-[100px]">
                    <div className="CompanyLogo">
                      <img
                        src="https://global.yamaha-motor.com/shared/img/rwd_identity_new.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-[100px]">
                    <div className="CompanyLogo">
                      <img
                        src="https://www.lakshmipumps.com/images/logo.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-[100px]">
                    <div className="border-none CompanyLogo">
                      <img
                        src="https://www.balwaan.com/assets/desktop/images/logo_header.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Selected Category Menu */}         
               {selectedCategory && (
                <div
                  className="top-0 left-0 z-10 absolute bg-white w-52 h-full selectedCategory"
                  onMouseLeave={() => {
                    setSelectedCategory(null);
                    setHoveredSubCategory(null);
                  }}
                >
                  <div className="content-section" style={{ width: "100%" }}>
                    <div className="text-left offcanvas__menu">
                      {selectedCategory.sub_categories &&
                      selectedCategory.sub_categories.length > 0 ? (
                        selectedCategory.sub_categories.map((subCategory, index) => (
                          <div
                            key={index}
                            className="p-4 relative"
                            onMouseEnter={() => setHoveredSubCategory(subCategory)}
                            onMouseLeave={() => setHoveredSubCategory(null)}
                          >
                            <ul>
                              <li>
                                <a onClick={() => handleSearchsubclick(null, subCategory.id)} >{subCategory.title}</a>
                              </li>
                            </ul>
                            {/* Sub-Subcategories Section */}
                            {hoveredSubCategory === subCategory &&
                                subCategory.sub_sub_categories &&
                                subCategory.sub_sub_categories.length > 0 && (
                                    <div
                                    className="absolute top-0 p-4 left-full bg-white shadow-lg w-64 h-auto z-20 overflow-auto max-h-[300px]"
                                    style={{ whiteSpace: "nowrap" }}
                                    >
                                    <ul className="p-4">
                                        {subCategory.sub_sub_categories.map((subSubCategory, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className="mb-2 hover:bg-gray-100 rounded px-2 py-1"
                                        >
                                            <a onClick={() => handleSearchsubsubclick(null, subSubCategory.id)}  className="block">{subSubCategory.title}</a>
                                        </li>
                                        ))}
                                    </ul>
                                    </div>
                                )}

                          </div>
                        ))
                      ) : (
                        <p>No subcategories available.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {featuredProduct.length >= 3 ? (
        <FeaturedProduct featuredProduct={featuredProduct} />
      ) : null}
      <Products />
    </>
  );
}
