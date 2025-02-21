import React from 'react';
import "./Info.css";
import Navbar from 'components/Navbar/Navbar';

function Info() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 body">
      <div className="relative w-full max-w-2xl">
      <div className='divm'>
{/* ------------------------------------------------------------------------------------------- */}
      <div className='maindiv'>
        <div className='div1'>
        <div className="info-section left">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 transition-transform hover:translate-x-2">How We Use Your Information</h1>
          <p className="text-gray-600 mb-4 transition-transform hover:translate-x-2">
            Our website, <span className="text-red-500 font-semibold">Nutrition in Children</span>, helps parents assess their child's nutritional status. By analyzing the data you provide, we identify potential nutrient deficiencies and offer personalized recommendations.
          </p>
        </div></div>

        <div className='div2'>
        <div className="info-section right">
          <h2 className="text-xl font-semibold text-gray-700 mb-2 transition-transform hover:translate-x-2">What Information Do We Collect?</h2>
          <ul className="list-disc list-inside text-gray-600 mb-4 transition-transform hover:translate-x-2">
            <li><strong>Name:</strong> Personalization purposes.</li>
            <li><strong>Age:</strong> Determines age-specific nutritional needs.</li>
            <li><strong>Height & Weight:</strong> Used for BMI calculation and growth analysis.</li>
            <li><strong>Gender:</strong> Helps tailor nutritional recommendations.</li>
            <li><strong>Image:</strong> Analyzed for potential visual indicators of deficiencies.</li>
          </ul>
        </div></div>

        <div className='div3'>
        <div className="info-section left">
          <h2 className="text-xl font-semibold text-gray-700 mb-2 transition-transform hover:translate-x-2">Privacy and Security</h2>
          <p className="text-gray-600 mb-4 transition-transform hover:translate-x-2">
            We prioritize data security and confidentiality. Your child's information is securely processed and never shared with third parties. Images are analyzed in-session and not stored permanently.
          </p>
        </div></div>

        <div className='div4'>
        <div className="info-section right">
          <h2 className="text-xl font-semibold text-gray-700 mb-2 transition-transform hover:translate-x-2">Get Started</h2>
          <p className="text-gray-600 transition-transform hover:translate-x-2">Enter your child's details to receive a personalized nutritional assessment.</p>
        </div></div>
      </div>
{/* --------------------------------------------------------------------------------------------------- */}
      <div className='maindiv2'>
        <div className='div1'>
        <div className="info-section left">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 transition-transform hover:translate-x-2">How We Use Your Information</h1>
          <p className="text-gray-600 mb-4 transition-transform hover:translate-x-2">
            Our website, <span className="text-red-500 font-semibold">Nutrition in Children</span>, helps parents assess their child's nutritional status. By analyzing the data you provide, we identify potential nutrient deficiencies and offer personalized recommendations.
          </p>
        </div></div>

      <div className='div2'>
        <div className="info-section right">
          <h2 className="text-xl font-semibold text-gray-700 mb-2 transition-transform hover:translate-x-2">What Information Do We Collect?</h2>
          <ul className="list-disc list-inside text-gray-600 mb-4 transition-transform hover:translate-x-2">
            <li><strong>Name:</strong> Personalization purposes.</li>
            <li><strong>Age:</strong> Determines age-specific nutritional needs.</li>
            <li><strong>Height & Weight:</strong> Used for BMI calculation and growth analysis.</li>
            <li><strong>Gender:</strong> Helps tailor nutritional recommendations.</li>
            <li><strong>Image:</strong> Analyzed for potential visual indicators of deficiencies.</li>
          </ul>
        </div></div>

        <div className='div3'>
        <div className="info-section left">
          <h2 className="text-xl font-semibold text-gray-700 mb-2 transition-transform hover:translate-x-2">Privacy and Security</h2>
          <p className="text-gray-600 mb-4 transition-transform hover:translate-x-2">
            We prioritize data security and confidentiality. Your child's information is securely processed and never shared with third parties. Images are analyzed in-session and not stored permanently.
          </p>
        </div></div>

        <div className='div4'>
        <div className="info-section right">
          <h2 className="text-xl font-semibold text-gray-700 mb-2 transition-transform hover:translate-x-2">Get Started</h2>
          <p className="text-gray-600 transition-transform hover:translate-x-2">Enter your child's details to receive a personalized nutritional assessment.</p>
        </div></div>

      </div>
{/* -------------------------------------------------------------------- */}
  </div>
    </div></div>


    </>
  );
}

export default Info;
