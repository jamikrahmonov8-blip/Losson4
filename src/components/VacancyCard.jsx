import React from "react";

function VacancyCard() {
  return (
    <div className="bg-gray-100 p-6 w-full sm:w-[260px]">

      <h3 className="font-semibold mb-2 text-gray-700">
        ВОДИТЕЛЬ ЛЕСОВОЗА
      </h3>

      <p className="text-green-600 font-semibold mb-3">
        З.п. от 50 000 ₽
      </p>

      <p className="text-sm text-gray-500 mb-6">
        Оборудованное предприятие поставляет продукцию
        на внутренний рынок и за рубеж.
      </p>

      <button className="text-green-600 text-sm flex items-center gap-2">
        Подробнее →
      </button>

    </div>
  );
}

export default VacancyCard;