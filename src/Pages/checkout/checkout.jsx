import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import './checkout.css'
import axios from 'axios';
import { UserContext } from "../../UserContext.jsx";

export default function checkout () {
  const { userStatus, loading } = useContext(UserContext);

  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    cardHolder: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    billingAddress: '',
    billingState: '',
    billingZip: ''
  });
  if (!userStatus) {
    return   navigate("/");;
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data
    // Integrate with payment gateway
    try {
      // Example: await axios.post(`${apiUrl}/process-payment`, formData);
      // On success, navigate to a success page
      navigate('/success');
    } catch (error) {
      // Handle errors
      console.error('Payment failed', error);
    }
  };

  return (
    <div className='bg-white text-left checkout'>
      <div class='flex sm:flex-row flex-col items-center bg-white sm:px-10 py-4 border-b'>
        <div class='mt-4 sm:mt-0 sm:ml-auto py-2 text-xs sm:text-base'>
          <div class='relative'>
            <ul class='relative flex justify-between items-center space-x-2 sm:space-x-4 w-full'>
              <li class='flex items-center space-x-3 sm:space-x-4 px-3 text-left'>
                <a
                  class='flex justify-center items-center bg-emerald-200 rounded-full w-6 h-6 font-semibold text-emerald-700 text-xs'
                  href='#'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </a>
                <span class='font-semibold text-gray-900'>Shop</span>
              </li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-4 h-4 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
              <li class='flex items-center space-x-3 sm:space-x-4 px-3 text-left'>
                <a
                  class='flex justify-center items-center bg-gray-600 rounded-full ring ring-gray-600 ring-offset-2 w-6 h-6 font-semibold text-white text-xs'
                  href='#'
                >
                  2
                </a>
                <span class='font-semibold text-gray-900'>Shipping</span>
              </li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-4 h-4 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
              <li class='flex items-center space-x-3 sm:space-x-4 px-3 text-left'>
                <a
                  class='flex justify-center items-center bg-gray-400 rounded-full w-6 h-6 font-semibold text-white text-xs'
                  href='#'
                >
                  3
                </a>
                <span class='font-semibold text-gray-500'>Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class='grid lg:grid-cols-2 sm:px-10'>
        <div class='px-4 pt-8'>
          <p class='font-medium text-xl'>Order Summary</p>
          <p class='text-gray-400'>
            Check your items. And select a suitable shipping method.
          </p>
          <div class='space-y-3 bg-white mt-8 px-2 sm:px-6 py-4 border rounded-lg'>
            <div class='flex sm:flex-row flex-col bg-white rounded-lg'>
              <img
                class='m-2 border rounded-md w-28 h-24 object-center object-cover'
                src='https://admin.siyabling.com/storage/photos/1/jVx4MDQxaJGT6DBZYNNn9HY3hKNlArIHs6tAZnLD.jpg'
                alt=''
              />
              <div class='flex flex-col px-4 py-4 w-full'>
                <span class='font-semibold'>
                  Heavy Duty 7HP Power Tiller Cultivator Weeder Petrol Recoil
                </span>
                <span class='float-right text-gray-400'>Heigh Power</span>
                <p class='font-bold text-lg'>₹138.99</p>
              </div>
            </div>
            <div class='flex sm:flex-row flex-col bg-white rounded-lg'>
              <img
                class='m-2 border rounded-md w-28 h-24 object-center object-cover'
                src='https://admin.siyabling.com/public/storage/photos/1/Category/HgKWD2n8ej5TLTOEaHAkkFf9JMayuTXwhCaGxIEe.jpeg'
                alt=''
              />
              <div class='flex flex-col px-4 py-4 w-full'>
                <span class='font-semibold'>
                  Aspee Battery Sprayer 12V 12A 16 Litres
                </span>
                <span class='float-right text-gray-400'>Inhouse product</span>
                <p class='mt-auto font-bold text-lg'>₹2000.00</p>
              </div>
            </div>
          </div>
        </div>
        <div class='bg-gray-50 mt-10 lg:mt-0 px-4 pt-8'>
          <p class='font-medium text-xl'>Payment Details</p>
          <p class='text-gray-400'>
            Complete your order by providing your payment details.
          </p>
          <form onSubmit={handleSubmit}>
            <label for='email' class='block mt-4 mb-2 font-medium text-sm'>
              Email
            </label>
            <div class='relative'>
              <input
                type='text'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                class='focus:z-10 border-gray-200 shadow-sm px-4 py-3 pl-11 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm outline-none'
                placeholder='your.email@gmail.com'
              />
              <div class='inline-flex left-0 absolute inset-y-0 items-center px-3 pointer-events-none'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-4 h-4 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
              </div>
            </div>
            <label
              for='card-holder'
              class='block mt-4 mb-2 font-medium text-sm'
            >
              Card Holder
            </label>
            <div class='relative'>
              <input
                type='text'
                id='card-holder'
                name='card-holder'
                value={formData.cardHolder}
                onChange={handleInputChange}
                class='focus:z-10 border-gray-200 shadow-sm px-4 py-3 pl-11 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm uppercase outline-none'
                placeholder='Your full name here'
              />
              <div class='inline-flex left-0 absolute inset-y-0 items-center px-3 pointer-events-none'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-4 h-4 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z'
                  />
                </svg>
              </div>
            </div>
            <label for='card-no' class='block mt-4 mb-2 font-medium text-sm'>
              Card Details
            </label>
            <div class='flex'>
              <div class='relative flex-shrink-0 w-7/12'>
                <input
                  type='text'
                  id='card-no'
                  name='card-no'
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  class='focus:z-10 border-gray-200 shadow-sm px-2 py-3 pl-11 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm outline-none'
                  placeholder='xxxx-xxxx-xxxx-xxxx'
                />
                <div class='inline-flex left-0 absolute inset-y-0 items-center px-3 pointer-events-none'>
                  <svg
                    class='w-4 h-4 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z' />
                    <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z' />
                  </svg>
                </div>
              </div>
              <input
                type='text'
                name='credit-expiry'
                value={formData.expiry}
                onChange={handleInputChange}
                class='focus:z-10 border-gray-200 shadow-sm px-2 py-3 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm outline-none'
                placeholder='MM/YY'
              />
              <input
                type='text'
                name='credit-cvc'
                value={formData.cvc}
                onChange={handleInputChange}
                class='focus:z-10 flex-shrink-0 border-gray-200 shadow-sm px-2 py-3 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-1/6 text-sm outline-none'
                placeholder='CVC'
              />
            </div>
            <label
              for='billing-address'
              class='block mt-4 mb-2 font-medium text-sm'
            >
              Billing Address
            </label>
            <div class='flex sm:flex-row flex-col'>
              <div class='relative flex-shrink-0 sm:w-7/12'>
                <input
                  type='text'
                  id='billing-address'
                  name='billing-address'
                  value={formData.billingAddress}
                  onChange={handleInputChange}
                  class='focus:z-10 border-gray-200 shadow-sm px-4 py-3 pl-11 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm outline-none'
                  placeholder='Street Address'
                />
                <div class='inline-flex left-0 absolute inset-y-0 items-center px-3 pointer-events-none'>
                  <img
                    class='w-4 h-4 object-contain'
                    src='https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg'
                    alt=''
                  />
                </div>
              </div>
              <select
                type='text'
                name='billing-state'
                value={formData.billingState}
                onChange={handleInputChange}
                class='focus:z-10 border-gray-200 shadow-sm px-4 py-3 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full text-sm outline-none'
              >
                <option value='State'>State</option>
              </select>
              <input
                type='text'
                name='billing-zip'
                value={formData.billingZip}
                onChange={handleInputChange}
                class='focus:z-10 flex-shrink-0 border-gray-200 shadow-sm px-4 py-3 border focus:border-blue-500 rounded-md focus:ring-blue-500 sm:w-1/6 text-sm outline-none'
                placeholder='ZIP'
              />
            </div>

            <div class='mt-6 py-2 border-t border-b'>
              <div class='flex justify-between items-center'>
                <p class='font-medium text-gray-900 text-sm'>Subtotal</p>
                <p class='font-semibold text-gray-900'>₹399.00</p>
              </div>
              <div class='flex justify-between items-center'>
                <p class='font-medium text-gray-900 text-sm'>Shipping</p>
                <p class='font-semibold text-gray-900'>₹8.00</p>
              </div>
            </div>
            <div class='flex justify-between items-center mt-6'>
              <p class='font-medium text-gray-900 text-sm'>Total</p>
              <p class='font-semibold text-2xl text-gray-900'>₹408.00</p>
            </div>
            <button type='submit' className='bg-gray-900 mt-4 mb-8 px-6 py-3 rounded-md w-full font-medium text-white'>
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
