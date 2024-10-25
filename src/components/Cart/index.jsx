import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import "./styles.css";

const Cart = ({ currentSale, deleteAllSales, deleteOneSale }) => {
  return (
    <section className="cart">
      <div className="cart__title">
        <h2>Carrinho de compras</h2>
      </div>
      {currentSale.length === 0 ? (
        <div className="cart__empty">
          <h2>Sua sacola está vazia</h2>
          <span>Adicione itens</span>
        </div>
      ) : (
        <div className="cart__products">
          <ul>
            {currentSale.map(({ img, name, category, id }) => {
              return (
                <CartProduct
                  img={img}
                  name={name}
                  category={category}
                  id={id}
                  deleteOneSale={deleteOneSale}
                />
              );
            })}
          </ul>
          <CartTotal
            currentSale={currentSale}
            deleteAllSales={deleteAllSales}
          />
        </div>
      )}
    </section>
  );
};

export default Cart;
