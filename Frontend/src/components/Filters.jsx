import styles from "./Filters.module.css";
import { useSearchParams } from "react-router-dom";

export function Filters() {

    const [query, setQuery] = useSearchParams();
    const search = query.get("search");
    const category = query.get("category");

    const handleClick = (parameter) => (event) => {
        event.preventDefault();
        setQuery({ search: search ? search : '', category: parameter });
    };

    return (
        <div className={styles.filtersContainer}>
            <button className={styles.filtersButton} onClick={handleClick('Novela')}>Novela</button>
            <button className={styles.filtersButton} onClick={handleClick('Ficción')}>Ficción</button>
            <button className={styles.filtersButton} onClick={handleClick('Drama')}>Drama</button>
            <button className={styles.filtersButton} onClick={handleClick('Historia')}>Historia</button>
            <button className={styles.filtersButton} onClick={handleClick('Biografía')}>Biografía</button>
        </div>
    )
}