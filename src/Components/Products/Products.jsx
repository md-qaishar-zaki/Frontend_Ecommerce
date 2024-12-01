import React, { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button.jsx";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CartContext } from '../../CartContext';

export default function ProductSlider() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;
    const [search, setSearch] = useState('');
    const { addToCart } = useContext(CartContext);
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/getcategorieslist`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCategories(data.categories || []); // Ensure it's an array in case of empty data
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    // State for current index of each category
    const [currentIndices, setCurrentIndices] = useState({});

    const handleNextSlide = (categoryId) => {
        setCurrentIndices((prevIndices) => {
            const currentIndex = prevIndices[categoryId] || 0;
            const nextIndex = (currentIndex + 1) % categories.find(cat => cat.id === categoryId).products.length; // Loop back
            return {
                ...prevIndices,
                [categoryId]: nextIndex,
            };
        });
    };

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
  
    const handleviewmore = (catId) => {
        let path = "/SearchResult";
        if (search) path += `?search=${search}`;
        else path += `?search=''`;
        if (catId) path += `&catId=${catId}`;
        else path += `&catId=''`;    
        navigate(path);
      };
    return (
        <>
            {categories.map((category,index) => {
                const currentIndex = currentIndices[category.id] || 0;
                const itemsToShow = 5;
                const startIndex = currentIndex;
                const endIndex = startIndex + itemsToShow;
                const visibleProducts = category.products.slice(startIndex, endIndex).concat(category.products.slice(0, Math.max(0, endIndex - category.products.length))); // Repeat products if needed

                if (!category.products || category.products.length === 0) {
                    return <div key={category.id}></div>;
                }
                if(category.products.length > 2){
                    return (
                        <div key={index}>
                            <div className="trend__content my-4">
                                <div className="section-title flex justify-between">
                                    <h4 className="text-xl font-bold">{category.title}</h4>
                                    <Button Name={"View More"} onClick={() => handleviewmore(category.id)} />
                                </div>
                            </div>
                            <div className="container-fluid m-auto productSlider">

                                <div className="flex flex-wrap">
                                    <div className="carousel-container w-full">
                                        <Slider {...settings}>
                                            {visibleProducts.map((product,index) => (
                                                <div className="w-1/5 px-2" key={index}>
                                                    <div className="product-card"  onClick={() => handleProductClick(product.slug)}>
                                                        <div className="product-card__image">
                                                            {/* <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Red Nike Shoes" /> */}
                                                            <img src={product.photoproduct[0].photo_path} alt="Red Nike Shoes" />
                                                        </div>
                                                        <div className="product-card__info">
                                                            <h2 className="product-card__title line-clamp-2">{product.title}</h2>
                                                            {/* <p className="product-card__description line-clamp-1"
                                                            dangerouslySetInnerHTML={{ __html: product.description }} /> */}
                                                            <div className="product-card__price-row">
                                                                <span className="product-card__price">₹{product.price}.00</span>
                                                                <button  onClick={(event) => {
                              event.stopPropagation(); // Prevents the click event from bubbling up
                              addToCart(product.slug);
                            }}  
                            className='product-card__btn' >Add to Cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
}
