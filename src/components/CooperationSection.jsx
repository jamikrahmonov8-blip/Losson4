import React from "react";
import fon from "../assets/fon3.png";

function CooperationSection() {
  return (
    <section
      className="relative h-[260px] bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${fon})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative text-white">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          СОТРУДНИЧЕСТВО
        </h2>

        <p className="text-sm sm:text-base mb-6 max-w-[500px] mx-auto">
          Предлагаем поставки востребованных продуктов и услуг
        </p>

        <button className="bg-green-600 px-6 py-2 hover:bg-green-700">
          Подробнее
        </button>
      </div>
    </section>
  );
}

export default CooperationSection;