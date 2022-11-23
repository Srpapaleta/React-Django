import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";

export function BookCard({ book }) {
  const imageUrl = book.poster_path;
  return (
    <li className={styles.BookCard}>
      <Link to={"/books/" + book.id}>
        <img
          width={230}
          height={345}
          className={styles.bookImage}
          src={imageUrl}
          alt={book.title}
        />
        <div>{book.title}</div>
      </Link>
    </li>
  );
}
