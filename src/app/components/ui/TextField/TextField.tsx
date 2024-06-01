import Text from "../Text/Text";
import styles from "./TextField.module.css";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  customStyles?: object;
  customClass?: string;
  [key: string]: any;
}

export default function TextField({
  label,
  placeholder,
  type = "text",
  customStyles,
  customClass,
  ...props
}: TextFieldProps) {
  return (
    <label>
      <Text variant="caption">{label}</Text>
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        style={{ ...customStyles }}
        className={`${styles.textField} ${customClass || ""}`}
      />
    </label>
  );
}
