import React from "react";
import ProductCard from "./ProductCard";
import prod1 from "../assets/produckt1.png"
import prod2 from "../assets/produckt2.png"
import prod3 from "../assets/produckt3.png"
import prod4 from "../assets/produckt4.png"
import prod5 from "../assets/produckt5.png"
import prod6 from "../assets/produckt6.png"
import prod7 from "../assets/produckt7.png"
import prod8 from "../assets/produckt8.png"
function ProductsSection() {
    let  products = [
  {
    id: 1,
    title: "ЛАТОФЛЕКС",
    description:
      "Шпон березовый гнутый, ГОСТ 99-96В. Слои марки КМТ-15, класс эмиссии Е0",
    img: prod1,
  },
  {
    id: 2,
    title: "ФАНЕРА",
    description:
      "Шпон березовый лущеный, ГОСТ 99-96В. Слои марки КМТ-15, класс эмиссии Е0",
    img: prod2,
  },
  {
    id: 3,
    title: "БРИКЕТЫ ТОПЛИВНЫЕ RUF",
    description:
      "Прессованные березовые опилки без применения химических добавок",
    img:prod3,
  },
  {
    id: 4,
    title: "ПИЛОМАТЕРИАЛЫ",
    description:
      "Дисковый распил — ель, сибирская, лиственница, берёза",
    img: prod4,
  },
  {
    id: 5,
    title: "КРОВАТНЫЕ ОСНОВАНИЯ",
    description:
      "Из берёзового шпона или массива на ленте",
    img: prod5,
  },
  {
    id: 6,
    title: "УГОЛЬ",
    description:
      "Мелкосортный высококалорийный продукт",
    img: prod6,
  },
  {
    id: 7,
    title: "САЖЕНЦЫ",
    description:
      "Молодые деревья выращенные в питомнике",
    img: prod7,
  },
  {
    id: 8,
    title: "ОТХОДЫ ПРОИЗВОДСТВА",
    description:
      "Прессованные березовые опилки",
    img: prod8,
  },
];
  return (
    <section className="bg-[#5a5a5a] py-20">

      <div className="max-w-[1200px] mx-auto px-4">

        <h2 className="text-white text-[32px] font-bold mb-4">
          ПРОДУКЦИЯ ЗАВОДА
        </h2>

        <p className="text-gray-300 max-w-[520px] mb-14">
          Ниже представлен список нашей продукции. Получить дополнительную
          информацию можно по контактам коммерческой службы.
        </p>

        <div className="
        grid
        sm:grid-cols-3
        gap-10
        justify-items-center
        grid-cols-1
        ">

          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductsSection;