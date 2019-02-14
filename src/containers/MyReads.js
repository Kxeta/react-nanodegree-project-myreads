import React from 'react';
import { PropTypes } from 'prop-types';
import { BookShelf } from '../components';
import { withRouter } from 'react-router-dom';

const MyReads = props => {
  const shelves = [
    {
      type: 'currentlyReading',
      title: 'Current Reading',
    },
    {
      type: 'wantToRead',
      title: 'Want To Read',
    },
    {
      type: 'read',
      title: 'Read',
    },
  ];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {props.books ? (
            shelves.map((shelf, key) => (
              <BookShelf
                key={key}
                title={shelf.title}
                books={props.books.filter(book => book.shelf === shelf.type)}
                updateShelf={props.updateShelf}
              />
            ))
          ) : (
            <h2>Your shelves are empty =(</h2>
          )}
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => props.history.push('/search')}>
          Add a book
        </button>
      </div>
    </div>
  );
};

MyReads.propTypes = {
  history: PropTypes.object,
  updateShelf: PropTypes.func,
  books: PropTypes.array,
};

export default withRouter(MyReads);
