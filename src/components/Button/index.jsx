import "./styles.css";

const Button = ({ children, secondaryColor = false, onClick }) => {
  return (
    <button
      className={secondaryColor ? "button__grey" : "button__green"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
