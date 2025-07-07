import React from "react";
import img1 from "../../assets/artworks/1.png";
import img2 from "../../assets/artworks/2.png";
import img3 from "../../assets/artworks/3.png";

const artworks = [img1, img2, img3]; // Add more as needed
const duplicated = [...artworks, ...artworks]; // Duplicate for infinite loop

const Artworks = () => {
  return (
   <section id="artworks" className="py-16 bg-[#050414]">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-white">ARTWORKS</h2>
    <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>
    <p className="text-gray-400 mt-3 text-lg font-semibold">
      My digital creations flowing endlessly ✨
    </p>
  </div>

  {/* Wrapper with hidden overflow */}
  <div className="slider-wrapper w-full relative">
    {/* Track: fixed width, flex container with duplicated images */}
    <div className="slider-track">
      {[...artworks, ...artworks].map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Artwork ${index + 1}`}
          className="h-60 object-cover inline-block"
        />
      ))}
    </div>
  </div>
</section>

  );
};

export default Artworks;
