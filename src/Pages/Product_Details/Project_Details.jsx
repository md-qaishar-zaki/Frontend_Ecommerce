import React, { useEffect, useState, useRef,useContext } from 'react';
import './Product_Details.css';
import { useParams, useNavigate } from 'react-router-dom';
import RatingsReviews from '../../Components/Ratings_&_Reviews/Ratings_&_Reviews.jsx';
import Returnable from '../../assets/Categories Icon/return.png';
import Delivery from '../../assets/Categories Icon/fast-delivery.png';
import Quality from '../../assets/Categories Icon/quality.png';
import Pay from '../../assets/Categories Icon/indian-rupee.png';
import FeaturedProduct from '../../Components/Featured_Product/FeaturedProduct.jsx';
import { CartContext } from '../../CartContext';
import { UserContext } from '../../UserContext';
import Login from '../../Pages/Login/Login';

export default function Project_Details() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const apiUrl = import.meta.env.VITE_API_URL;
    const [value, setValue] = useState(1);
    const [AddFixed, setAddFixed] = useState(false);
    const scrollPosition = useRef(0);
    const [featuredProduct, setFeaturedProduct] = useState([]);
    const { addToCart } = useContext(CartContext);
    const { userStatus } = useContext(UserContext);
    const navigate = useNavigate();
    const [OTPModal, setOTPModal] = useState(false);

    function changeImage(src) {
        setSelectedImage(src);
        document.getElementById('mainImage').src = src;
    }

    useEffect(() => {
        // Fetch product data once `id` is available, and reset selected image
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

    useEffect(() => {
        const fetchFeaturedProduct = async () => {
          try {
            const response = await fetch(`${apiUrl}/api/getis_featuredproduct`);
            const data = await response.json();
            setFeaturedProduct(data.product.data);
          } catch (error) {
            console.error("Error fetching featured products:", error);
          }
        };
    
        fetchFeaturedProduct();
      }, [apiUrl]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 550 && scrollPosition.current <= 550) {
                setAddFixed(true);
            } else if (currentScrollY <= 550 && scrollPosition.current > 550) {
                setAddFixed(false);
            }
            scrollPosition.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const handleBuyNow = () => {
        if (userStatus) {
            navigate('/checkout');
        } else {
            setOTPModal(true);
        }
    };

    return (
        <div>
            <section className="py-5 pt-2">
                <div className="mx-auto mt-12 container">
                    <div className="flex flex-wrap py-5 ProductDetails">
                        <aside className="mb-4 lg:mb-0 px-4 w-full lg:w-5/12">
                            <div className="flex lg:flex-row ProductImgSticky">
                                <div className="flex flex-col ProductIMGListRow">
                                    {product.product[0].photoproduct?.map((photo, index) => (
                                        <div key={index} className={`ProductIMGList w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer hover:opacity-100 transition duration-300 ${selectedImage === photo.photo_path ? 'border-2 border-blue-500 opacity-100' : ''}`}>
                                            <img
                                                src={photo.photo_path}
                                                alt={`${product.product.title} - ${index + 1}`}
                                                onClick={() => changeImage(photo.photo_path)}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="d-flex w-full">
                                    <div className="shadow-md ml-4 rounded-lg w-full ProductIMG">
                                        <img
                                            id="mainImage"
                                            src={selectedImage}
                                            alt={product.product.title}
                                            onClick={openModal}
                                            className="zoom-effect cursor-pointer"
                                        />
                                    </div>
                                    <ul className="flex flex-wrap">
                                        <li className="p-2 w-1/2">
                                            <button  
                                             onClick={(event) => {
                                                event.stopPropagation(); // Prevents the click event from bubbling up
                                                addToCart(product.product[0].slug, value);
                                              }}  
                                             className="flex justify-center items-center shadow px-4 py-2 rounded w-full font-semibold transition duration-300 AddToCartBtn">
                                                <svg className="mr-2" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="currentColor"></path>
                                                </svg>
                                                Add to Cart
                                            </button>
                                        </li>

                                        <li className="flex p-2 w-1/2">
                                            <form className="w-full">
                                                <button 
                                                    onClick={handleBuyNow}
                                                    className="bg-green-500 hover:bg-green-600 shadow px-4 py-2 rounded w-full font-semibold text-white transition duration-300" 
                                                    type="button">
                                                    Buy Now
                                                </button>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                        <main className="px-4 w-full lg:w-7/12 text-left">
                            <div>
                                <h4 className='productTitle'>
                                    {product.product[0].title}
                                </h4>
                                <div className="flex items-center space-x-3 mt-2 mb-3">
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
                                    <span className='rw'><span>4,733 Ratings&nbsp;</span><span className="hG7V+4">&amp;</span><span>&nbsp;552
                                        Reviews</span></span>
                                    <span className="bg-green-500 px-2 py-1 rounded text-sm text-white text-xs">{product.product[0].stock} stock</span>
                                </div>
                                <div className="flex flex-col items-start space-y-2 ProdcutLabels">
                                    <div className="flex items-center space-x-2 w-full">
                                        <label htmlFor="">Sold by:</label>
                                        <label htmlFor="">Inhouse product</label>
                                        <img src=".." alt="" />
                                    </div>
                                    <div className="flex items-center space-x-2 w-full">
                                        <label htmlFor="">Price</label>
                                        <div className="text-gray-400 text-sm line-through rupes">₹{product.product[0].price}</div>
                                        <div className="pl-2 font-bold text-gray-800 text-xl rupes">₹{product.product[0].purchase_price}.00</div>
                                    </div>
                                    <div className="flex items-center space-x-2 w-full">
                                        <label htmlFor="">SKU:</label>
                                        <div className="font-medium text-gray-800 text-sm">{product.product[0].sku}</div>
                                    </div>
                                </div>
                                <div className="flex items-center my-4 w-100 ProdcutLabels">
                                    <label htmlFor="">Quantity:</label>
                                    <div className="qty-box">
                                        <span className="dec" onClick={onDecrement} onTouchStart={onDecrement}>–</span>
                                        <span className="qty">{value}</span>
                                        <span className="inc" onClick={onIncrement} onTouchStart={onIncrement}>+</span>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="w-full">
                                        <div className="mb-2 font-semibold text-lg"></div>
                                        <div>
                                            <div className="mt-4">
                                                <div className="flex flex-wrap gap-4 mt-1">
                                                    <div className="flex flex-col items-center space-x-2 DeliveryDetails">
                                                        <img src={Returnable} alt="7 Days Returnable" width="26" height="26" />
                                                        <p className="font-medium text-sm">7 Days Returnable</p>
                                                    </div>
                                                    <div className="flex flex-col items-center space-x-2 DeliveryDetails">
                                                        <img src={Pay} alt="Pay on Delivery" width="26" height="26" />
                                                        <p className="font-medium text-sm">Pay on Delivery</p>
                                                    </div>
                                                    <div className="flex flex-col items-center space-x-2 DeliveryDetails">
                                                        <img src={Quality} alt="100% Quality Assurance" width="26" height="26" />
                                                        <p className="font-medium text-sm">100% Quality Assurance</p>
                                                    </div>
                                                    <div className="flex flex-col items-center space-x-2 DeliveryDetails">
                                                        <img src={Delivery} alt="Trusted Delivery" width="26" height="26" />
                                                        <p className="font-medium text-sm">Trusted Delivery</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 w-full Description">
                                        <h2 className="font-semibold text-lg">Description</h2>
                                        <p className="mt-2 text-gray-700 text-sm">
                                            <span className="text-sm" dangerouslySetInnerHTML={{ __html: product.product[0].description }} />
                                        </p>
                                        <p className="mt-2 text-gray-700 text-sm">
                                            <span className="text-sm" dangerouslySetInnerHTML={{ __html: product.product[0].meta_description }} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white mx-3 mt-3 mb-3 rounded overflow-hidden ms-0">
                                <RatingsReviews />
                            </div>
                            {/* <QNA /> */}
                        </main>
                    </div>
                </div>
                <div className={`addToCardSide ${AddFixed ? 'addToCardSideFixed' : ''}`} >
                    <ul className="flex flex-wrap">
                        <li className="p-2 w-1/2">
                            <button 
                              onClick={(event) => {
                                event.stopPropagation(); // Prevents the click event from bubbling up
                                addToCart(product.product[0].slug, value);
                              }}  
                            className="flex justify-center items-center shadow px-4 py-2 rounded w-full font-semibold transition duration-300 AddToCartBtn">
                                <svg className="mr-2" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="currentColor"></path>
                                </svg>
                                Add to Cart
                            </button>
                        </li>

                        <li className="flex p-2 w-1/2">
                            <form className="w-full">
                                <button 
                                    onClick={handleBuyNow}
                                    className="bg-green-500 hover:bg-green-600 shadow px-4 py-2 rounded w-full font-semibold text-white transition duration-300" 
                                    type="button">
                                    Buy Now
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            </section>
            {featuredProduct.length >= 3 ? (
        <FeaturedProduct featuredProduct={featuredProduct} />
      ) : null}

            {isModalOpen && (
                <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
                    <div className="relative bg-white rounded-lg w-auto max-w-3xl overflow-hidden ModalImages">
                        <button
                            className="top-2 right-2 absolute bg-red-600 p-2 rounded-full w-10 text-white focus:outline-none"
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <button
                            className="top-1/2 left-2 absolute bg-gray-800 p-2 rounded-full text-white transform -translate-y-1/2"
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
                            className="top-1/2 right-2 absolute bg-gray-800 p-2 rounded-full text-white transform -translate-y-1/2"
                            onClick={nextImage}
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            )}
            {OTPModal && <Login onClick={() => setOTPModal(false)} />}
        </div>
    );
}
