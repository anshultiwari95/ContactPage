import "./Button.css";

const Button = ({ isOutLine, icon, text, ...rest }) => {
  return (
    <button {...rest} className={isOutLine ? "outline_btn" : "primary_btn"}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
