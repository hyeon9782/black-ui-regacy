import { basicButton } from "../../styles/button.css";

type ButtonColor = "black" | "blue" | "red";

type ButtonSize = "sm" | "md" | "lg";

type ButtonVariant = "solid" | "outline";

type ButtonProps = {
  label: string;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick: () => void;
};

const Button = ({
  label,
  color = "black",
  size = "md",
  variant = "solid",
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={basicButton}>
      {label}
    </button>
  );
};

function selectedStyles(color, size, variant) {}

export default Button;
