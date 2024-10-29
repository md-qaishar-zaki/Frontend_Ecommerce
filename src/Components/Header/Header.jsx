import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const sidebarRef = useRef(null);
    const apiUrl = import.meta.env.VITE_API_URL;

    console.log(apiUrl);
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
                const response = await fetch(`${apiUrl}/api/getcategorieslist`);
                const data = await response.json();
                setCategories(data.categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <header className="header">
                <div class="flex flex-wrap topHeader">
                    <div class="w-full lg:w-7/12 flex justify-between lg:justify-start">
                        <ul class="flex w-full lg:w-auto space-x-4">
                            <li><a class="top-bar-item text-gray-700">Info@gmail.com</a></li>
                            <li><strong><a class="top-bar-item text-gray-700">+91 1290123091</a></strong></li>
                        </ul>
                    </div>
                    <div class="w-full lg:w-5/12 text-right hidden lg:flex justify-end">
                        <ul class="flex space-x-4">
                            <li><a class="top-bar-item text-gray-700">Track Order</a></li>
                            <li><a class="top-bar-item text-gray-700">Login</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container m-auto px-9">
                    <div className="flex">
                        <div className="w-1/3 lg:w-3/10 flex items-center ">
                            <div className="canvas__open" onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                            <div className="header__logo ml-4">
                                <a href="/">
                                    {/* <img src="img/logo.png" alt="" /> */}
                                    <h6>Logo</h6>
                                </a>
                            </div>
                        </div>
                        <div className="w-2/3 lg:w-7/10 flex justify-between items-center">
                            <div className="InputSearch">
                                <input type="text" name="" id="" placeholder="Search Products" />
                                <select name="All Categories" id="All Categories">
                                    <option value="">All Categories</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.slug}>
                                            {category.title}
                                        </option>
                                    ))}
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                            <div className="header__right flex space-x-4 items-center">
                                <div className="flex header__right__auth space-x-3 text-sm font-medium">
                                    {/* <a href="/">Login</a>
                                <a href="/">Register</a> */}
                                    <div className="flex">
                                        <div className="cart">
                                            <span>2</span>
                                            <svg className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"></path>
                                            </svg>
                                        </div>
                                        <div className="fav">
                                            <span>3</span>
                                            <svg className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <ul className="header__right__widget flex space-x-4">
                                    <li>
                                        <span className="icon_search search-switch"></span>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className="icon_heart_alt"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span className="icon_bag_alt"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={sidebarRef} className={`offcanvas-menu-wrapper ${isMenuOpen ? 'active' : ''}`}>
                    <nav className="offcanvas__menu">
                        <ul>
                            {categories.map((category) => (
                                <li key={category.id} value={category.slug}><a href="./index.html">{category.title}</a></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}