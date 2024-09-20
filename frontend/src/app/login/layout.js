import styles from "./layout.module.css";
export default function LayoutLogin({ children }) {
    return (
        <div className={styles.containerLogin}>
            {children}
        </div>
    );
}