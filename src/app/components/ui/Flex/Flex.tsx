import styles from "./Flex.module.css";

interface FlexProps {
  direction?: "row" | "column";
  horizontal?: "left" | "center" | "right" | "space-between" | "space-around";
  vertical?: "top" | "center" | "bottom" | "space-between" | "space-around";
  fullWidth?: boolean;
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
  fullWidth = false,
  fullscreen = false,
  customStyles,
  customClass,
  children,
}: FlexProps) {
  const flexValues = {
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
    left: "flex-start",
    right: "flex-end",
    "space-between": "space-between",
    "space-around": "space-around",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent:
          direction === "row" ? flexValues[horizontal] : flexValues[vertical],
        alignItems:
          direction === "row" ? flexValues[vertical] : flexValues[horizontal],
        gap: `${gap}px`,
        width: fullWidth ? "100%" : "auto",
        ...(fullscreen && { width: "100%", height: "100vh" }),
        ...customStyles,
      }}
      className={`${styles.flex} ${customClass || ""}`}
    >
      {children}
    </div>
  );
}
