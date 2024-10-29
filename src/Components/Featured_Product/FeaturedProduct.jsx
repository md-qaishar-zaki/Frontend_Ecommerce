import React, { useState, useEffect } from 'react';
import './FeaturedProduct.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function FeaturedProduct() {
    const [featuredProduct, setFeaturedProduct] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchFeaturedProduct = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/getis_featuredproduct`);
                const data = await response.json();
                setFeaturedProduct(data.product);
            } catch (error) {
                console.error('Error fetching featured products:', error);
            }
        };

        fetchFeaturedProduct();
    }, [apiUrl]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="section-title px-4">
                <h4 className="text-xl font-bold">Feature Product</h4>
            </div>
            <div className="container-fluid m-auto productSlider">
                <div className="carousel-container w-full">
                    <Slider {...settings}>
                        {featuredProduct.map((product, index) => (
                            <div className="w-1/5 p-2">
                            <div className="product-card">
                                <div className="product-card__image">
                                    {/* <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Red Nike Shoes" /> */}
                                    <img src={product.photoproduct[0].photo_path} alt="Red Nike Shoes" />
                                </div>
                                <div className="product-card__info">
                                    <h2 className="product-card__title line-clamp-1">{product.title}</h2>
                                    <p className="product-card__description line-clamp-1" dangerouslySetInnerHTML={{ __html: product.description }} />
                                    <div className="product-card__price-row">
                                        <span className="product-card__price">₹{product.price}.00</span>
                                        <button className="product-card__btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}
