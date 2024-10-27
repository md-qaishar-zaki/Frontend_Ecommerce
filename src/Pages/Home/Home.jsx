import React, { useState, useEffect } from 'react';
import './Home.css';
import Products from '../../Components/Products/Products.jsx';
import FeaturedProduct from '../../Components/Featured_Product/FeaturedProduct.jsx'

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

    return (
        <>
            <section className="categories">
                <div className="container-fluid px-0">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 p-0">
                            {bannerImg.length > 0 && (
                                <div
                                    className="categories__item categories__large__item bg-cover bg-center"
                                    style={{ backgroundImage: `url(${getFullImageUrl(bannerImg[0].photo)})` }}
                                >
                                    <div className="categories__text p-8">
                                        <h1 className="text-3xl font-bold mb-4">{bannerImg[0].title}</h1>
                                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: bannerImg[0].description }} />
                                        <a href="#" className="text-lg font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-wrap">
                                {categoryDetails.map((category, index) => (
                                    <div
                                        key={index}
                                        className={` ${index < 2 ? 'w-1/2' : 'w-1/4'}`}>
                                        <div className="categories__item bg-cover bg-center relative overflow-hidden"
                                            style={{
                                                backgroundImage: `url(${category.photo})`
                                            }}>
                                            <div className='categories__text'>
                                                <h4 className="text-xl font-semibold mb-2">
                                                    {category.title}
                                                </h4>
                                                <span className="line-clamp-1" dangerouslySetInnerHTML={{ __html: category.summary || 'Default Description' }} />
                                                <a href="#" className="text-base font-semibold text-white bg-black py-2 px-4">
                                                    Shop now
                                                </a>
                                            </div>
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
