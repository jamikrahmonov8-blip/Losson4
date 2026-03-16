import React from "react";
import fon from "../assets/fon.png";

function ContactSection() {
  return (
    <section
      className="relative w-full py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${fon})` }}
    >
      {/* затемнение */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-[1400px] m-auto justify-between items-center px-4 flex flex-col lg:flex-row gap-16 items-start">

        {/* LEFT TEXT */}
        <div className="text-white max-w-[420px]">
          <h2 className="text-[36px] font-bold leading-[42px] mb-6">
            СВЯЖИТЕСЬ С НАШИМ <br /> СПЕЦИАЛИСТОМ
          </h2>

          <p className="text-gray-300 mb-10">
            Заинтересованы в сотрудничестве или остались вопросы?
            Заполните форму обратной связи и наши менеджеры обязательно
            свяжутся с вами
          </p>

          <div className="flex gap-8 text-sm">
            <div>
              <div className="text-green-500 mb-2">✔</div>
              <p>Ответим в течение рабочего времени</p>
            </div>

            <div>
              <div className="text-green-500 mb-2">✔</div>
              <p>Закрепим персонального менеджера</p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div
          className="bg-green-700 w-full max-w-[520px] p-10 text-white"
          style={{
            clipPath: "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 0 100%)",
          }}
        >
          <h3 className="mb-6 font-semibold">Контактные лица</h3>

          <div className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Ф.И.О."
              className="p-3 text-black bg-white"
            />

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="+7 (999) 999-99-99"
                className="p-3 w-1/2 text-black bg-white"
              />

              <input
                type="email"
                placeholder="info@mail.ru"
                className="p-3 w-1/2 text-black bg-white"
              />
            </div>

            <select className="p-3 text-black bg-white">
              <option>Выберите из списка</option>
            </select>

            <textarea
              placeholder="Напишите суть вашего вопроса"
              className="p-3 text-black h-[120px] bg-white"
            />

            <label className="text-sm flex gap-2 items-start">
              <input type="checkbox" />
              Нажимая кнопку я соглашаюсь с политикой конфиденциальности
            </label>

            <button className="border border-white py-3 mt-4 hover:bg-white hover:text-green-700 transition">
              Связаться с нами
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;