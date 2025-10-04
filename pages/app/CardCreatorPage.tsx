
import React, { useState } from 'react';
import LoyaltyCardPreview from '../../components/loyalty/LoyaltyCardPreview';

const colorOptions = [ '#FFFFFF', '#F3F4F6', '#FEFCE8', '#F0F9FF', '#FDF2F8' ];

const CardCreatorPage: React.FC = () => {
  const [businessName, setBusinessName] = useState('The Coffee Spot');
  const [rewardText, setRewardText] = useState('Free Coffee');
  const [cardColor, setCardColor] = useState(colorOptions[0]);
  const [stamps, setStamps] = useState(4); // For preview purposes

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create & Edit Your Loyalty Card</h1>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <input
              type="text"
              id="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="rewardText" className="block text-sm font-medium text-gray-700 mb-1">Reward Text</label>
            <input
              type="text"
              id="rewardText"
              value={rewardText}
              onChange={(e) => setRewardText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Background Color</label>
            <div className="flex space-x-3">
              {colorOptions.map(color => (
                <button
                  key={color}
                  onClick={() => setCardColor(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-transform hover:scale-110 ${cardColor === color ? 'border-black' : 'border-gray-300'}`}
                  style={{ backgroundColor: color }}
                  aria-label={`Set color to ${color}`}
                />
              ))}
            </div>
          </div>

          <div>
             <label htmlFor="stamps" className="block text-sm font-medium text-gray-700 mb-1">Preview Stamps ({stamps})</label>
             <input
                type="range"
                id="stamps"
                min="0"
                max="10"
                value={stamps}
                onChange={(e) => setStamps(Number(e.target.value))}
                className="w-full"
              />
          </div>
          
           <div className="pt-4">
              <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800">
                Save Changes
              </button>
            </div>

        </div>

        {/* Preview */}
        <div className="flex justify-center items-start">
          <LoyaltyCardPreview
            businessName={businessName}
            rewardText={rewardText}
            cardColor={cardColor}
            stamps={stamps}
          />
        </div>
      </div>
    </div>
  );
};

export default CardCreatorPage;
