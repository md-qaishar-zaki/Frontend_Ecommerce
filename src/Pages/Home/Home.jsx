import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import Products from '../../Components/Products/Products.jsx';
import FeaturedProduct from '../../Components/Featured_Product/FeaturedProduct.jsx';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
    const [bannerImg, setBannerImg] = useState([]);
    const [categoryDetails, setCategoryDetails] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sidebarRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchBannerImg = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/getbannerlist`);
                const data = await response.json();
                setBannerImg(data);
            } catch (error) {
                console.error('Error fetching banner images:', error);
            }
        };

        fetchBannerImg();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/getcatwithsubandsub`);
                const data = await response.json();
                setCategoryDetails(data.categories || []);
            } catch (error) {
                console.error('Error fetching category images:', error);
            }
        };

        fetchCategories();
    }, []);

    const getFullImageUrl = (path) => {
        return path.startsWith('http') ? path : `https://siyabling.com/machintools/public${path}`;
    };

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

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <section className="categories">
                <div className="container-fluid">
                    <div className="flex flex-wrap bg-white">
                        <div ref={sidebarRef} className={`lg:w-1/4 offcanvas-menu-wrapper ${isMenuOpen ? 'active' : ''}`}>
                            <nav className="offcanvas__menu">
                                <ul>
                                    {categoryDetails.map((category) => (
                                        <li
                                            key={category.id}
                                            onMouseEnter={() => setSelectedCategory(category)}
                                        >
                                            <a>
                                                <img src={category.icon} alt="" />
                                                {category.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="w-full lg:w-3/4 px-1 relative">
                            <div className="sliders p-1">
                                <Slider {...settings}>
                                    {bannerImg.length > 0 &&
                                        bannerImg.map((image, index) => (
                                            <div key={index} className="h-100 object-cover categories__item categories__large__item bg-cover bg-center">
                                                <img src={`${getFullImageUrl(image.photo)}`} alt="" className='h-100' />
                                            </div>
                                        ))}
                                </Slider>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <div className="flex-1 min-w-[100px] p-1">
                                    <div className="CompanyLogo">
                                        <img src="https://www.crompton.co.in/cdn/shop/files/crompton-greaves-logo.webp" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-[100px] p-1">
                                    <div className="CompanyLogo">
                                        <img src="https://havells.com/media/logo/stores/1/Havells_Logo.svg" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-[100px] p-1">
                                    <div className="CompanyLogo">
                                        <img src="https://www.khaitan.com/wp-content/uploads/2022/03/Logo.gif" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-[100px] p-1">
                                    <div className="CompanyLogo">
                                        <img src="https://global.yamaha-motor.com/shared/img/rwd_identity_new.png" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-[100px] p-1">
                                    <div className="CompanyLogo">
                                        <img src="https://www.lakshmipumps.com/images/logo.png" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-[100px] p-1">
                                    <div className="CompanyLogo">
                                        <img src="https://www.balwaan.com/assets/desktop/images/logo_header.png" alt="" />
                                    </div>
                                </div>

                            </div>
                            {selectedCategory && (
                                <div className="absolute top-0 left-0 w-9/12 h-full bg-white z-10"
                                    onMouseLeave={() => setSelectedCategory(null)} >
                                    <div className="content-section" style={{ width: '100%' }}>
                                        <div className="subcategories-container p-4">
                                            <div className='flex flex-wrap justify-between'>
                                                {selectedCategory.sub_categories && selectedCategory.sub_categories.length > 0 ? (
                                                    selectedCategory.sub_categories.map((subCategory) => (
                                                        <div key={subCategory.id} className="w-full md:w-1/2 lg:w-1/2 p-1">
                                                            <div className="h-full bg-white shadow-lg rounded-lg p-4 text-left"> 
                                                                <h4 className="text-base font-semibold text-gray-700 mt-2">
                                                                    {subCategory.title}
                                                                </h4>
                                                                <p className="text-gray-600 mt-2 block line-clamp-2" dangerouslySetInnerHTML={{ __html: subCategory.summary }}></p>
                                                                 
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p>No subcategories available.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <FeaturedProduct />
            <Products />
        </>
    );
}
