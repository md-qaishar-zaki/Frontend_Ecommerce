import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button.jsx";
import Trend_Spad from "../Trend_Spad/Trend_Spad.jsx";

export default function ProductSlider() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;

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

    const handleProductClick = (slug) => {
        navigate(`product/${slug}`);
    };

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

    const handlePrevSlide = (categoryId) => {
        setCurrentIndices((prevIndices) => {
            const currentIndex = prevIndices[categoryId] || 0;
            const prevIndex = (currentIndex - 1 + categories.find(cat => cat.id === categoryId).products.length) % categories.find(cat => cat.id === categoryId).products.length; // Loop back
            return {
                ...prevIndices,
                [categoryId]: prevIndex,
            };
        });
    };

    return (
        <>
            {categories.map((category) => {
                const currentIndex = currentIndices[category.id] || 0;
                const itemsToShow = 5; // Number of products to show
                const startIndex = currentIndex;
                const endIndex = startIndex + itemsToShow;
                const visibleProducts = category.products.slice(startIndex, endIndex).concat(category.products.slice(0, Math.max(0, endIndex - category.products.length))); // Repeat products if needed

                if (!category.products || category.products.length === 0) {
                    return <div key={category.id}></div>;
                }

                return (
                    <div key={category.id} className="container-fluid m-auto productSlider">
                        <div className="trend__content">
                            <div className="section-title">
                                <h4 className="text-xl font-bold">{category.title}</h4>
                            </div>
                        </div>
                        <div className="slider">
                            {/* <button onClick={() => handlePrevSlide(category.id)} className="slider-button Prev">Prev</button> */}
                            <div className="slider-container">
                                {visibleProducts.map((product) => (
                                    <div key={product.id} onClick={() => handleProductClick(product.id)} className="slider-item">
                                        <Trend_Spad
                                            ProductTitle={product.title}
                                            ImgName={product.photoproduct && product.photoproduct.length > 0 ? product.photoproduct[0].photo_path : 'DEFAULT_IMAGE'}
                                            Price={product.price}
                                            stars={product.rating}
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* <button onClick={() => handleNextSlide(category.id)} className="slider-button">Next</button> */}
                        </div>
                        <div className="flex justify-center mt-4">
                            <Button Name={"View More"} />
                        </div>
                    </div>
                );
            })}
        </>
    );
}
