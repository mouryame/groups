import styles from "./Text.module.css";

interface TextProps {
  variant?: "default" | "title" | "body" | "caption";
  customClass?: string;
  children: React.ReactNode;
}

export default function Text({
  variant = "default",
  customClass,
  children,
}: TextProps) {
  return (
    <p className={`${styles[variant]} ${customClass || ""}`}>{children}</p>
  );
}
