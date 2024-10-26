import React from 'react'
import './TreandSpad.css'

export default function Trend_Spad({ ImgName, ProductTitle, Price, stars }) {
    return (
        <div className='p-2'>
            <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="ImgHeight relative mx-3 mt-3 flex rounded-xl" >
                    <img src={ImgName} alt="Electric Motor 2/3/5 HP Standard IS" className="w-full h-auto rounded-lg" />
                    <span className="absolute top-0 left-0 m-1 rounded-full bg-black px-2 text-center text-xs font-medium text-white">39% OFF</span>
                </a>
                <div className="mt-2 px-3 pb-3 ContentHeight">
                    <a >
                        <h5 className="ProductTitle text-sm leading-4 font-semibold tracking-tight text-slate-900">{ProductTitle}</h5>
                    </a>
                    <div className="flex justify-between items-center">
                        <div className="mt-1 mb-2 flex-col">
                            <p className='Price'>
                                <span className="text-sm font-extrabold text-slate-900">₹{Price}</span>
                                <span className="text-sm text-slate-400 mx-2 font-medium line-through">₹{Price + 1}</span>
                            </p>
                            <div className="flex items-center">
                                {[...Array(stars)].map((_, index) => (
                                    <svg key={index} aria-hidden="true" className="h-4 w-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                ))}
                                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2 py-0.5 text-xs font-semibold">5.0</span>
                            </div>
                        </div>
                        <svg className='cursor-pointer size-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg>
                    </div>

                    <a  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart</a
                    >
                </div>
            </div>
        </div>
    )
}
