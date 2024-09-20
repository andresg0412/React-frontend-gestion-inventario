import styles from "./Text.module.css";
function Price ({ children, ...props }) {
    return (
        <span
            className={styles.price}
            {...props}
        >
            {children}
        </span>
    );
}

export default Price;