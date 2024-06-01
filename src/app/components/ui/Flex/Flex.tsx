import styles from "./Flex.module.css";

interface FlexProps {
  direction?: "row" | "column";
  horizontal?: "left" | "center" | "right";
  vertical?: "top" | "center" | "bottom";
  fullscreen?: boolean;
  gap?: number;
  customStyles?: object;
  customClass?: string;
  children: React.ReactNode;
}
export default function Flex({
  direction = "row",
  horizontal = "center",
  vertical = "center",
  gap = 0,
  fullscreen = false,
  customStyles,
  customClass,
  children,
}: FlexProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: direction === "row" ? horizontal : vertical,
        alignItems: direction === "row" ? vertical : horizontal,
        gap: `${gap}px`,
        ...(fullscreen && { width: "100%", height: "100%" }),
        ...customStyles,
      }}
      className={`${styles.flex} ${customClass || ""}`}
    >
      {children}
    </div>
  );
}
