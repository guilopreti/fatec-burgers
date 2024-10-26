import Chicken from "../imgs/chicken.png";
import XBurger from "../imgs/burguer.png";
import BigBurguer from "../imgs/big.png";
import Guarana from "../imgs/guarana.png";
import Coca from "../imgs/coca.png";
import Shake from "../imgs/shake.png";
import Valle from "../imgs/valle.png";
import Batata from "../imgs/batata.png";
import Nuggets from "../imgs/nuggets.png";

const storeProducts = () => [
  {
    id: 1,
    name: "Chicken Burger",
    category: "Sanduíches",
    price: 14,
    img: Chicken,
  },
  {
    id: 2,
    name: "X-Burger",
    category: "Sanduíches",
    price: 16,
    img: XBurger,
  },
  {
    id: 3,
    name: "Big Fatec",
    category: "Sanduíches",
    price: 18,
    img: BigBurguer,
  },
  {
    id: 4,
    name: "Fanta Guaraná",
    category: "Bebidas",
    price: 4.99,
    img: Guarana,
  },
  {
    id: 5,
    name: "Coca-Cola",
    category: "Bebidas",
    price: 4.99,
    img: Coca,
  },
  {
    id: 6,
    name: "Milkshake Ovomaltine",
    category: "Bebidas",
    price: 4.99,
    img: Shake,
  },
  {
    id: 7,
    name: "Del Valle Laranja",
    category: "Bebidas",
    price: 4.99,
    img: Valle,
  },
  {
    id: 8,
    name: "Batata Cheddar e Bacon",
    category: "Acompanhamentos",
    price: 10,
    img: Batata,
  },
  {
    id: 9,
    name: "Nuggets",
    category: "Acompanhamentos",
    price: 8,
    img: Nuggets,
  },
];

export default storeProducts;
