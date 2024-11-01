import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import icon from '../../assets/Categories Icon/tools.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const sidebarRef = useRef(null);
    const apiUrl = import.meta.env.VITE_API_URL;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/getcatwithsubandsub`);
                const data = await response.json();
                setCategories(data.categories); // Adjust according to your API response structure
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, [apiUrl]);


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <header className="header">
                <div className="flex flex-wrap topHeader">
                    <div className="w-full lg:w-7/12 flex justify-between lg:justify-start">
                        <ul className="flex w-full lg:w-auto space-x-4">
                            <li><a className="top-bar-item text-gray-700">Info@gmail.com</a></li>
                            <li><strong><a className="top-bar-item text-gray-700">+91 1290123091</a></strong></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-5/12 text-right hidden lg:flex justify-end">
                        <ul className="flex space-x-4">
                            <li><a className="top-bar-item text-gray-700">Track Order</a></li>
                            <li><a className="top-bar-item text-gray-700">Login</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container m-auto px-9">
                    <div className="flex">
                        <div className="w-1/3 lg:w-3/10 flex items-center">
                            <div className="canvas__open" onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                            <div className="header__logo ml-4">
                                <a href="/">
                                    <h6>Logo</h6>
                                </a>
                            </div>
                        </div>
                        <div className="w-2/3 lg:w-7/10 flex justify-between items-center">
                            <div className="InputSearch">
                                <input type="text" placeholder="Search Products" />
                                <select name="All Categories">
                                    <option value="">All Categories</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.slug}>
                                            {category.title}
                                        </option>
                                    ))}
                                </select>
                                <div className="searchIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex w-16 justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={sidebarRef} className={`offcanvas-menu-wrapper ${isMenuOpen ? 'active' : ''} ${selectedCategory ? 'widthAdd' : ''}`}>
                    <div className="flex justify-between">
                        <nav className="offcanvas__menu">
                            <ul>
                                <li>Categories See All</li>
                                {categories.map((category) => (
                                    <li
                                        key={category.id}
                                        onMouseEnter={() => setSelectedCategory(category)}
                                    >
                                        <a>
                                            <img src={icon} alt="" />
                                            {category.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {selectedCategory && (
                            <div className="w-4/6"
                            onMouseLeave={() => setSelectedCategory(null)}
                            >
                                <div className="content-section" style={{ width: '100%' }}>
                                    <div className="subcategories-container">
                                        <div className='flex flex-wrap justify-between'>
                                            {selectedCategory.sub_categories && selectedCategory.sub_categories.length > 0 ? (
                                                selectedCategory.sub_categories.map((subCategory) => (
                                                    <div key={subCategory.id} className="w-full md:w-1/2 lg:w-1/2 p-1">
                                                        {/* <h4></h4> 
                                                        <p ></p>
                                                        <img  /> */}

                                                        <div className="h-full bg-white shadow-lg rounded-lg p-4 text-left">
                                                            <div className='ImgSection'>
                                                                <img className="block mx-auto" src={subCategory.photo} alt={subCategory.title} /> 
                                                            </div>
                                                            <h4 className="text-base font-semibold text-gray-700 mt-2"> 
                                                                {subCategory.title}
                                                            </h4>
                                                            <p className="text-gray-600 mt-2 block" dangerouslySetInnerHTML={{ __html: subCategory.summary }}></p>
                                                            <p className="text-blue-500 hover:text-blue-400 mt-2 block">
                                                                See more
                                                                <svg className="inline w-4 h-4 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
                                                                </svg>
                                                            </p>
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
            </header>
        </>
    );
}
