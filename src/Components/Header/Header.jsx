import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import icon from '../../assets/Categories Icon/tools.png';
import { Routes, Route, Link } from 'react-router-dom';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [OTPModal, setOTPModal] = useState(false);
    const sidebarRef = useRef(null);
    const apiUrl = import.meta.env.VITE_API_URL;
    const [isFixed, setIsFixed] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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

    // useEffect(() => {
    //     if (OTPModal) {
    //         document.body.style.overflow = 'hidden';
    //     }
    //     else {
    //         document.body.style.overflow = 'auto';
    //     }
    // })

    useEffect(() => {
        const handleScroll = () => {
            // 100 pixels scroll hone par class lagaye
            if (window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        // Scroll event listener add karein
        window.addEventListener('scroll', handleScroll);

        // Clean up function mein listener ko remove karein
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <header className="header">
                <div className="flex flex-wrap topHeader">
                    <div className="w-full lg:w-7/12 flex justify-between lg:justify-start">
                        <ul className="flex w-full lg:w-auto space-x-4">
                            <li className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <a className="top-bar-item text-gray-700">Info@gmail.com</a></li>
                            <li className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <a className="top-bar-item text-gray-700">+91 1290123091</a></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-5/12 text-right hidden lg:flex justify-end">
                        <ul className="flex space-x-4">
                            <li className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <a className="top-bar-item text-gray-700">Track Order</a></li>
                            <li className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <a className="top-bar-item text-gray-700"
                                    onClick={() => setOTPModal(prev => !prev)}>Login</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container m-auto px-9">
                    <div className="flex">
                        <div className="w-1/3 lg:w-3/10 flex items-center">
                            {/* <div className="canvas__open" onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div> */}
                            <div className="header__logo ml-4">
                                <Link to="/">
                                <img src="https://logovectorseek.com/wp-content/uploads/2020/02/demos-logo-vector.png" alt="" className='logo' />
                                </Link>
                            </div>
                        </div>
                        <div className="w-2/3 lg:w-7/10 flex justify-end items-center">
                            <div className="InputSearch mr-8">
                                <input type="text" placeholder="Search Products" />
                                <select name="All Categories">
                                    <option value="">All Categories</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.slug}>
                                            {category.title}
                                        </option>
                                    ))}
                                </select>
                                <Link to="CategoriesProduct">
                                    <div className="searchIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                    </div>
                                </Link>
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
                <div ref={sidebarRef} className={`hidden offcanvas-menu-wrapper ${isMenuOpen ? 'active' : ''} ${selectedCategory ? 'widthAdd' : ''}`}>
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
            <ul class={` bg-white headerMenu ${isFixed ? 'CategoryFixed' : ''}`} >
                {categories.map((category) => (
                    <li className="dropdown" key={category.id}>
                        {category.title}
                        <div className="dropdown-menu">
                            {category.sub_categories.map((subCategory) => (
                                <div className="dropdown-item" key={subCategory.id}>
                                    <a className="sub-category-link">{subCategory.title}</a>

                                    {/* Nested dropdown for subcategory summary */}
                                    <div className="nested-dropdown">
                                        <a href="" className="subcategory-slug" dangerouslySetInnerHTML={{ __html: subCategory.summary }}></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
            {OTPModal &&
                < div class=" OTPModal min-h-screen py-6 flex flex-col justify-center sm:py-12">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div class="absolute inset-0 bg-gradient-to-r from-[#38d0a8] to-[#005f4b] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>

                        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

                            <div class="max-w-md mx-auto">
                                <div>
                                    <h1 class="text-2xl font-semibold">Login</h1>
                                </div>
                                <div class="divide-y divide-gray-200">
                                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div class="relative">
                                            <input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                            <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your Mobile No</label>
                                        </div>
                                        <div class="relative">
                                            <button class="bg-[#007c5b] text-white rounded-md px-4 py-2 hover:bg-[#005f4b] transition">
                                                Send OTP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full flex justify-center" onClick={() => setOTPModal(prev => !prev)}>
                                <button class="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                                    </svg>
                                    <span>Stay Without Login</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div >
            }
        </>
    );
}
