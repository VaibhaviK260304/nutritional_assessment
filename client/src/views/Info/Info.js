import React from 'react';
import "./Info.css";

function Info() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">How We Use Your Information</h1>
        <p className="text-gray-600 mb-4">
          Our website, <span className="text-red-500 font-semibold">Nutrition in Children</span>, helps parents assess their child's nutritional status. By analyzing the data you provide, we identify potential nutrient deficiencies and offer personalized recommendations.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-2">What Information Do We Collect?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Name:</strong> Personalization purposes.</li>
          <li><strong>Age:</strong> Determines age-specific nutritional needs.</li>
          <li><strong>Height & Weight:</strong> Used for BMI calculation and growth analysis.</li>
          <li><strong>Gender:</strong> Helps tailor nutritional recommendations.</li>
          <li><strong>Image:</strong> Analyzed for potential visual indicators of deficiencies.</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-2">How Do We Use This Data?</h2>
        <p className="text-gray-600 mb-4">
          Once submitted, our system processes this information using scientific guidelines and algorithms to generate a report on:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Potential <strong>Vitamin Deficiencies</strong> (e.g., A, D, C)</li>
          <li>Possible <strong>Mineral Deficiencies</strong> (e.g., Iron, Calcium, Zinc)</li>
          <li>Overall <strong>Growth and Health Analysis</strong></li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Privacy and Security</h2>
        <p className="text-gray-600 mb-4">
          We prioritize data security and confidentiality. Your child's information is securely processed and never shared with third parties. Images are analyzed in-session and not stored permanently.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Get Started</h2>
        <p className="text-gray-600">Enter your child's details to receive a personalized nutritional assessment.</p>
      </div>
    </div>
  );
}

export default Info;
