import styles from "./Filters.module.css";

export function Filters(){
    return <div className={styles.filtersContainer}>
        <button className={styles.filtersButton}>Drama</button>
        <button className={styles.filtersButton}>Horror</button>
        <button className={styles.filtersButton}>Arte</button>
        <button className={styles.filtersButton}>Bibliografía</button>
        <button className={styles.filtersButton}>Misterio</button>
        <button className={styles.filtersButton}>Ficción</button>
        <button className={styles.filtersButton}>Deportes</button>
        <button className={styles.filtersButton}>Aventura</button>
    </div>
}