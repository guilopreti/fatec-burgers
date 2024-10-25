import { useState } from "react";
import "./styles.css";

const Header = ({ showProducts, changeSearch }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <header>
      <p>
        Burguers <span>Fatec</span>
      </p>

      <div className="div-busca">
        <input
          placeholder="Digitar Pesquisa"
          id="input-placeholder"
          onChange={(evt) => setInputValue(evt.target.value)}
        />
        <button
          onClick={function () {
            showProducts(inputValue);
            changeSearch(inputValue);
          }}
        >
          Pesquisar
        </button>
      </div>
    </header>
  );
};

export default Header;
