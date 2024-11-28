import React, { useState } from 'react'
import './Ratings_&_Reviews.css'

export default function RatingsReviews() {

    const [rating, setRating] = useState(0); // stores the selected rating
    const [hoveredRating, setHoveredRating] = useState(0); // stores the hovered rating
    const [inputValue, setInputValue] = useState('');

    const handleStarClick = (value) => {
        setRating(value); // sets the rating on click
    };

    const handleMouseEnter = (value) => {
        setHoveredRating(value); // sets the hovered star value
    };

    const handleMouseLeave = () => {
        setHoveredRating(0); // resets hover when not hovering over any star
    };

    return (
        <>
            <div className=" bg-white p-3">
                <div className="section-title-1">
                    <h3 className="heading-5 font-bold mb-0">
                        <span className="productTitle">Ratings &amp; Reviews</span>
                    </h3>
                </div>
                <div className="product-desc-tab bg-white">
                    <div className="review-paragraph">
                        <div className="leave-review">
                            <input type="hidden" name="_token"/>
                            <input type="hidden" name="product_id"/>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <div className="form-group">
                                        <label className="text-xs uppercase text-gray-500">Your name</label>
                                        <input type="text" name="name" value={inputValue} className="form-control w-full border rounded p-2" required="" onChange={(e) => setInputValue(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-4 reviewStar">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`star ${star <= (hoveredRating || rating) ? 'filled' : ''
                                            }`}
                                        onClick={() => handleStarClick(star)}
                                        onMouseEnter={() => handleMouseEnter(star)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 mt-4">
                                <textarea className="form-control w-full border rounded p-2" rows="3" name="comment" placeholder="Your review" required=""></textarea>
                            </div>
                            <div className="grid grid-cols-1 mt-4">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input hidden" id="inputGroupFile01" name="image" accept="image/*" />
                                    <label className="block bg-gray-200 text-gray-700 text-sm rounded p-2 text-center cursor-pointer" htmlFor="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                            <div className="text-right mt-4">
                                <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Send review
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
