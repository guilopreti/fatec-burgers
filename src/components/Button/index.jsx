import "./styles.css";

const Button = ({ children, secondaryColor = false, onClick }) => {
  return (
    <button
      className={secondaryColor ? "button__grey" : "button__orange"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
