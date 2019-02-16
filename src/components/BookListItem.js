import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const BookListItem = props => {
  const { book, updateShelf } = props;

  const onChangeShelf = e => {
    const newShelf = e.target.value;
    updateShelf(book, newShelf);
  };

  return (
    <div className="book">
      <Link to={`/book/${book.id}`}>
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 140,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select value={book.shelf || 'move'} onChange={onChangeShelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors.map((author, key) => (
            <p key={key}>{author}</p>
          ))}
        </div>
      </Link>
    </div>
  );
};

BookListItem.propTypes = {
  updateShelf: PropTypes.func,
  book: PropTypes.object,
};

export default BookListItem;
