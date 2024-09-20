import styles from './Text.module.css';

function Titulo1 ({ children, ...props }) {
    return (
        <h1
            className={styles.titulo1}
            {...props}
        >
            {children}
        </h1>
    )
}

export default Titulo1;