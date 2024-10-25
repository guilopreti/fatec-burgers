import "./styles.css";
import Button from "../Button";

const CartTotal = ({ currentSale, deleteAllSales }) => {
  return (
    <div className="bloco__cartTotal">
      <h3>Total</h3>
      <span>
        R${" "}
        {currentSale
          .reduce((acc, { price }) => {
            return (acc += price);
          }, 0)
          .toFixed(2)}
      </span>
      <Button secondaryColor onClick={deleteAllSales}>
        Remover Todos
      </Button>
    </div>
  );
};

export default CartTotal;
