import React, { useState } from 'react';

const vitamins = [
  { name: "Vitamin C", description: "Boosts immunity and skin health." },
  { name: "Vitamin D", description: "Supports bone health and immunity." },
  { name: "Vitamin B12", description: "Essential for nerve function and energy." },
];

function Slider({ onVitaminSelect }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="slider">
      <div className="slider-section">
        <h2>Select a Vitamin</h2>
        <div className="options">
          {vitamins.map((vitamin, index) => (
            <button key={index} onClick={() => { setSelected(vitamin); onVitaminSelect(vitamin); }}>
              {vitamin.name}
            </button>
          ))}
        </div>
      </div>

      <div className="slider-section">
        <h2>Symptom Checker</h2>
        <p>Enter your symptoms to check possible vitamin deficiencies.</p>
        <input type="text" placeholder="Type your symptoms..." />
        <button>Check</button>
      </div>
    </div>
  );
}

export default Slider;
