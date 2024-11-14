import React, { useEffect, useState } from 'react';
import './Product_Details.css';
import { useParams } from 'react-router-dom';
import RatingsReviews from '../../Components/Ratings_&_Reviews/Ratings_&_Reviews.jsx';
import QNA from '../../Components/QNA/QNA.jsx';
import Returnable from '../../assets/Categories Icon/return.png';
import Delivery from '../../assets/Categories Icon/fast-delivery.png';
import Quality from '../../assets/Categories Icon/quality.png';
import Pay from '../../assets/Categories Icon/indian-rupee.png';

export default function Project_Details() {
    window.scrollTo(0, 0);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const apiUrl = import.meta.env.VITE_API_URL;
    const [value, setValue] = useState(1);
    const [activeTab, setActiveTab] = useState('#tab1');

    function changeImage(src) {
        setSelectedImage(src);
        document.getElementById('mainImage').src = src;
    }

    useEffect(() => {

        const fetchProduct = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/getproductbyid/${id}`);
                if (!response.ok) throw new Error('Failed to fetch product');
                const productData = await response.json();
                setProduct(productData);
                if (productData.product.length > 0) {
                    const initialImage = productData.product[0]?.photoproduct[0]?.photo_path || '';
                    setSelectedImage(initialImage);
                    setCurrentImageIndex(0);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    function changeImage(src) {
        setSelectedImage(src);
        document.getElementById('mainImage').src = src;
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const productImages = product?.product?.photoproduct?.map(photo => photo.photo_path) || [];
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    };
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + productImages.length) % productImages.length);
    };

    const onDecrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const onIncrement = () => {
        setValue(value + 1);
    };

    const handleTabClick = (e, tabId) => {
        e.preventDefault();
        setActiveTab(tabId);
    };

    return (
        <div>
            <div class="bg-gray-100">
                <div class="container mx-auto px-4 py-8">
                    <div class="flex flex-wrap mx-4">
                        <div class="w-full md:w-1/2 px-4 mb-8">
                            <img
                                id="mainImage"
                                src={selectedImage}
                                alt={product.product.title}
                                onClick={openModal}
                                className="cursor-pointer zoom-effect w-full h-auto rounded-lg shadow-md mb-4"
                            />
                            <div class="flex gap-4 py-4 justify-center overflow-x-auto">
                                {product.product[0].photoproduct?.map((photo, index) => (
                                    <div className={`ProductIMGList w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer hover:opacity-100 transition duration-300 ${selectedImage === photo.photo_path ? 'border-2 border-blue-500 opacity-100' : ''}`}>
                                        <img
                                            key={index}
                                            src={photo.photo_path}
                                            alt={`${product.product.title} - ${index + 1}`}
                                            onClick={() => changeImage(photo.photo_path)}
                                            className='size-16 sm:size-20 object-cover rounded-md cursor-pointer transition duration-300' />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-4 text-left">
                            <h2 class="text-3xl font-bold mb-2">{product.product[0].title}</h2>
                            <p class="text-gray-600 mb-4">{product.product[0].sku}</p>
                            <div class="mb-4">
                                <span class="text-2xl font-bold mr-2">₹{product.product[0].purchase_price}</span>
                                <span class="text-gray-500 line-through">₹{product.product[0].price}</span>
                            </div>
                            <div class="flex items-center mb-4">
                                {product.stars}
                                {[...Array(product.stars)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="size-6 text-yellow-500">
                                        <path fill-rule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                ))}
                                <span class="ml-2 text-gray-600">4.5 (120 reviews)</span>
                            </div>
                            <p class="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: product.product[0].description }}></p>
                            <div class="mb-6">
                                <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                                <input type="number" id="quantity" name="quantity" min="1" value={product.product[0].min_qty}
                                    class="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>

                            <div class="flex space-x-4 mb-6">
                                <button
                                    class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Add to Cart
                                </button>
                                <button
                                    class="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    Wishlist
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="lg:w-1/3"></div>
                        <div className="lg:w-2/3">
                            <div class="border text-left rounded-lg px-3 py-2 bg-white">
                                <ul class="flex justify-around mb-3 border-b">
                                    <li class="flex-1" onClick={(e) => handleTabClick(e, '#tab1')}>
                                        <a className={`block py-2 text-center font-medium border-b-2 ${activeTab === '#tab1' ? 'border-blue-600 text-blue-600' : 'text-gray-500 border-transparent'
                                            }`} id="tab-link-1"
                                        >Specification</a>
                                    </li>
                                    <li class="flex-1" onClick={(e) => handleTabClick(e, '#tab2')}>
                                        <a className={`block py-2 text-center font-medium border-b-2 ${activeTab === '#tab2' ? 'border-blue-600 text-blue-600' : 'text-gray-500 border-transparent'
                                            }`} id="tab-link-2">Warranty info</a>
                                    </li>
                                    <li class="flex-1" onClick={(e) => handleTabClick(e, '#tab3')}>
                                        <a className={`block py-2 text-center font-medium border-b-2 ${activeTab === '#tab3' ? 'border-blue-600 text-blue-600' : 'text-gray-500 border-transparent'
                                            }`} id="tab-link-3">Shipping info</a>
                                    </li>
                                    <li class="flex-1" onClick={(e) => handleTabClick(e, '#tab4')}>
                                        <a className={`block py-2 text-center font-medium border-b-2 ${activeTab === '#tab4' ? 'border-blue-600 text-blue-600' : 'text-gray-500 border-transparent'
                                            }`} id="tab-link-4">Seller profile</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div id="tab-1" class="p-4 pb-5" className={`${activeTab === '#tab1' ? '' : 'hidden'}`}>
                                        <p>
                                            With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <div class="flex flex-wrap">
                                            <div class="w-full md:w-1/2 mb-4">
                                                <ul class="space-y-2">
                                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Some great feature name here</li>
                                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Duis aute irure dolor in reprehenderit</li>
                                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Optical heart sensor</li>
                                                </ul>
                                            </div>
                                            <div class="w-full md:w-1/2 mb-4">
                                                <ul class="space-y-2">
                                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Easy fast and very good</li>
                                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Some great feature name here</li>
                                                    <li><i class="fas fa-check text-green-500 mr-2"></i>Modern style and design</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <table class="w-full border mt-3 mb-2 text-left">
                                            <tbody>
                                                <tr class="border-b">
                                                    <th class="px-2 py-2 font-semibold">------</th>
                                                    <td class="py-2">Lorem ipsum dolor sit amet.</td>
                                                </tr>
                                                <tr class="border-b">
                                                    <th class="px-2 py-2 font-semibold">------</th>
                                                    <td class="py-2">Lorem ipsum dolor sit amet.</td>
                                                </tr>
                                                <tr class="border-b">
                                                    <th class="px-2 py-2 font-semibold">------</th>
                                                    <td class="py-2">Lorem ipsum dolor sit amet.</td>
                                                </tr>
                                                <tr class="border-b">
                                                    <th class="px-2 py-2 font-semibold">------</th>
                                                    <td class="py-2">Lorem ipsum dolor sit amet.</td>
                                                </tr>
                                                <tr>
                                                    <th class="px-2 py-2 font-semibold">------</th>
                                                    <td class="py-2">Lorem ipsum dolor sit amet.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div id="tab-2" class="hidden p-4" className={`${activeTab === '#tab2' ? '' : 'hidden'}`}>
                                        <p>
                                            Tab content or sample information now <br />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>

                                    <div id="tab-3" class="hidden p-4" className={`${activeTab === '#tab3' ? '' : 'hidden'}`}>
                                        <p>
                                            Another tab content or sample information now <br />
                                            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>

                                    <div id="tab-4" class="hidden p-4" className={`${activeTab === '#tab4' ? '' : 'hidden'}`}>
                                        <p>
                                            Some other tab content or sample information now <br />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
