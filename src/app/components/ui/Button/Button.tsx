import styles from "./Button.module.css";

interface ButtonProps {
  variant?: "default" | "primary" | "secondary";
  fullWidth?: boolean;
  customStyles?: object;
  customClass?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "default",
  fullWidth = false,
  customStyles,
  customClass,
  children,
}: ButtonProps) {
  return (
    <button
      style={{ width: fullWidth ? "100%" : "auto", ...customStyles }}
      className={`${styles[variant]} ${customClass || ""}`}
    >
      {children}
    </button>
  );
}
