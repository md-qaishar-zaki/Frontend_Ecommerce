import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import icon from '../../assets/Categories Icon/tools.png'
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); // For displaying selected menu details
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={sidebarRef} className={`offcanvas-menu-wrapper ${isMenuOpen ? 'active' : ''}  ${selectedCategory ? 'widthAdd' : ''}`}>
                    <div className="flex justify-between">
                        <nav className="offcanvas__menu">
                            <ul>
                                <li>Categories See All</li>
                                {categories.map((category) => (
                                    <li
                                        key={category.id}
                                        onMouseEnter={() => setSelectedCategory(category)}
                                        onMouseLeave={() => setSelectedCategory(null)}
                                    >
                                        <a><img src={icon} alt="" />
                                        {category.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {selectedCategory && (
                            <div className="w-4/6">
                                <div className="content-section" style={{ width: '70%' }}>
                                    <div>
                                        <h2>{selectedCategory.title}</h2>
                                        <p>{selectedCategory.details || 'Some default details about the category.'}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header >
        </>
    );
}
