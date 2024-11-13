import React, { useState, useEffect } from 'react';
import './FeaturedProduct.css';
import Button from "../Button.jsx";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

export default function FeaturedProduct() {
    const [featuredProduct, setFeaturedProduct] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();


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
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 6,
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

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to product details page
    };

    return (
        <>
            <div className="section-title px-4 flex justify-between">
                <h4 className="text-xl font-bold">Feature Product</h4>
                <Button Name={"View More"} />
            </div>
            <div className="container-fluid m-auto productSlider">
                <div className="carousel-container w-full">
                    <Slider {...settings}>
                        {featuredProduct.map((product, index) => (
                            <div className="w-1/5 px-2" key={product.id} >
                                <div className="product-card" onClick={() => handleProductClick(product.slug)}>
                                    <div className="product-card__image">
                                        {/* <div className="heart">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </div> */}
                                        {/* <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Red Nike Shoes" /> */}
                                        <img src={product.photoproduct[0].photo_path} alt="Red Nike Shoes" />
                                    </div>
                                    <div className="product-card__info">
                                        <h2 className="product-card__title line-clamp-2">{product.title}</h2>
                                        {/* <p className="product-card__description line-clamp-1" dangerouslySetInnerHTML={{ __html: product.description }} /> */}
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
