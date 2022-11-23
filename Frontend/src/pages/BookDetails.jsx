import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import styles from "./BookDetails.module.css";
import booksJsonData from '../utils/books.json';

export function BookDetails() {
  const { bookId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setBook(booksJsonData[0]);
    booksJsonData.forEach(element => {
      if (element.id == bookId) {
        setBook(element);
      }
    });
    setIsLoading(false);
  }, [bookId]);

  if (isLoading) {
    return <Spinner />;
  }

  const imageUrl = book.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.bookImage}`}
        src={imageUrl}
        alt={book.title}
      />
      <div className={`${styles.col} ${styles.BookDetails}`}>
        <p className={styles.firstItem}>
          <strong>Titulo:</strong> {book.title}
        </p>
        <p>
          <strong>Género:</strong> {book.genre}
        </p>
        <p>
          <strong>Descripción:</strong> {book.overview}
        </p>
      </div>
    </div>
  );
}
