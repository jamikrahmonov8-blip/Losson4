import React from "react";
import Header from "../components/Header";
import ProductsSection from "../components/ProductsSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

import zavod from "../assets/zavod.png";
import zavod2 from "../assets/zavod2.png";
import zavod3 from "../assets/zavod3.png";
import zavod4 from "../assets/zavod4.png";

import ogord from "../assets/ogord.png";
import ogord2 from "../assets/ogord2.png";

import les1 from "../assets/les1.png"
import les2 from "../assets/les2.png"
import les3 from "../assets/les3.png"

import CooperationSection from "../components/CooperationSection";
import VacancyCard from "../components/VacancyCard";
import NewsCard from "../components/NewsCard";4

import img1 from "../assets/image.png"
import img2 from "../assets/image copy.png"
import img3 from "../assets/image copy 2.png"
function Home() {
  return (
    <>
      <Header />
      <ProductsSection />
      <section>
        <h1 className="text-[40px] text-center font-semibold text-[#494B44] m-auto text-[40px] ">
          {" "}
          основная деятельность
        </h1>
        <section>
          <article className="max-w-[1140px] m-auto">
            <div className="flex justify-between  mt-[100px] ">
              <div className="flex flex-col gap-[30px] text-center sm:text-start sm:mt-[80px] m-auto">
                <h1 className="text-[30px] text-[#0E9E2F]">Производство</h1>
                <p className="w-[370px] text-[#92938F] text-[16px]">
                  Оборудование предприятия поставляется от мировых лидеров в
                  сфере деревообработки и обеспечивает стабильный выпуск
                  продукции.
                </p>
                <p className="w-[370px] text-[#92938F] text-[16px]">
                  Поставки осуществляются по России и в 14 стран мира. Строгий
                  контроль на каждом этапе производства помогает поддерживать
                  качество продукции.
                </p>
              </div>
              <img src={zavod} alt="" width={760} className="hidden sm:flex" />
            </div>
            <div className="flex justify-between flex-col sm:flex-row mt-[30px] mb-[30px] sm:ml-[0px] ml-[40px] sm:gap-[0px] gap-[40px]">
              <img src={zavod2} alt="" width={361} height={186} />
              <img src={zavod3} alt="" width={361} height={186} />
              <img src={zavod4} alt="" width={361} height={186} />
            </div>
          </article>
          <article className="max-w-[1140px] m-auto">
            <div className="flex justify-between  mt-[100px] ">
              <div className="flex flex-col gap-[30px] text-center sm:text-start sm:mt-[80px] m-auto">
                <h1 className="text-[30px] text-[#0E9E2F]">Лесоуправление  и заготовка</h1>
                <p className="w-[370px] text-[#92938F] text-[16px]">
                  Оборудование предприятия поставляется от мировых лидеров в
                  сфере деревообработки и обеспечивает стабильный выпуск
                  продукции.
                </p>
                <p className="w-[370px] text-[#92938F] text-[16px]">
                  Поставки осуществляются по России и в 14 стран мира. Строгий
                  контроль на каждом этапе производства помогает поддерживать
                  качество продукции.
                </p>
              </div>
              <img src={ogord} alt="" width={760} className="hidden sm:flex" />
            </div>
            <div className="flex justify-between flex-col sm:flex-row mt-[30px] mb-[30px] sm:ml-[0px] ml-[40px] sm:gap-[0px] gap-[40px]">
              <img src={ogord2} alt="" width={361} height={186} />
              <img src={ogord2} alt="" width={361} height={186} />
              <img src={ogord2} alt="" width={361} height={186} />
            </div>
          </article>
          <article className="max-w-[1140px] m-auto">
            <div className="flex justify-between  mt-[100px] ">
              <div className="flex flex-col gap-[30px] text-center sm:text-start sm:mt-[80px] m-auto">
                <h1 className="text-[30px] text-[#0E9E2F]">Питомник</h1>
                <p className="w-[370px] text-[#92938F] text-[16px]">
                  Оборудование предприятия поставляется от мировых лидеров в
                  сфере деревообработки и обеспечивает стабильный выпуск
                  продукции.
                </p>
                <p className="w-[370px] text-[#92938F] text-[16px]">
                  Поставки осуществляются по России и в 14 стран мира. Строгий
                  контроль на каждом этапе производства помогает поддерживать
                  качество продукции.
                </p>
              </div>
              <img src={ogord} alt="" width={760} className="hidden sm:flex" />
            </div>
            <div className="flex sm:justify-between sm:ml-[0px] ml-[40px] sm:gap-[0px] gap-[40px] flex-col sm:flex-row mt-[30px] mb-[30px] ">
              <img src={les1} alt="" width={361} height={186} />
              <img src={les2} alt="" width={361} height={186} />
              <img src={les3} alt="" width={361} height={186} />
            </div>
          </article>
        </section>
      </section>
      <CooperationSection/>

      <section className="bg-gray-200 py-16">

      <div className="max-w-[1200px] mx-auto px-4">

        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-10">
          АКТУАЛЬНЫЕ ВАКАНСИИ
        </h2>

        <div className="
        flex
        flex-col
        sm:flex-row
        gap-6
        ">
          <VacancyCard />
          <VacancyCard />
          <VacancyCard />
          <VacancyCard />
        </div>

      </div>

    </section>
    <section className="py-16 bg-white">

      <div className="max-w-[1200px] mx-auto px-4">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700">
            НОВОСТИ
          </h2>

          <a className="text-green-600 text-sm">
            Читать все новости
          </a>
        </div>

        <div className="
        flex
        flex-col
        sm:flex-row
        gap-8
        ">
          <NewsCard img={img1}/>
          <NewsCard img={img2}/>
          <NewsCard img={img3}/>
        </div>

      </div>

    </section>

      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
