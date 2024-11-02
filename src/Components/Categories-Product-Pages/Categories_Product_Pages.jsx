import React from 'react'

export default function Categories_Product_Pages() {
  const boxes = Array.from({ length: 11 }, (_, index) => index + 1);

  return (
    <>
      <div class="flex flex-wrap px-4 selectBorder">
        <div class="w-full sm:w-1/3 px-2 mb-4">
          <div class="sort-by-box px-1">
            <div class="form-group text-start">
              <label className='text-sm font-medium text-gray-800'>Sort by</label>
              <select name="sort_by">
                <option value="1">Newest</option>
                <option value="2">Oldest</option>
                <option value="3">Price low to high</option>
                <option value="4">Price high to low</option>
              </select>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-1/3 px-2 mb-4">
          <div class="sort-by-box px-1">
            <div class="form-group text-start">
              <label className='text-sm font-medium text-gray-800'>Brands</label>
              <select name="brand">
                <option value="">All Brands</option>
                <option value="Imported">Imported</option>
                <option value="ELMICO-bmbua">ELMICO</option>
                <option value="Ingco-bYvEe">Ingco</option>
                <option value="Made-in-India-Us704">Made in India</option>
                <option value="Dongcheng-0smM0">Dongcheng</option>
                <option value="Stihl-4KqhG">Stihl</option>
                <option value="Alix-jrYLQ">Alix</option>
                <option value="GAHL-F9hJL">GAHL</option>
                <option value="Sepack-16Abv">Sepack</option>
                <option value="GRAI-VXGR4">GRAI</option>
                <option value="SHAKTI-0OR59">GT-SHAKTI</option>
                <option value="UNISON-LwV5A">UNISON</option>
                <option value="Goma-Cleantech-AF09s">Goma Cleantech</option>
                <option value="Neptune-4nvXI">Neptune</option>
                <option value="DAM-GqEOF">DAM</option>
                <option value="Husqvarna-qQVWB">Husqvarna</option>
                <option value="Besto-Power-wMWW9">Besto Power</option>
                <option value="Gorek-VEFv5">Gorek</option>
                <option value="Rico-Italy-nOW0G">Rico Italy</option>
                <option value="Xperts-Choice-DH5Hg">Xpert’s Choice</option>
                <option value="IVE-WoIjM">IVE</option>
                <option value="Balwaan-DAgB5">Balwaan</option>
                <option value="TIGER-Apq1u">TIGER</option>
                <option value="Kishan-Agri-1q5l9">Kishan Agri</option>
                <option value="Valluvan-Agro-qhmTg">Valluvan Agro</option>
                <option value="HKI-IB85H">HKI</option>
                <option value="MODIANT-ZH8Kl">MODIANT</option>
                <option value="Xtra-Power-EeRyT">Xtra Power</option>
                <option value="Painter-ykj9e">Painter</option>
                <option value="Elephant-0Sp25">Elephant</option>
                <option value="HPM-5yBIs">HPM</option>
                <option value="XLNT-xi2jD">XLNT</option>
                <option value="ALPHA-C8UrU">ALPHA</option>
                <option value="LUBI-2XjdP">LUBI</option>
                <option value="HONDA-gF45I">HONDA</option>
                <option value="Kishan-Kraft-ez72h">Kishan Kraft</option>
                <option value="Aspee-nlPxX">Aspee</option>
                <option value="REALLY-WAFZP">REALLY</option>
                <option value="AMAR-wiWhV">AMAR</option>
                <option value="Darsh-SmlEN">Darsh</option>
                <option value="MITSUYAMA-e6zM9">MITSUYAMA</option>
                <option value="PELICAN-vrcnr">PELICAN</option>
                <option value="Titan-48UvX">Titan</option>
                <option value="KALSI-NBvt5">KALSI</option>
                <option value="Shakti-gXnXV">Shakti</option>
                <option value="Exwell-HV3it">Exwell</option>
                <option value="Kirloskar-Vr8E0">Kirloskar</option>
                <option value="Crompton-0eWZ2">Crompton</option>
                <option value="RIGOUR-HimXe">RIGOUR</option>
                <option value="Cinagro-vprzn">Cinagro</option>
                <option value="LEO-qrtAf">LEO</option>
                <option value="Generic-85Q3c">Generic</option>
                <option value="Andrew-James-7ylyd">Airdue</option>
                <option value="MECSTROKE-JkYI6">MECSTROKE</option>
                <option value="RIGA---ITALY-U8VjP">RIGA - ITALY</option>
                <option value="Hymax-UWXFH">Hymax</option>
                <option value="Gravis-ivzXg">Gravis</option>
                <option value="Akari-VeGE8">Akari</option>
                <option value="Naachi-qkgaP">Naachi</option>
              </select>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-1/3 px-2 mb-4">
          <div class="sort-by-box px-1">
            <div class="form-group text-start">
              <label className='text-sm font-medium text-gray-800'>Sellers</label>
              <select name="seller_id">
                <option value="">All Sellers</option>
                <option value="3">GALAXY MANUFACATURE</option>
                <option value="4">MR ENTERPRIESE</option>
                <option value="5">MR ENTERPRIESE</option>
                <option value="6">shekharbrothers</option>
                <option value="7">shekharbrothers</option>
                <option value="8">shekharbrothers</option>
                <option value="9">alixfoodprocessingmachinery</option>
                <option value="10">bhumi group and company</option>
                <option value="11">JAY BHARAT TRADING CO</option>
                <option value="12">wv1e6s</option>
                <option value="13">cosmos Pumps Pvt Ltd</option>
                <option value="14">cosmos Pumps Pvt Ltd</option>
                <option value="15">JAY BHARAT TRADING CO</option>
                <option value="16">the agri india</option>
                <option value="17">PRIME TRADELINK</option>
                <option value="18">ILAAF IMPEX TRADING CO</option>
                <option value="19">AGRO AND GARDEN SOLUTION</option>
                <option value="20">Bonhoeffer</option>
                <option value="21">Sarveshwar Machine Tools- Chapati Making Machine</option>
                <option value="22">INA0J82L4 www.yandex.ru</option>
                <option value="23">SD60SJP www.yandex.ru</option>
                <option value="24">J S MACHINERIES</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {boxes.map((box) => (
          <div key={box} className="flex-1 min-w-[300px] p-2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl CTPRBOX">
              <div className="relative truncate">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-75"></div>
                <img src="https://t3.ftcdn.net/jpg/04/52/10/00/240_F_452100081_VojbGuahJKT5lkkAdkYmCMeZ543aih2o.jpg" alt="Product Image" className="w-full h-64 object-cover object-center relative" />
                <div className="absolute top-4 right-4 bg-gray-100 text-xs font-bold px-3 py-2 rounded-full transform rotate-12">
                  10% off
                </div>
                <div className="absolute flex justify-evenly bg-gray-100 opacity-1 text-xs font-bold px-3 py-2 rounded-sm w-auto left-20 right-20 flowIcon bottom-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-extrabold text-gray-800 mb-2 line-clamp-2">Cosmic Headphones</h2>
                <p className="text-gray-600 mb-4 font-sm line-clamp-3">Experience music like never before with our state-of-the-art Cosmic Headphones.
                  Immerse yourself in crystal-clear sound and unparalleled comfort.</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-1xl font-bold text-indigo-600 price">₹299.99</span>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600 text-xs font-medium">4.9 (120 reviews)</span>
                  </div>
                </div>
                <button className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
