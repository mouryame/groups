import TextField from "../ui/TextField/TextField";
import styles from "./GroupSearch.module.css";

export default function GroupSearch() {
  return (
    <div className={styles.groupSearch}>
      <TextField label="Search groups" />
    </div>
  );
}
