import React, { useState, useEffect } from 'react';
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
                <div className="container-fluid px-2">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-3/5 p-1">
                            <div className="sliders">
                                <Slider {...settings}>
                                    {bannerImg.length > 0 &&
                                        bannerImg.map((image, index) => (
                                            <div
                                                key={index}
                                                className="categories__item categories__large__item bg-cover bg-center">
                                                <div className="title">
                                                    <h1 className="text-3xl font-bold mb-4">{image.title}</h1>
                                                    <a href="#" className="text-lg font-semibold text-white bg-black py-2 px-4">
                                                        Shop now
                                                    </a>
                                                </div>
                                                <img src={`${getFullImageUrl(image.photo)}`} alt="" />
                                            </div>
                                        ))}
                                </Slider>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5">
                            <div className="flex flex-wrap">
                                {categoryDetails.map((category, index) => (
                                    <div
                                        key={index}
                                        className={getClName(count, index)}
                                    >
                                        <div
                                            className="categories__item bg-contain bg-center bg-no-repeat relative overflow-hidden"
                                            style={{
                                                backgroundImage: `url(${getFullImageUrl(category.photo)})`
                                            }}
                                        >
                                        </div>
                                        <div className="categories__text">
                                            <h4 className="text-xs font-semibold mb-2">{category.title}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FeaturedProduct />
            <Products />
        </>
    );
}
