import React from 'react';
import BookListItem from './BookListItem';
import { PropTypes } from 'prop-types';

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books &&
            props.books.map((book, key) => (
              <li key={key}>
                <BookListItem book={book} updateShelf={props.updateShelf} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  updateShelf: PropTypes.func,
  book: PropTypes.object,
};

export default BookShelf;
