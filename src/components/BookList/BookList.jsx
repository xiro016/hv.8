import { useDispatch, useSelector } from "react-redux";

import WithService from "../hoc-helpers/WithService";
import { Error, Spinner } from "../";
import { fetchBooks } from "../../store/actions/bookListCreator";
import BooklListItem from "./BooklListItem";
import "./styles.module.scss";
import { useEffect } from "react";

const BookList = ({ service }) => {
  // service.getBooks().then((books) => console.log(books))
  useEffect(() => {
    dispatch(fetchBooks(service));
  }, []);

  const { books, isLoading, error } = useSelector(
    (state) => state.BookListReducer
  );
  const dispatch = useDispatch();

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <ul>
      {isLoading ? (
        <Spinner />
      ) : (
        books?.map((book) => (
          <BooklListItem
            key={`books-item-${book.id}`}
            book={book}
            addToCart={(id) => console.log(id)}
          />
        ))
      )}
    </ul>
  );
};

export default WithService(BookList);
