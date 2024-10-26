import Button from "../Button";
import "./styles.css";

const Modal = ({ setModal }) => {
  return (
    <section className="modal-section">
      <div className="modal-div">
        <div className="modal-title-div">
          <h3>Pedido Realizado!</h3>
          <Button secondaryColor onClick={() => setModal()}>
            X
          </Button>
        </div>

        <p>
          Enviamos um email e um SMS contendo mais instruções, não se esqueça de
          nos avaliar! Em breve os melhores sabores estarão com você! A Fatec
          Burguers agradece!
        </p>

        <div className="modal-close-div">
          <Button onClick={() => setModal()}>Fechar</Button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
