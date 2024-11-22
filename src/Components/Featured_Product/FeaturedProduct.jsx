import React, { useState, useEffect } from 'react'
import './FeaturedProduct.css'
import Button from '../Button.jsx'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useNavigate } from 'react-router-dom'

export default function FeaturedProduct ({featuredProduct}) {

  const navigate = useNavigate()

  // css for slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  // for page navigation
  const handleProductClick = id => {
    navigate(`/product/${id}`) // Navigate to product details page
  }

  return (
    <>
      <div className='flex justify-between mb-4 px-4 section-title'>
        <h4 className='font-bold text-xl'>Feature Product</h4>
        <Button Name={'View More'} />
      </div>
      <div className='m-auto container-fluid productSlider'>
        <div className='w-full carousel-container'>
          <Slider {...settings}>
            {featuredProduct.length >= 3
              ? featuredProduct.map(product => (
                  <div className='px-2 w-1/5' key={product.id}>
                    <div
                      className='product-card'
                      onClick={() => handleProductClick(product.slug)}
                    >
                      <div className='product-card__image'>
                        <img
                          src={
                            product.photoproduct?.[0]?.photo_path ||
                            '/placeholder-image.jpg'
                          }
                          alt={product.title || 'Product'}
                        />
                      </div>
                      <div className='product-card__info'>
                        <h2 className='line-clamp-2 product-card__title'>
                          {product.title}
                        </h2>
                        <div className='product-card__price-row'>
                          <span className='product-card__price'>
                            ₹{product.price}.00
                          </span>
                          <button className='product-card__btn'>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : // Renders nothing if there are fewer than 3 products
                null}
          </Slider>
        </div>
      </div>
    </>
  )
}
