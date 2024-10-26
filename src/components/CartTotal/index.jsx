import "./styles.css";
import Button from "../Button";

const CartTotal = ({ currentSale, deleteAllSales, showModal }) => {
  return (
    <div className="bloco__cartTotal">
      <h3>Total</h3>
      <span>
        R${" "}
        {currentSale
          .reduce((acc, { price, qtd }) => {
            return (acc += price * qtd);
          }, 0)
          .toFixed(2)}
      </span>
      <div>
        <Button secondaryColor onClick={deleteAllSales}>
          Remover Todos
        </Button>
        <Button onClick={() => showModal()}>Finalizar Compra</Button>
      </div>
    </div>
  );
};

export default CartTotal;
