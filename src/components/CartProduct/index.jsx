import "./styles.css";
import { TiMinus } from "react-icons/ti";

const CartProduct = ({ img, name, category, id, deleteOneSale, qtd }) => {
  return (
    <li key={id} className="product-cart">
      <figure>
        <img
          src={img}
          alt={name}
          className={
            category === "Sanduíches"
              ? "imagem__sanduba--cart"
              : name === "Milkshake Ovomaltine"
              ? "imagem__milkshake--cart"
              : name === "Del Valle Laranja"
              ? "imagem__delvalle--cart"
              : name === "Nuggets"
              ? "imagem__nuggets--cart"
              : name === "Batata Cheddar e Bacon"
              ? "imagem__batata--cart"
              : "imagem__refris--cart"
          }
        />
        <figcaption>{name}</figcaption>
      </figure>
      <div>
        <h2>{name}</h2>
        <span>{category}</span>
      </div>
      <div className="div__quantidade">
        <span className="remover__produtosCart">{qtd}</span>
        <span onClick={() => deleteOneSale(id)}>
          <TiMinus />
        </span>
      </div>
    </li>
  );
};

export default CartProduct;
