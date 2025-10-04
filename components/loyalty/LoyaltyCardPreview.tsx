
import React from 'react';

interface LoyaltyCardPreviewProps {
  businessName: string;
  rewardText: string;
  cardColor: string;
  stamps: number;
}

const CheckmarkIcon: React.FC = () => (
  <svg className="w-4 h-4 text-[#00AA00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LoyaltyCardPreview: React.FC<LoyaltyCardPreviewProps> = ({ businessName, rewardText, cardColor, stamps }) => {
  const totalStamps = 10;
  const isRewardActive = stamps >= totalStamps;

  return (
    <div
      className="w-full max-w-sm mx-auto rounded-lg shadow-lg p-6 border border-gray-200 transition-colors duration-300 relative overflow-hidden"
      style={{ backgroundColor: cardColor }}
    >
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold break-words">{businessName || 'Your Business Name'}</h2>
      </div>

      <div className="flex justify-center items-center my-6">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-400 text-xs">Logo</span>
        </div>
      </div>

      <div className="text-center mb-2">
        <p className="text-sm text-gray-600">For: <span className="font-semibold">Customer Name</span></p>
      </div>

      <div className="text-center mb-4">
        <p className="font-semibold">{stamps}/{totalStamps} Stamps for your next reward</p>
      </div>

      <div className="grid grid-cols-5 gap-3 mb-6">
        {Array.from({ length: totalStamps }).map((_, index) => (
          <div key={index} className="w-full aspect-square flex items-center justify-center rounded-full border border-black"
            style={{ backgroundColor: index < stamps ? 'black' : 'rgba(128, 128, 128, 0.2)' }}
          >
            {index < stamps && <CheckmarkIcon />}
          </div>
        ))}
      </div>

      <div className="text-center p-3 border-t border-dashed border-gray-400">
        {isRewardActive ? (
          <p className="font-bold text-[#00AA00] text-lg animate-pulse">¡You have an active reward! Redeem</p>
        ) : (
          <p className="font-semibold break-words">{rewardText || 'Your Reward Text'}</p>
        )}
      </div>

      {/* Torn edge effect */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-repeat-x" style={{
        backgroundImage: `radial-gradient(circle at 50% 0, transparent 4px, ${cardColor} 4px)`
      }}></div>
    </div>
  );
};

export default LoyaltyCardPreview;
