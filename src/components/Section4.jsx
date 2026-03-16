import React from "react";

function ProductCard({ title, description, img }) {
  return (
    <div
      className="w-[360px] h-[413px] bg-[#4a4a4a] p-6 flex flex-col items-center text-center relative"
      style={{
        clipPath: "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 0 100%)"
      }}
    >
      <img
        src={img}
        alt={title}
        className="h-[120px] object-contain mb-6"
      />

      <h3 className="text-white text-[18px] font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-300 text-[14px] leading-[20px] mb-6">
        {description}
      </p>

      <button className="bg-green-600 hover:bg-green-700 text-white text-[14px] px-5 py-2 mt-auto">
        Подробнее о товаре
      </button>
    </div>
  );
}

export default ProductCard;