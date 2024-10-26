import React from 'react'
import './RelatedProducts.css'
import ProductIMG from '../../assets/Img/motor1.jpeg'

export default function RelatedProducts() {
    return (
        <>
            <div className="container mx-auto max-w-l py-5">
                <h2 className="text-2xl font-semibold text-center mb-4">Related products</h2>
                <div id="grid" className="shop-tab-content active">
                    <div className="flex flex-wrap my-4">

                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/5 my-4 p-1">
                            <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative bg-white p-3 ">
                                <div className="relative overflow-hidden">
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                    <img className="w-full h-full" src={ProductIMG} alt="product image" loading="lazy" width="432" height="480" />
                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">

                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-5 px-4">
                                    <h4><a className="block text-base hover:text-orange transition-all" href="/">Batin crofessor pampden</a></h4>
                                    <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/5 my-4 p-1">
                            <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative bg-white p-3 ">
                                <div className="relative overflow-hidden">
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                    <img className="w-full h-full" src={ProductIMG} alt="product image" loading="lazy" width="432" height="480" />
                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">

                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-5 px-4">
                                    <h4><a className="block text-base hover:text-orange transition-all" href="/">Batin crofessor pampden</a></h4>
                                    <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/5 my-4 p-1">
                            <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative bg-white p-3 ">
                                <div className="relative overflow-hidden">
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                    <img className="w-full h-full" src={ProductIMG} alt="product image" loading="lazy" width="432" height="480" />
                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">

                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-5 px-4">
                                    <h4><a className="block text-base hover:text-orange transition-all" href="/">Batin crofessor pampden</a></h4>
                                    <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/5 my-4 p-1">
                            <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative bg-white p-3 ">
                                <div className="relative overflow-hidden">
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                    <img className="w-full h-full" src={ProductIMG} alt="product image" loading="lazy" width="432" height="480" />
                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">

                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-5 px-4">
                                    <h4><a className="block text-base hover:text-orange transition-all" href="/">Batin crofessor pampden</a></h4>
                                    <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/5 my-4 p-1">
                            <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative bg-white p-3 ">
                                <div className="relative overflow-hidden">
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                    <img className="w-full h-full" src={ProductIMG} alt="product image" loading="lazy" width="432" height="480" />
                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">

                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-5 px-4">
                                    <h4><a className="block text-base hover:text-orange transition-all" href="/">Batin crofessor pampden</a></h4>
                                    <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/5 my-4 p-1">
                            <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative bg-white p-3 ">
                                <div className="relative overflow-hidden">
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                    <img className="w-full h-full" src={ProductIMG} alt="product image" loading="lazy" width="432" height="480" />
                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">

                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-5 px-4">
                                    <h4><a className="block text-base hover:text-orange transition-all" href="/">Batin crofessor pampden</a></h4>
                                    <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/5 my-4 p-1">
                            <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative bg-white p-3 ">
                                <div className="relative overflow-hidden">
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                    <img className="w-full h-full" src={ProductIMG} alt="product image" loading="lazy" width="432" height="480" />
                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">

                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-5 px-4">
                                    <h4><a className="block text-base hover:text-orange transition-all" href="/">Batin crofessor pampden</a></h4>
                                    <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/5 my-4 p-1">
                            <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative bg-white p-3 ">
                                <div className="relative overflow-hidden">
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                    <img className="w-full h-full" src={ProductIMG} alt="product image" loading="lazy" width="432" height="480" />
                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">

                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-5 px-4">
                                    <h4><a className="block text-base hover:text-orange transition-all" href="/">Batin crofessor pampden</a></h4>
                                    <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/5 my-4 p-1">
                            <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative bg-white p-3 ">
                                <div className="relative overflow-hidden">
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                    <img className="w-full h-full" src={ProductIMG} alt="product image" loading="lazy" width="432" height="480" />
                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">

                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-5 px-4">
                                    <h4><a className="block text-base hover:text-orange transition-all" href="/">Batin crofessor pampden</a></h4>
                                    <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/5 my-4 p-1">
                            <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative bg-white p-3 ">
                                <div className="relative overflow-hidden">
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                    <img className="w-full h-full" src={ProductIMG} alt="product image" loading="lazy" width="432" height="480" />
                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">

                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-5 px-4">
                                    <h4><a className="block text-base hover:text-orange transition-all" href="/">Batin crofessor pampden</a></h4>
                                    <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}