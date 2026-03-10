import React from "react";

function NewsCard({ img }) {
  return (
    <div className="w-full sm:w-[361px]">

      <img
        src={img}
        className="w-full h-[180px] object-cover mb-4"
      />

      <h3 className="font-semibold text-gray-700 mb-2">
        Вышли на международный рынок
      </h3>

      <p className="text-sm text-gray-500 mb-2">
        Оборудование предприятия позволяет выпускать
        широкий ассортимент продукции.
      </p>

      <span className="text-green-600 text-sm">
        25.12.2021
      </span>

    </div>
  );
}

export default NewsCard;