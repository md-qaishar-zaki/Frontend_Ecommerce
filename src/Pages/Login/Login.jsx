import React, { useState } from 'react';

export default function Login({onClick }) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = useState('');


  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobile(value); 
      setError('');
    } else {
      setError('Only 10 digits are allowed.');
    }
  };

  const handleSubmit = async () => {
    if (mobile.length !== 10) {
      setError('Mobile number must be exactly 10 digits.');
      return;
    }
  
    try {
      setLoading(true);
      const response = await fetch('https://admin.siyabling.com/api/userlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile,
          password: '123456',
        }),
      });
  
      const data = await response.json();
      setLoading(false);
  
      if (response.ok && data.token) { 
        const token = data.token.includes('|') ? data.token.split('|')[1] : data.token; 
        localStorage.setItem('authToken', token);
  
        alert('Login successful!'); 
      } else {
        console.error('Error message from API:', data.message);
        setError(data.message || 'Login failed.');
      }
    } catch (error) {
      setLoading(false);
      setError('An error occurred. Please try again later.');
    }
  };  
  

  return (
    <div>
      <div className="flex flex-col justify-center py-6 sm:py-12 min-h-screen OTPModal">
        <div className="relative sm:mx-auto py-3 sm:max-w-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#38d0a8] to-[#005f4b] shadow-lg sm:rounded-3xl -skew-y-6 sm:skew-y-0 transform sm:-rotate-6"></div>
          <div className="relative bg-white shadow-lg px-4 py-10 sm:p-20 sm:rounded-3xl">
            <div className="mx-auto max-w-md">
              <div>
                <h1 className="font-semibold text-2xl">Login</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="space-y-4 py-8 text-base text-gray-700 sm:text-lg leading-6 sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="mobile"
                      name="mobile"
                      type="text"
                      value={mobile}
                      onChange={handleInputChange}
                      className="border-gray-300 border-b-2 w-full h-10 text-gray-900 peer placeholder-transparent focus:outline-none focus:border-rose-600"
                      placeholder="Mobile number"
                    />
                    <label
                      htmlFor="mobile"
                      className="-top-3.5 peer-focus:-top-3.5 peer-placeholder-shown:top-2 left-0 absolute text-gray-600 text-sm peer-focus:text-sm peer-focus:text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 transition-all"
                    >
                      Enter Your Mobile No
                    </label>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                  </div>
                  <div className="relative">
                    <button 
                      onClick={handleSubmit}
                      disabled={loading}
                      className="bg-[#007c5b] hover:bg-[#005f4b] px-4 py-2 rounded-md text-white transition"
                    >
                      {loading ? 'Loading...' : 'Send OTP'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full" onClick={onClick}>
              <button className="flex items-center border-gray-300 bg-white hover:bg-gray-200 shadow-md px-6 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium text-gray-800 text-sm focus:outline-none">
                <svg
                  className="mr-2 w-6 h-6 size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
                <span>Stay Without Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
