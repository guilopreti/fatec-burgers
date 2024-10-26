import Button from "../Button";
import { BsTriangleFill } from "react-icons/bs";

import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Fatec Burgers. Todos os direitos reservados.</p>
      <Button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <BsTriangleFill />
      </Button>
    </footer>
  );
};

export default Footer;
