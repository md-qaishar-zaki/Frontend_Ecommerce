import React, { useState, useEffect, useRef } from 'react';
import Products from '../../Components/Products/Products.jsx';
import FeaturedProduct from '../../Components/Featured_Product/FeaturedProduct.jsx';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

export default function Home() {
    const [bannerImg, setBannerImg] = useState([]);
    const [categoryDetails, setCategoryDetails] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sidebarRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [featuredProduct, setFeaturedProduct] = useState([])

    //banner Images
    useEffect(() => {
        const fetchBannerImg = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/getbannerlist`);
                const data = await response.json();
                setBannerImg(data)
            } catch (error) {
                console.error('Error fetching banner images:', error);
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
                console.error('Error fetching category images:', error);
            }
        };

        fetchCategories();
    }, []);

    // image path url setting
    const getFullImageUrl = (path) => {
        return path.startsWith('http') ? path : `https://siyabling.com/machintools/public${path}`;
    };

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
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Features Product list fetch
    useEffect(() => {
        const fetchFeaturedProduct = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/getis_featuredproduct`)
                const data = await response.json()
                setFeaturedProduct(data.product)
            } catch (error) {
                console.error('Error fetching featured products:', error)
            }
        }

        fetchFeaturedProduct()
    }, [apiUrl])


    return (
        <>
            <section className="categories">
                <div className="container-fluid">
                    <div className="flex flex-wrap">
                        <div ref={sidebarRef} className={`pr-4 pt-4 pb-4 pl-4 w-[20%] ${isMenuOpen ? 'active' : ''}`}>
                            <nav className="bg-white rounded-md h-full overflow-hidden offcanvas__menu offcanvas-menu-wrapper">
                                {categoryDetails.map((category,index) => (
                                <ul key={index}>
                                            <li

                                                onMouseEnter={() => setSelectedCategory(category)}>
                                                <a>
                                                    <img src={category.icon_path} alt="" />
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
                                                <div key={index} className="bg-cover bg-center h-100 categories__item categories__large__item object-cover">
                                                    <img src={`${getFullImageUrl(image.photo)}`} alt="" className='h-100' />
                                                </div>
                                            ))}
                                    </Slider>
                                </div>
                                <div className="flex flex-wrap justify-center brandsBar">
                                    <div className="flex-1 min-w-[100px]">
                                        <div className="CompanyLogo">
                                            <img src="https://www.crompton.co.in/cdn/shop/files/crompton-greaves-logo.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-[100px]">
                                        <div className="CompanyLogo">
                                            <img src="https://havells.com/media/logo/stores/1/Havells_Logo.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-[100px]">
                                        <div className="CompanyLogo">
                                            <img src="https://www.khaitan.com/wp-content/uploads/2022/03/Logo.gif" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-[100px]">
                                        <div className="CompanyLogo">
                                            <img src="https://global.yamaha-motor.com/shared/img/rwd_identity_new.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-[100px]">
                                        <div className="CompanyLogo">
                                            <img src="https://www.lakshmipumps.com/images/logo.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-[100px]">
                                        <div className="border-none CompanyLogo">
                                            <img src="https://www.balwaan.com/assets/desktop/images/logo_header.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {selectedCategory && (
                                <div className="top-0 left-0 z-10 absolute bg-white w-52 h-full selectedCategory"
                                    onMouseLeave={() => setSelectedCategory(null)} >
                                    <div className="content-section" style={{ width: '100%' }}>
                                        <div className="text-left offcanvas__menu">
                                            {selectedCategory.sub_categories && selectedCategory.sub_categories.length > 0 ? (
                                                selectedCategory.sub_categories.map((subCategory,index) => (
                                                    <ul key={index}  className='p-4'>
                                                        <li><a>{subCategory.title}</a></li>
                                                    </ul>
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
            {featuredProduct.length >= 3
                ? <FeaturedProduct featuredProduct={featuredProduct} />:null
            }
            <Products />
        </>
    );
}
