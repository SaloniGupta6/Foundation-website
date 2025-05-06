import React from "react";

const imageList = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg"
];

const PhotoGallery = () => {
  return (
    <section className="py-10 px-5 bg-gray-50" id="gallery">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Photo Gallery</h2>
        <p className="text-gray-600 mt-2">Glimpses of our on-ground activities</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imageList.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Field Work ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;