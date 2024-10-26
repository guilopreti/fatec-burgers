import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import storeProducts from "./assets/products/products";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [products, setProducts] = useState(storeProducts);
  const [filteredProducts, setFilteredProducts] = useState(storeProducts);
  const [currentSale, setCurrentSale] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
      document.querySelector(".modal-section").style.display = "flex";
    } else {
      document.body.style.overflow = "";
      document.querySelector(".modal-section").style.display = "none";
    }
  }, [modal]);

  const showModal = () => {
    setModal(!modal);
    setCurrentSale([]);
  };

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
      buyProduct.qtd = 1;
      setCurrentSale([...currentSale, buyProduct]);
    } else {
      existProduct.qtd++;
      const otherProductsSale = currentSale.filter(
        ({ id }) => id !== existProduct.id
      );
      setCurrentSale([...otherProductsSale, existProduct]);
    }
  };

  const deleteOneSale = (idDelete) => {
    const actualProduct = currentSale.find(({ id }) => id === idDelete);
    actualProduct.qtd--;

    if (actualProduct.qtd) {
      const newSalesList = currentSale.map((product) => {
        if (product.id === actualProduct.id) {
          return actualProduct;
        } else {
          return product;
        }
      });
      setCurrentSale(newSalesList);
    } else {
      const actualSales = currentSale.filter(({ id }) => {
        return id !== idDelete;
      });
      setCurrentSale(actualSales);
    }
  };

  const deleteAllSales = () => {
    setCurrentSale([]);
  };

  const changeSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="App">
      <Modal setModal={setModal} />
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
          showModal={showModal}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
