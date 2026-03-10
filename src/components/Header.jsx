import React from "react";
import fon from "../assets/fon.png";
import logo from "../assets/logo.png";
import emailIcon from "../assets/email.png";
import cold from "../assets/cold.png";
import menu from "../assets/menu.png";
import whatsap from "../assets/whatspa.png"
import Btn from "./btn";
function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${fon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <article className="text-white flex justify-between p-[30px] items-center">
        <div className="flex gap-[20px] items-center">
          <img src={logo} width={226} alt="" />
          <div className="sm:flex gap-[20px] hidden ">
            <p>Продукция</p>
            <p>Поставщикам</p>
            <p>Вакансии</p>
            <p>Новости</p>
            <p>контакты</p>
          </div>
        </div>
        <div className="sm:flex items-center gap-[30px] hidden">
          <div className="flex items-center gap-[20px]">
            <img src={cold} alt="" width={21} />{" "}
            <p className="text-[16px] font-bold">+7 (342) 250-08-88</p>
          </div>
          <div className="flex items-center gap-[20px]">
            <img src={emailIcon} alt="" width={21} />{" "}
            <p className="text-[16px] font-bold">info@grdok.ru.</p>
          </div>
          <div className="text-[18px] font-semibold">Ru</div>
        </div>
        <div className="sm:hidden flex">
          <img src={menu} width={33} alt="" />
        </div>
      </article>
      <section className="flex justify-center sm:justify-between max-w-[1480px] m-auto items-center h-[500px] sm:h-[600px]">
        <article className="flex flex-col gap-[40px] sm:mt-[50px]">
          <h1 className="sm:text-[60px] text-[38px] sm:m-[0px] m-auto sm:w-[898px] w-[355px] text-white">
            Группа компаний Гремячинский ДОК
          </h1>
          <p className="sm:w-[622px] w-[350px] sm:m-[0px] m-auto text-[18px] text-white">
            Современное предприятие по производству гнуто-клееных изделий
            (латофлекс), фанеры, топливных брикетов RUF, березового угля,
            пиломатериалов
          </p>
          <div className="w-[350px] m-auto sm:m-[0px]">
            <Btn title="Связаться с нами" />
          </div>
        </article>
        <article><img src={whatsap} className="sm:flex  hidden sm:mt-[550px] " alt="" width={65.00003051757812} /></article>
      </section>
    </header>
  );
}

export default Header;
