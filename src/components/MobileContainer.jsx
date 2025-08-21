// src/components/MobileContainer.jsx
function MobileContainer({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      {/* Fixed mobile frame */}
      <div className="w-[360px] h-[640px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default MobileContainer;
