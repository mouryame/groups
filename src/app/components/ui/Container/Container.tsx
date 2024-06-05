import styles from "./Container.module.css";

interface ContainerProps {
  margin?: number | string;
  padding?: number | string;
  fullWidth?: boolean;
  customStyles?: object;
  customClass?: string;
  children: React.ReactNode;
}
export default function Container({
  margin = 0,
  padding = 0,
  fullWidth = false,
  customStyles,
  customClass,
  children,
}: ContainerProps) {
  return (
    <div
      style={{
        margin: typeof margin === "number" ? `${margin}px` : margin,
        padding: typeof padding === "number" ? `${padding}px` : padding,
        width: fullWidth ? "100%" : "auto",
        ...customStyles,
      }}
      className={styles.container}
    >
      {children}
    </div>
  );
}
