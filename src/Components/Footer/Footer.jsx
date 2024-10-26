import React, { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
    const [showScroll, setShowScroll] = useState(false);

    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Check scroll position and toggle button visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="container mt-5 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 FooterList">
                <div className="bg-white p-4 rounded border-neutral-300 border-2 flex justify-center justify-items-center items-center flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                    <p>About Us</p>
                </div>
                <div className="bg-white p-4 rounded border-neutral-300 border-2 flex justify-center justify-items-center items-center flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>
                    <p>Return Policy</p>
                </div>
                <div className="bg-white p-4 rounded border-neutral-300 border-2 flex justify-center justify-items-center items-center flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                    </svg>
                    <p>Secure Payment</p>
                </div>
                <div className="bg-white p-4 rounded border-neutral-300 border-2 flex justify-center justify-items-center items-center flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <p>Blogs</p>
                </div>
            </div>

            <footer className="footer pt-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        {/* About Section */}
                        <div className="px-7 w-full lg:w-1/3 md:w-1/2 sm:w-full mb-8">
                            <div className="mb-4">
                                <div className="flex justify-between mb-2">
                                    <div className="flex items-center space-x-2 footerBox">
                                        <div className="image">
                                            <img src="https://yantratools.com/public/uploads/footer/customer.webp" width="60" height="60" alt="Customer" />
                                        </div>
                                        <div>
                                            <span className="block">80,000 +</span>
                                            <span>Customers</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 footerBox">
                                        <div className="image">
                                            <img src="https://yantratools.com/public/uploads/footer/Varified.webp" width="60" height="60" alt="Verified" />
                                        </div>
                                        <div>
                                            <span className="block">Products Quality</span>
                                            <span>Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <div className="flex items-center space-x-2 footerBox">
                                        <div className="image">
                                            <img src="https://yantratools.com/public/uploads/footer/cod.webp" width="60" height="60" alt="Cash on Delivery" />
                                        </div>
                                        <div>
                                            <span className="block">Cash On</span>
                                            <span>Delivery</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 footerBox">
                                        <div className="image">
                                            <img src="https://yantratools.com/public/uploads/footer/easy-return.webp" width="60" height="60" alt="Easy Return" />
                                        </div>
                                        <div>
                                            <span className="block">Easy</span>
                                            <span>Return</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="w-full lg:w-1/6 md:w-1/3 sm:w-1/2 mb-8">
                            <div className="footer__widget">
                                <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
                                <ul className="space-y-2 text-gray-600">
                                    <li><a href="/" className="hover:underline">About</a></li>
                                    <li><a href="/" className="hover:underline">Blogs</a></li>
                                    <li><a href="/" className="hover:underline">Contact</a></li>
                                    <li><a href="/" className="hover:underline">FAQ</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Account Links */}
                        <div className="w-full lg:w-1/6 md:w-1/3 sm:w-1/2 mb-8">
                            <div className="footer__widget">
                                <h6 className="text-lg font-semibold mb-4">Account</h6>
                                <ul className="space-y-2 text-gray-600">
                                    <li><a href="/" className="hover:underline">My Account</a></li>
                                    <li><a href="/" className="hover:underline">Orders Tracking</a></li>
                                    <li><a href="/" className="hover:underline">Checkout</a></li>
                                    <li><a href="/" className="hover:underline">Wishlist</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="w-full lg:w-1/3 md:w-2/3 sm:w-full mb-8">
                            <div className="footer__newsletter">
                                <h6 className="text-lg font-semibold mb-4">Contact Info</h6>
                                <label htmlFor="">Address:</label>
                                <p>New Town Kolkata 700161</p>
                                <label htmlFor="">Phone:</label>
                                <p>1239804512</p>
                                <label htmlFor="">Email:</label>
                                <p>Info@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="footer-bottom px-8 py-3 bg-gray-800 text-white">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center">
 
                            <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
                                <ul className="flex justify-center md:justify-start space-x-4">
                                    <li>© 2024</li>
                                    <li>
                                        <a href="https://yantratools.com/terms" className="hover:underline">Terms</a>
                                    </li>
                                    <li>
                                        <a href="https://yantratools.com/privacypolicy" className="hover:underline">Privacy policy</a>
                                    </li>
                                </ul>
                            </div>
 
                            <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                                <ul className="flex space-x-4">
                                    <li>
                                        <a href="https://www.facebook.com/Yantratools-108311474796158" className="text-blue-500 hover:text-blue-700" target="_blank">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/channel/UCt-k8Ug6S_KhiMF7sR_drHg" className="text-red-500 hover:text-red-700" target="_blank">
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
 
                            <div className="w-full md:w-1/3 text-center md:text-right">
                                <ul className="inline-flex space-x-4">
                                    <li>
                                        <img loading="lazy" alt="razorpay" src="https://yantratools.com/public/frontend/images/icons/cards/rozarpay.png" className="h-8" />
                                    </li>
                                    <li>
                                        <img loading="lazy" alt="cash on delivery" src="https://yantratools.com/public/frontend/images/icons/cards/cod.png" className="h-8" />
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>


                {showScroll && (
                    <button onClick={scrollToTop}
                        className="scrollToTop fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </button>
                )}
            </footer>
        </>
    );
}
