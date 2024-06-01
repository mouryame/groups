import styles from "./Card.module.css";

interface CardProps {
  fullWidth?: boolean;
  customStyles?: object;
  customClass?: string;
  children: React.ReactNode;
}
export default function Card({
  fullWidth = false,
  customStyles,
  customClass,
  children,
}: CardProps) {
  return (
    <div
      style={{ width: fullWidth ? "100%" : "auto", ...customStyles }}
      className={`${styles.card} ${customClass || ""}`}
    >
      {children}
    </div>
  );
}
