import styles from "./Card.module.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
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
  ...props
}: CardProps) {
  return (
    <div
      style={{ width: fullWidth ? "100%" : "auto", ...customStyles }}
      className={`${styles.card} ${customClass || ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
