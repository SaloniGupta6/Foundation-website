import React from "react";

export default function BackgroundWrapper({ children }) {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('/bg-realistic.jpg')`, // Change the image name as per your asset
      }}
    >
      <div className="bg-black bg-opacity-40 min-h-screen">{children}</div>
    </div>
  );
}