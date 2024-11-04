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
                                            className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer hover:opacity-100 transition duration-300 ${selectedImage === photo.photo_path ? 'border-2 border-blue-500 opacity-100' : ''}`}
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
                                        <div class="text-lg font-medium text-gray-800 rupes">₹{product.product.purchase_price}</div>
                                        <div class="line-through text-sm text-gray-400 px-1 rupes">₹{product.product.price}</div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="w-full">
                                        <div className="text-lg font-semibold mb-2"></div>
                                        <div>
                                            <div className="mt-2">
                                                <div class="mt-1 flex flex-wrap gap-4">
                                                    <div class="flex flex-col items-center space-x-2 DeliveryDetails">
                                                        <img src={Returnable} alt="7 Days Returnable" width="26" height="26" />
                                                            <p class="text-sm font-medium">7 Days Returnable</p>
                                                    </div>
                                                    <div class="flex flex-col items-center space-x-2 DeliveryDetails">
                                                        <img src={Pay} alt="Pay on Delivery" width="26" height="26" />
                                                            <p class="text-sm font-medium">Pay on Delivery</p>
                                                    </div>
                                                    <div class="flex flex-col items-center space-x-2 DeliveryDetails">
                                                        <img src={Quality} alt="100% Quality Assurance" width="26" height="26" />
                                                            <p class="text-sm font-medium">100% Quality Assurance</p>
                                                    </div>
                                                    <div class="flex flex-col items-center space-x-2 DeliveryDetails">
                                                        <img src={Delivery} alt="Trusted Delivery" width="26" height="26" />
                                                            <p class="text-sm font-medium">Trusted Delivery</p>
                                                    </div>
                                                </div>

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
                                                <h3 className="text-base font-semibold">Multipurpose Performance</h3>
                                                <p className="text-xs text-gray-700 mt-1">
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
                                                <h3 className="text-base font-semibold">High Performance</h3>
                                                <p className="text-xs text-gray-700 mt-1">
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
                                                <h3 className="text-base font-semibold">Easy Maintenance and Cleaning</h3>
                                                <p className="text-xs text-gray-700 mt-1">
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
                                                <h3 className="text-base font-semibold">Convenient Features</h3>
                                                <p className="text-xs text-gray-700 mt-1">
                                                    This fully submersible pump is energy-efficient, with a durable ABS body, suitable for
                                                    various
                                                    applications and long-lasting performance.
                                                </p>
                                            </div>
                                        </div>

                                        <button className="text-blue-600 mt-2 hover:underline font-base">View all features</button>
                                    </div>
                                </div>
                                <div className="Specifications">
                                    <h5>Specifications</h5>
                                    <h6>In The Box</h6>
                                    <p>1 Water cooler pump & 1 Nozzle</p>
                                    <h4>General</h4>
                                    <table>
                                        <tr>
                                            <td>Brand</td>
                                            <td>Aksha Gold</td>
                                        </tr>
                                        <tr>
                                            <td>Model Name</td>
                                            <td>Computer Tested Dynamically Balanced 18 Watt Multipurpose Water Cooler Pump Used For Aquarium, Desert Air Cooler, Fountain (1.2HP)</td>
                                        </tr>
                                        <tr>
                                            <td>Type</td>
                                            <td>Submersible</td>
                                        </tr>
                                        <tr>
                                            <td>Usage Type</td>
                                            <td>Domestic</td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
                                            <td>Multicolor</td>
                                        </tr>
                                        <tr>
                                            <td>Body Material</td>
                                            <td>Plastic</td>
                                        </tr>
                                        <tr>
                                            <td>Applications</td>
                                            <td>Desert Air Cooler, Aquarium, Water Fountain, For Washing, Hydroponic, Draining Water From Small Ponds</td>
                                        </tr>
                                        <tr>
                                            <td>Adjustable Speed</td>
                                            <td>No</td>
                                        </tr>
                                        <tr>
                                            <td>Battery Backup</td>
                                            <td>No</td>
                                        </tr>
                                        <tr>
                                            <td>Flow Rate</td>
                                            <td>30 Lpm</td>
                                        </tr>
                                        <tr>
                                            <td>Total Head</td>
                                            <td>1.8 m</td>
                                        </tr>
                                    </table>
                                    <h4>Power Features</h4>
                                    <table>
                                        <tr>
                                            <td>Phase</td>
                                            <td>Single-phase</td>
                                        </tr>
                                        <tr>
                                            <td>Thermal Over Load Protector</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>Power Supply</td>
                                            <td>165V-230V/50HZ</td>
                                        </tr>
                                        <tr>
                                            <td>Power Rating</td>
                                            <td>0.018 kW</td>
                                        </tr>
                                        <tr>
                                            <td>Motor Power</td>
                                            <td>1.2 hp</td>
                                        </tr>
                                        <tr>
                                            <td>Body Material</td>
                                            <td>Plastic</td>
                                        </tr>
                                        <tr>
                                            <td>Applications</td>
                                            <td>Desert Air Cooler, Aquarium, Water Fountain, For Washing, Hydroponic, Draining Water From Small Ponds</td>
                                        </tr>
                                        <tr>
                                            <td>Adjustable Speed</td>
                                            <td>No</td>
                                        </tr>
                                        <tr>
                                            <td>Battery Backup</td>
                                            <td>No</td>
                                        </tr>
                                        <tr>
                                            <td>Flow Rate</td>
                                            <td>30 Lpm</td>
                                        </tr>
                                        <tr>
                                            <td>Total Head</td>
                                            <td>1.8 m</td>
                                        </tr>
                                    </table>
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
