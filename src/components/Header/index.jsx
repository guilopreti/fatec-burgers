import { useEffect, useState } from "react";
import "./styles.css";
import Button from "../Button";

const Header = ({ showProducts, changeSearch }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue === "") {
      showProducts(inputValue);
      changeSearch(inputValue);
    }
  }, [inputValue]);

  return (
    <header>
      <p>
        Burgers <span>Fatec</span>
      </p>

      <div className="div-busca">
        <input
          placeholder="Digitar Pesquisa"
          id="input-placeholder"
          onChange={(evt) => setInputValue(evt.target.value)}
        />
        <Button
          onClick={function () {
            showProducts(inputValue);
            changeSearch(inputValue);
          }}
        >
          Pesquisar
        </Button>
      </div>
    </header>
  );
};

export default Header;
