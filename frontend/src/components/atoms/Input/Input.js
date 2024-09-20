
import styles from "./Input.module.css";
function Input ({ children, ...props }) {
    return (
        <input
            className={styles.input}
            {...props}
        />
    );
}

export default Input;