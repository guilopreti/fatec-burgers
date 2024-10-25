import Button from "../Button";
import "./styles.css";

const Product = ({ id, name, category, price, img, handleClick }) => {
  return (
    <li key={id} className="vitrine__produtos--produto">
      <figure>
        <img
          src={img}
          alt={name}
          className={
            category === "Sanduíches"
              ? "imagem__sanduba"
              : name === "Milkshake Ovomaltine"
              ? "imagem__milkshake"
              : name === "Del Valle Laranja"
              ? "imagem__delvalle"
              : name === "Nuggets"
              ? "imagem__nuggets"
              : "imagem__refris"
          }
        />
        <figcaption>{name}</figcaption>
      </figure>

      <h2>{name}</h2>
      <span className="category">{category}</span>
      <span className="price">R$ {price.toFixed(2)}</span>
      <Button
        onClick={function () {
          handleClick(id);
        }}
      >
        Adicionar
      </Button>
    </li>
  );
};

export default Product;
