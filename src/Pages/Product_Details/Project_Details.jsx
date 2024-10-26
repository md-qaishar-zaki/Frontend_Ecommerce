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
                        <aside className=" w-full lg:w-5/12 px-4 mb-4 lg:mb-0">
                            <div className="ProductImgSticky flex lg:flex-row">
                                <div className="flex flex-col gap-4 py-4 justify-start overflow-y-auto ProductIMGList">
                                    {product.product.photoproduct?.map((photo, index) => (
                                        <img
                                            key={index}
                                            src={photo.photo_path}
                                            alt={`${product.product.title} - ${index + 1}`}
                                            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                            onClick={() => changeImage(photo.photo_path)}
                                        />
                                    ))}
                                </div>
                                <div className="d-flex w-full">
                                    <div className="ProductIMG w-full rounded-lg shadow-md ml-4">
                                        <img
                                            id="mainImage"
                                            src={product.product.photoproduct?.[0]?.photo_path}
                                            alt={product.product.title}
                                            onClick={openModal}
                                            className="cursor-pointer"
                                        />
                                    </div>
                                    <ul class="flex flex-wrap">
                                        <li class="w-1/2 p-2">
                                            <button class="flex items-center justify-center w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded shadow transition duration-300">
                                                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="currentColor"></path>
                                                </svg>
                                                Add to Cart
                                            </button>
                                        </li>

                                        <li class="w-1/2 p-2 flex">
                                            <form class="w-full">
                                                <button class="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded shadow transition duration-300" type="button">
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
                                            <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className='rw'><span>4,733 Ratings&nbsp;</span><span class="hG7V+4">&amp;</span><span>&nbsp;552 Reviews</span></span>
                                    <span className="text-green-500">{product.product.stock} stock</span>
                                </div>
                                <hr className="my-4" />
                                <div className="flex items-center mb-3">
                                    <span className="text-gray-500">Sold by:</span>
                                    <span className="ml-2 font-semibold">Inhouse product</span>
                                    <img className="ml-4 h-6" src="https://cdn.freelogovectors.net/wp-content/uploads/2020/09/crompton-logo.png" alt="HONDA" />
                                </div>
                                <hr className="my-4" />
                                <div className="text-xl text-gray-800 mb-3">
                                    <table className="table-auto text-sm border-separate border-spacing-2">
                                        <tbody>
                                            <tr>
                                                <td>Price:</td>
                                                <td><del>₹{product.product.price}</del></td>
                                            </tr>
                                            <tr>
                                                <td>Discount Price:</td>
                                                <td className='Price'>₹{product.product.purchase_price}</td>
                                            </tr>
                                            <tr>
                                                <td>SKU:</td>
                                                <td>{product.product.sku}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    {product.Description}
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className='w-24'>
                                        <label className="block mb-2 text-gray-600">Quantity</label>
                                        <div className="flex items-center border bg-white border-gray-300 rounded-md">
                                            <button className="px-3 py-2 text-gray-600"><i className="fa fa-minus"></i></button>
                                            <input type="text" className="w-12 text-center border-l border-r border-gray-300" value="1" readOnly />
                                            <button className="px-3 py-2 text-gray-600"><i className="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-1 flex flex-col md:flex-row mb-3">
                                    <div className="flex items-center media_box flex-col space-x-2 mb-4 md:mb-0">
                                        <img src="https://yantratools.com/public/uploads/easy-return.png" className="w-6 h-6" alt="7 Days Returnable" />
                                        <p className="text-sm text-gray-600">7 Days Returnable</p>
                                    </div>
                                    <div className="flex items-center media_box flex-col space-x-2 mb-4 md:mb-0">
                                        <img src="https://yantratools.com/public/uploads/cod.png" className="w-6 h-6" alt="Pay on Delivery" />
                                        <p className="text-sm text-gray-600">Pay on Delivery</p>
                                    </div>
                                    <div className="flex items-center media_box flex-col space-x-2 mb-4 md:mb-0">
                                        <img src="https://yantratools.com/public/uploads/delivered.png" className="w-6 h-6" alt="Free Shipping" />
                                        <p className="text-sm text-gray-600">Free Shipping</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" bg-white rounded overflow-hidden ms-0 mx-3">
                                <div className="tabs">
                                    <ul className="flex justify-center sticky p-3 border-b-2 bg-white">
                                        <li className="nav-item">
                                            <a href="#tab_default_1" className="nav-link text-uppercase font-semibold active show">Description</a>
                                        </li>
                                    </ul>

                                    <div className="tab-content pt-0">
                                        <div className="tab-pane active show" id="tab_default_1">
                                            <div className="py-2 px-4">
                                                <div className="flex flex-wrap">
                                                    <div className="w-full">
                                                        <div className="overflow-hidden aiz-product-description">
                                                            <div className="product_content">
                                                                <p>
                                                                    <b>
                                                                        <span className="text-sm" dangerouslySetInnerHTML={{ __html: product.product.description }} />
                                                                    </b>
                                                                </p>
                                                                <p>
                                                                    <b>
                                                                        <span className="text-sm" dangerouslySetInnerHTML={{ __html: product.product.meta_title }} />
                                                                    </b>
                                                                </p>
                                                                <ul className="list-disc pl-5">
                                                                    <li>
                                                                        <span className="text-sm" dangerouslySetInnerHTML={{ __html: product.product.meta_description }} />
                                                                    </li>
                                                                </ul>
                                                                <p>
                                                                    <b>
                                                                        <span className="text-sm">Features:</span>
                                                                    </b>
                                                                </p>
                                                                <ul className="list-disc pl-5">
                                                                    <li>
                                                                        <strong>
                                                                            <span className="text-sm">Three 32-Liter Bins:</span>
                                                                        </strong>{" "}
                                                                        Ideal for sorting and collecting different types of bio-medical waste.
                                                                    </li>
                                                                    <li>
                                                                        <strong>
                                                                            <span className="text-sm">Durable Construction:</span>
                                                                        </strong>{" "}
                                                                        Made from high-quality, easy-to-clean materials that resist odors and stains.
                                                                    </li>
                                                                    <li>
                                                                        <strong>
                                                                            <span className="text-sm">Secure Frame:</span>
                                                                        </strong>{" "}
                                                                        Provides stability and makes moving the bins hassle-free, ensuring safe and efficient waste management.
                                                                    </li>
                                                                </ul>
                                                                <p>
                                                                    <b>
                                                                        <span className="text-sm">Description:</span>
                                                                    </b>
                                                                </p>
                                                                <p>
                                                                    <span className="text-sm" dangerouslySetInnerHTML={{ __html: product.product.description }} />
                                                                </p>
                                                                <div>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
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
                    <div className=" rounded seller-top-products-box bg-white sidebar-box mx-3 p-4 mb-3">
                        <h6 className='text-xm font-semibold'>Top Selling Products From This Seller</h6>
                        <TopSellignList />
                    </div>
                </div>
                <div className="w-full md:w-2/3">

                </div>
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
