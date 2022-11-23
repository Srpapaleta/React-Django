import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
import styles from "./BooksGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";
import booksJsonData from '../utils/books.json';
import categoryBooksJsonData from '../utils/category_books.json';

export function BooksGrid({ search }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (search.category != '' && search.category in categoryBooksJsonData) {
      setBooks(categoryBooksJsonData[search.category]);
    }
    else {
      setBooks(booksJsonData);
    }
    setHasMore(false);
    setIsLoading(false);
  }, [search.search, search.category, page]);

  if (!isLoading && books.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
      dataLength={books.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.BooksGrid}>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
