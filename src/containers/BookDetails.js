import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

class BookDetails extends Component {
  state = {
    book: null,
    loading: true,
  };

  componentDidMount() {
    const { bookId } = this.props.match.params;
    BooksAPI.get(bookId).then(book => this.setState({ book, loading: false }));
  }

  render() {
    const { book, loading } = this.state;
    return loading ? (
      <div className="loading" />
    ) : (
      <div className="list-books">
        <button
          className="close-search"
          onClick={() => this.props.history.push('/')}
        >
          Close
        </button>

        <div className="list-books-title">
          <h1>{book.title}</h1>
        </div>
        <div className="book-details">
          <div
            className="book-cover"
            style={{
              width: 170,
              height: 210,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          />
          <div className="book-info">
            <div className="book-authors book-authors-big">
              <span className="book-info-titles">Authors:</span>
              {book.authors.map(
                (author, key) => `${key > 0 ? ', ' : ''}${author}`,
              )}
            </div>
            <div className="book-description">
              <span className="book-info-titles">Description:</span>
              {book.description}
            </div>
            {book.averageRating && (
              <div className="book-rating">
                <span className="book-info-titles">Average Rating:</span>
                {book.averageRating} / 5
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

BookDetails.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default withRouter(BookDetails);
