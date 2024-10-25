import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import storeProducts from "./assets/products/products";

function App() {
  const [products, setProducts] = useState(storeProducts);
  const [filteredProducts, setFilteredProducts] = useState(storeProducts);
  const [currentSale, setCurrentSale] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   setFilteredProducts(storeProducts);
  //   setProducts(storeProducts);

  // }, []);

  const showProducts = (value) => {
    const fillProducts = products.filter(({ name, category }) => {
      return (
        name.toLowerCase().includes(value.toLowerCase()) ||
        category.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredProducts(fillProducts);
  };

  const handleClick = (idProduct) => {
    const existProduct = currentSale.find(({ id }) => {
      return id === idProduct;
    });

    if (!existProduct) {
      const buyProduct = products.find(({ id }) => {
        return id === idProduct;
      });
      setCurrentSale([...currentSale, buyProduct]);
    }
  };

  const deleteOneSale = (idDelete) => {
    const actualSales = currentSale.filter(({ id }) => {
      return id !== idDelete;
    });

    setCurrentSale(actualSales);
  };

  const deleteAllSales = () => {
    setCurrentSale([]);
  };

  const changeSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="App">
      <Header showProducts={showProducts} changeSearch={changeSearch} />
      <main>
        <ProductsList
          filteredProducts={filteredProducts}
          search={search}
          handleClick={handleClick}
          currentSale={currentSale}
        />
        <Cart
          currentSale={currentSale}
          deleteAllSales={deleteAllSales}
          deleteOneSale={deleteOneSale}
        />
      </main>
    </div>
  );
}

export default App;
