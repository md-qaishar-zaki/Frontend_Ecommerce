import React, { useState, useEffect } from 'react';
import './Home.css';
import Products from '../../Components/Products/Products.jsx';
import FeaturedProduct from '../../Components/Featured_Product/FeaturedProduct.jsx';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CategoriesProductPage from '../Categories-Product-Pages/Categories_Product_Pages.jsx'

export default function Home() {
    const [bannerImg, setBannerImg] = useState([]);
    const [categoryDetails, setCategoryDetails] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;

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
        const fetchCategoryDetails = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/getcategorieslist`);
                const data = await response.json();
                setCategoryDetails(data.categories || []);
            } catch (error) {
                console.error('Error fetching category images:', error);
            }
        };

        fetchCategoryDetails();
    }, []);

    const getFullImageUrl = (path) => {
        return path.startsWith('http') ? path : `https://siyabling.com/machintools/public${path}`;
    };
    function getClName(count, index) {
        if (count === 6) {
            return index < 2 ? 'w-1/2 p-1 relative overflow-hidden' : 'w-1/4 p-1 relative overflow-hidden';
        } else if (count === 5) {
            return index < 2 ? 'w-1/2 p-1 relative overflow-hidden' : 'w-1/3 p-1 relative overflow-hidden';
        } else if (count === 4) {
            return index < 2 ? 'w-1/2 p-1 relative overflow-hidden' : 'w-1/2 p-1 relative overflow-hidden';
        }
        return '';
    }
    const count = categoryDetails.length;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <>
            <section className="categories">
                <div className="container-fluid">
                    <div className="flex flex-wrap bg-white">
                        <div className="w-full lg:w-1/4 categoryList">
                            {categoryDetails.map((list) => (
                                <>
                                    <div class="category-container">
                                        <div class="category-section">
                                            <div class="category-img" tabindex="0">
                                                <img alt="trending-categories"
                                                    src="https://cdn.moglix.com/cms/flyout/Images_2023-12-07_14-51-07_office-stationery-supplies.jpg" />
                                            </div>
                                            <div class="category-name" tabindex="0">
                                                <p>{list.title}</p><span><i class="icon-arrow-right-s-line">
                                                </i></span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className="w-full lg:w-3/4 px-1">
                            <div className="sliders p-1">
                                <Slider {...settings}>
                                    {bannerImg.length > 0 &&
                                        bannerImg.map((image, index) => (
                                            <div key={index}
                                                className="h-100 categories__item categories__large__item bg-cover bg-center">
                                                <div className="title h-100">
                                                    {/* <h1 className="text-3xl font-bold mb-4">{image.title}</h1>
                                                    <a href="#" className="text-lg font-semibold text-white bg-black py-2 px-4">
                                                        Shop now
                                                    </a> */}
                                                </div>
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
                        </div>
                    </div>
                </div>
            </section>
            <FeaturedProduct />
            <Products />
            {/* <CategoriesProductPage /> */}


        </>
    );
}
