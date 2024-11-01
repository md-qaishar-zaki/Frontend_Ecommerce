import React, { useEffect, useState } from 'react';
import './Product_Details.css';
import { useParams } from 'react-router-dom';
import RatingsReviews from '../../Components/Ratings_&_Reviews/Ratings_&_Reviews.jsx';
import QNA from '../../Components/QNA/QNA.jsx';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts.jsx';
import TopSellignList from '../../Components/Top-Selling-List/Top_Sellign_List.jsx';

export default function Project_Details() {
    window.scrollTo(0, 0);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/getproductbyid/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const productData = await response.json();
                setProduct(productData);
                setSelectedImage(productData.product.photoproduct[0].photo_path); // Set initial selected image
            } catch (error) {
                console.error('Failed to fetch product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    function changeImage(src) {
        setSelectedImage(src); // Update the selected image state
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

    return (
        <div>
            <section className="py-5 pt-2">
                <div className="container mx-auto">
                    <div className="flex flex-wrap ProductDetails py-5">
                        <aside className="w-full lg:w-5/12 px-4 mb-4 lg:mb-0">
                            <div className="ProductImgSticky flex lg:flex-row">
                                <div className="flex flex-col gap-4 py-4 justify-start overflow-y-auto ProductIMGList">
                                    {product.product.photoproduct?.map((photo, index) => (
                                        <img
                                            key={index}
                                            src={photo.photo_path}
                                            alt={`${product.product.title} - ${index + 1}`}
                                            className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300 ${selectedImage === photo.photo_path ? 'border-2 border-blue-500 opacity-100' : ''}`}
                                            onClick={() => changeImage(photo.photo_path)}
                                        />
                                    ))}
                                </div>
                                <div className="d-flex w-full">
                                    <div className="ProductIMG w-full rounded-lg shadow-md ml-4">
                                        <img
                                            id="mainImage"
                                            src={selectedImage}
                                            alt={product.product.title}
                                            onClick={openModal}
                                            className="cursor-pointer zoom-effect" // Add zoom-effect class here
                                        />
                                    </div>
                                    <ul className="flex flex-wrap">
                                        <li className="w-1/2 p-2">
                                            <button className="flex items-center justify-center w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded shadow transition duration-300">
                                                <svg className="mr-2" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="currentColor"></path>
                                                </svg>
                                                Add to Cart
                                            </button>
                                        </li>

                                        <li className="w-1/2 p-2 flex">
                                            <form className="w-full">
                                                <button className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded shadow transition duration-300" type="button">
                                                    Buy Now
                                                </button>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                        <main className="w-full lg:w-7/12 px-4 text-left">
                            <div>
                                <h4 className='productTitle'>
                                    {product.product.title}
                                </h4>
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="flex items-center stars">
                                        {product.stars}
                                        {[...Array(product.stars)].map((_, index) => (
                                            <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="size-6">
                                                <path fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className='rw'><span>4,733 Ratings&nbsp;</span><span class="hG7V+4">&amp;</span><span>&nbsp;552
                                        Reviews</span></span>
                                    <span className="text-green-500 text-sm">{product.product.stock} stock</span>
                                </div>
                                <div className="flex items-center mb-3">
                                    <div class="text-sm"><span>Special price</span></div>
                                </div>
                                <div class="flex flex-col items-start space-y-2">
                                    <div class="flex items-center space-x-2">
                                        <div class="text-lg font-medium text-gray-800">₹{product.product.price}</div>
                                        <div class="line-through text-sm text-gray-400 px-1">₹{product.product.purchase_price}</div>
                                        <div class="text-green-500 text-xs font-semibold">
                                            <span>56% off</span>
                                        </div>
                                        <span className='px-2 text-sm'>i</span>
                                    </div>
                                </div>
                                <div class="w-full p-4 border-gray-200">
                                    <div class="text-lg font-semibold text-gray-800 mb-2">Available offers</div>

                                    <div class="space-y-3">
                                        <div class="flex items-center space-x-2 text-xs">
                                            <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                width="18" height="18" alt="icon" class="w-4 h-4" />
                                            <span class="font-semibold text-gray-700 pr-2 pl-3">Special Price</span>
                                            <span class="ml-1 text-gray-600 pr-2">Get extra 39% off (price inclusive of cashback/coupon)</span>
                                            <span class="text-blue-500 text-xs cursor-pointer">T&amp;C</span>
                                        </div>

                                        <div class="flex items-center space-x-2 text-xs flex-wrap">
                                            <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                width="18" height="18" alt="icon" class="w-4 h-4" />
                                            <span class="font-semibold text-gray-700 pr-2 pl-3">Partner Offer</span>
                                            <span class="ml-1 text-gray-600 pr-2">Make a purchase and enjoy a surprise cashback/ coupon that you
                                                can redeem later!</span>
                                            <span class="text-blue-500 text-xs cursor-pointer mr-4">Know More</span>
                                        </div>

                                        <div class="flex items-center space-x-2 text-xs">
                                            <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                width="18" height="18" alt="icon" class="w-4 h-4" />
                                            <span class="font-semibold text-gray-700 pr-2 pl-3">Bank Offer</span>
                                            <span class="ml-1 text-gray-600 pr-2">5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span>
                                            <span class="text-blue-500 text-xs cursor-pointer">T&amp;C</span>
                                        </div>

                                        <div class="flex items-center space-x-2 text-xs">
                                            <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                width="18" height="18" alt="icon" class="w-4 h-4" />
                                            <span class="font-semibold text-gray-700 pr-2 pl-3">Bank Offer</span>
                                            <span class="ml-1 text-gray-600 pr-2">10% off up to ₹1,500 on SBI Credit Card Transactions of ₹4,990
                                                and above</span>
                                            <span class="text-blue-500 text-xs cursor-pointer">T&amp;C</span>
                                        </div>
                                    </div>

                                    <button class="mt-3 px-4 py-2 text-blue-600 text-sm font-medium rounded">
                                        View 5 more offers
                                    </button>
                                </div>
                                <div class="w-full flex items-center p-4 border-gray-200">
                                    <div class="text-lg font-semibold text-gray-800 text-sm">Warranty</div>
                                    <div class="text-gray-600 text-xs px-6">3 months - Domestic Warranty, 6 months - International Warranty
                                    </div>
                                </div>
                                <div className="w-full flex p-4 border-b border-gray-200">
                                    <div className="text-lg font-semibold text-gray-800 mb-2 text-sm">Delivery</div>
                                    <div className="flex flex-col px-4">
                                        <div className="flex items-center space-x-2 mb-4">
                                            <svg width="12" height="12" viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" className='mx-2'>
                                                <path fill="#2874f0"
                                                    d="M4.2 5.7c-.828 0-1.5-.672-1.5-1.5 0-.398.158-.78.44-1.06.28-.282.662-.44 1.06-.44.828 0 1.5.672 1.5 1.5 0 .398-.158.78-.44 1.06-.28.282-.662.44-1.06.44zm0-5.7C1.88 0 0 1.88 0 4.2 0 7.35 4.2 12 4.2 12s4.2-4.65 4.2-7.8C8.4 1.88 6.52 0 4.2 0z" />
                                            </svg>
                                            <form autoComplete="off" className="flex">
                                                <input className="border rounded-md px-2 py-1" placeholder="Enter Delivery Pincode" type="text"
                                                    maxLength="6" />
                                            </form>
                                            <button className="text-blue-500 ml-2 px-2 text-sm font-medium">Check</button>
                                        </div>
                                        <div className="text-gray-600 text-left space-y-2 px-4">
                                            <div className='text-sm font-medium flex items-center'>
                                                <span className="text-xs">Delivery by:</span> 3 Nov, Sunday <span className="ml-2 flex">| Free
                                                    <p className='line-through px-1 text-sm font-medium'>₹40</p></span>
                                            </div>
                                            <div className='text-sm font-medium'>
                                                <span className="text-xs">Installation & Demo by:</span> 2 Nov, Saturday | ₹498
                                            </div>
                                        </div>
                                        <button className="text-blue-500 text-left px-4 mt-2 font-medium text-sm">View Details</button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap py-6">
                                    <div className="w-full md:w-1/2">
                                        <div className='flex text-sm'>
                                            <h2 className="font-semibold mb-2 text-sm text-neutral-800">Highlights</h2>
                                            <ul className="list-disc list-inside px-4 text-xs leading-6">
                                                <li>Single-phase Water Pump</li>
                                                <li>In-built Thermal Overload Protector</li>
                                                <li>Power Rating: 0.018 kW</li>
                                                <li>Power Supply: 165V-230V/50HZ</li>
                                                <li>Motor Power: 1.2 hp</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2">
                                        <div className='flex text-sm'>
                                            <h2 className="font-semibold mb-2 text-sm text-neutral-800">Services</h2>
                                            <ul className="list-disc list-inside px-4 text-xs leading-6">
                                                <li className="flex items-center">
                                                    <div className="w-4 h-4 bg-blue-500 mr-2 rounded-full"></div>
                                                    <span>3 months- Domestic Warranty, 6 months- International Warranty</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-4 h-4 bg-green-500 mr-2 rounded-full"></div>
                                                    <span>Cash on Delivery available <span
                                                        className="text-blue-500 cursor-pointer ml-1">?</span></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="lg:w-7/12">
                                        <h2 className="font-semibold text-sm">Important Note</h2>
                                    </div>
                                    <div className="lg:w-7/12 text-xs">
                                        <p>For multicolor products, please check the image for colour details before purchasing.</p>
                                    </div>
                                </div>

                                <div className="flex my-4">
                                    <div className="lg:w-7/12">
                                        <h2 className="font-semibold text-sm">Seller</h2>
                                    </div>
                                    <div className="lg:w-7/12 text-xs">
                                        <p>DelhiRetailShop <span className='bg-blue-600 text-white p-1 rounded text-xs'>3.9</span> </p>
                                    </div>
                                </div>

                                <div className="space-y-6">


                                    <div className="w-full px-4">
                                        <div className="text-lg font-semibold mb-2"></div>
                                        <div>
                                            <div className="mt-2">
                                                <ul className="list-none">
                                                    <li className="flex items-center">
                                                        <span className="text-sm font-medium">7 days return policy</span>
                                                        <div className="ml-1 text-gray-500">(?)</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-2">
                                                <a href="/sellers?pid=WPMFCHEZ768YASJ4" className="text-blue-600 hover:underline text-sm">
                                                    See other sellers
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full p-4 border rounded-lg bg-gray-100">
                                        <h2 className="text-lg font-semibold">Description</h2>
                                        <p className="mt-2 text-sm text-gray-700">
                                            <span className="text-sm" dangerouslySetInnerHTML={{ __html: product.product.description }} />
                                        </p>
                                        <button className="text-blue-600 mt-2 hover:underline">Read More</button>
                                    </div>

                                    <div className="w-full p-4 border rounded-lg bg-gray-100 space-y-6">

                                        <div className="flex space-x-4">
                                            <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/icons/original-WPMFCHEZ768YASJ4_1.jpg"
                                                alt="Multipurpose Performance" className="w-20 h-20" />
                                            <div>
                                                <h3 className="text-md font-semibold">Multipurpose Performance</h3>
                                                <p className="text-sm text-gray-700 mt-1">
                                                    Built with versatility in mind, this water cooler pump excels in various applications, such
                                                    as
                                                    decorative fountains, ponds, aquariums, and hydroponic setups, delivering consistent
                                                    performance.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex space-x-4">
                                            <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/icons/original-WPMFCHEZ768YASJ4_2.jpg"
                                                alt="High Performance" className="w-20 h-20" />
                                            <div>
                                                <h3 className="text-md font-semibold">High Performance</h3>
                                                <p className="text-sm text-gray-700 mt-1">
                                                    This high-performance water cooler pump ensures efficient cooling with a flow rate up to
                                                    1.85m and
                                                    noiseless operation, making it versatile and energy-saving.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex space-x-4">
                                            <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/icons/original-WPMFCHEZ768YASJ4_3.jpg"
                                                alt="Easy Maintenance and Cleaning" className="w-20 h-20" />
                                            <div>
                                                <h3 className="text-md font-semibold">Easy Maintenance and Cleaning</h3>
                                                <p className="text-sm text-gray-700 mt-1">
                                                    Designed for user-friendliness, this pump is easy to clean and maintain, ensuring optimal
                                                    performance
                                                    with minimal hassle.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex space-x-4">
                                            <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/icons/original-WPMFCHEZ768YASJ4_4.jpg"
                                                alt="Convenient Features" className="w-20 h-20" />
                                            <div>
                                                <h3 className="text-md font-semibold">Convenient Features</h3>
                                                <p className="text-sm text-gray-700 mt-1">
                                                    This fully submersible pump is energy-efficient, with a durable ABS body, suitable for
                                                    various
                                                    applications and long-lasting performance.
                                                </p>
                                            </div>
                                        </div>

                                        <button className="text-blue-600 mt-2 hover:underline">View all features</button>
                                    </div>
                                </div>
                                <div class="p-4 w-full">
                                    <div class="bg-gray-50 shadow-md rounded-lg p-4">
                                        <div class="text-lg font-semibold text-gray-800">Specifications</div>

                                        <div class="mt-4">
                                            <div class="bg-white p-4 rounded-md shadow-sm mb-4">
                                                <div class="text-md font-medium text-gray-700">In The Box</div>
                                                <table class="w-full mt-2 text-gray-600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="py-2">
                                                                <ul class="list-disc pl-5">
                                                                    <li>1 Water cooler pump & 1 Nozzle</li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="bg-white p-4 rounded-md shadow-sm mb-4">
                                                <div class="text-md font-medium text-gray-700">General</div>
                                                <table class="w-full mt-2 text-gray-600">
                                                    <tbody>
                                                        <tr class="flex">
                                                            <td class="w-1/4 font-semibold">Brand</td>
                                                            <td class="w-3/4">
                                                                <ul class="list-disc pl-5">
                                                                    <li>Aksha Gold</li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr class="flex">
                                                            <td class="w-1/4 font-semibold">Model Name</td>
                                                            <td class="w-3/4">
                                                                <ul class="list-disc pl-5">
                                                                    <li>Computer Tested Dynamically Balanced 18 Watt Multipurpose Water Cooler
                                                                        Pump...</li>
                                                                </ul>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="bg-white p-4 rounded-md shadow-sm mb-4">
                                                <div class="text-md font-medium text-gray-700">Power Features</div>
                                                <table class="w-full mt-2 text-gray-600">
                                                    <tbody>
                                                        <tr class="flex">
                                                            <td class="w-1/4 font-semibold">Phase</td>
                                                            <td class="w-3/4">
                                                                <ul class="list-disc pl-5">
                                                                    <li>Single-phase</li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr class="flex">
                                                            <td class="w-1/4 font-semibold">Thermal Over Load Protector</td>
                                                            <td class="w-3/4">
                                                                <ul class="list-disc pl-5">
                                                                    <li>Yes</li>
                                                                </ul>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="bg-white p-4 rounded-md shadow-sm mb-4">
                                                <div class="text-md font-medium text-gray-700">Additional Features</div>
                                                <table class="w-full mt-2 text-gray-600">
                                                    <tbody>
                                                        <tr class="flex">
                                                            <td class="w-1/4 font-semibold">Corrosion Resistant</td>
                                                            <td class="w-3/4">
                                                                <ul class="list-disc pl-5">
                                                                    <li>Yes</li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr class="flex">
                                                            <td class="w-1/4 font-semibold">Other Features</td>
                                                            <td class="w-3/4">
                                                                <ul class="list-disc pl-5">
                                                                    <li>Fully Submersible, No Rusting &amp; No Jamming, Operates Well At Low
                                                                        Voltage...</li>
                                                                </ul>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="bg-white p-4 rounded-md shadow-sm mb-4">
                                                <div class="text-md font-medium text-gray-700">Dimensions</div>
                                                <table class="w-full mt-2 text-gray-600">
                                                    <tbody>
                                                        <tr class="flex">
                                                            <td class="w-1/4 font-semibold">Width</td>
                                                            <td class="w-3/4">
                                                                <ul class="list-disc pl-5">
                                                                    <li>7.6 cm</li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr class="flex">
                                                            <td class="w-1/4 font-semibold">Height</td>
                                                            <td class="w-3/4">
                                                                <ul class="list-disc pl-5">
                                                                    <li>8.2 cm</li>
                                                                </ul>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="bg-white p-4 rounded-md shadow-sm mb-4">
                                                <div class="text-md font-medium text-gray-700">Warranty</div>
                                                <table class="w-full mt-2 text-gray-600">
                                                    <tbody>
                                                        <tr class="flex">
                                                            <td class="w-1/4 font-semibold">Warranty Summary</td>
                                                            <td class="w-3/4">
                                                                <ul class="list-disc pl-5">
                                                                    <li>3 months- Domestic Warranty, 6 months- International Warranty</li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr class="flex">
                                                            <td class="w-1/4 font-semibold">Service Type</td>
                                                            <td class="w-3/4">
                                                                <ul class="list-disc pl-5">
                                                                    <li>Contact To Seller</li>
                                                                </ul>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <button class="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Read
                                            More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 mb-3 bg-white rounded overflow-hidden ms-0 mx-3">
                                <RatingsReviews />
                            </div>
                            <QNA />
                        </main>
                    </div>
                </div>
            </section>
            <div className="flex mt-5 flex-wrap product-desc-tab">
                <div className="w-full md:w-1/3">
                    <div className="rounded seller-top-products-box bg-white sidebar-box mx-3 p-4 mb-3">
                        <h6 className='text-xm font-semibold'>Top Selling Products From This Seller</h6>
                        <TopSellignList />
                    </div>
                </div>
                <div className="w-full md:w-2/3"></div>
            </div>
            <RelatedProducts />
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="ModalImages relative bg-white rounded-lg overflow-hidden w-auto max-w-3xl">
                        <button
                            className="absolute w-10 top-2 right-2 text-white bg-red-600 p-2 rounded-full focus:outline-none"
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <button
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                            onClick={prevImage}
                        >
                            &#10094;
                        </button>
                        <img
                            src={productImages[currentImageIndex]}
                            alt="Product Image"
                            className="w-full h-auto"
                        />
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                            onClick={nextImage}
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
