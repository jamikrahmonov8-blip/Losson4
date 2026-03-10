import React from "react";
import logo from "../assets/logo.png"
function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-gray-400">

   
      <div className="max-w-[1400px] mx-auto px-4 py-16 grid sm:grid-cols-4 grid-cols-1 gap-12 text-sm">

        <div>
       <img src={logo} alt="" />
          <h3 className="text-white text-lg mb-4">
            ГРЕМИЧИНСКИЙ
          </h3>

          <p className="leading-relaxed">
            Современное предприятие по производству пиломатериалов
            (хвойных пород) и фанеры, топливных брикетов RUF,
            березового угля, пиломатериалов.
          </p>
        </div>

        <div>
          <h4 className="text-white mb-4">Реализация</h4>

          <ul className="space-y-2">
            <li>Латофлекс</li>
            <li>Фанера</li>
            <li>Брикеты топливные RUF</li>
            <li>Пиломатериалы</li>
            <li>Кроватные основания</li>
            <li>Уголь</li>
            <li>Саженцы</li>
            <li>Отходы производства</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4">О компании</h4>

          <ul className="space-y-2">
            <li>Продукция</li>
            <li>Деятельность</li>
            <li>Преимущества</li>
            <li>Поставщикам</li>
            <li>Вакансии</li>
            <li>Новости</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4">Контакты</h4>

          <ul className="space-y-2">
            <li>purchase@grdko.ru</li>
            <li>sale@grdko.ru</li>
            <li>@gremdok_bot</li>
            <li>+7 (342) 502-16-91</li>
            <li>
              Пермский край<br/>
              г. Гремячинск<br/>
              ул. Коммунистическая, д.1
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-600">

        <div className="max-w-[1200px] mx-auto px-4 py-6 flex justify-between text-xs">

          <p>© 2022 ГремДок, все права защищены</p>

          <p className="cursor-pointer hover:text-white">
            Политика конфиденциальности
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;