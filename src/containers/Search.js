import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import { BookListItem } from '../components';
import { PropTypes } from 'prop-types';

class Search extends Component {
  state = {
    books: [],
    booksOnShelves: [],
    search: '',
  };

  changeShelfHandler = (book, shelf) => {
    this.setState(prevState => {
      return {
        ...prevState,
        books: [
          ...prevState.books.map(bookI => {
            if (book.id === bookI.id) {
              bookI.shelf = shelf;
            }
            return bookI;
          }),
        ],
      };
    });
    this.props.updateShelf(book, shelf);
  };

  onChangeHandler = e => {
    const { value } = e.target;
    this.setState(
      {
        search: value,
      },
      () =>
        this.state.search.trim().length
          ? BooksAPI.search(this.state.search).then(books =>
              this.updateBooksState(books),
            )
          : this.updateBooksState([]),
    );
  };

  onSearchSubmit = e => {
    e.preventDefault();
    BooksAPI.search(this.state.search).then(books =>
      this.updateBooksState(books),
    );
  };

  updateBooksState = books => {
    const { booksOnShelves } = this.state;
    if (books instanceof Array) {
      const resultBooks = books.map(book => {
        const existingBook = booksOnShelves.filter(
          bookOwn => bookOwn.id === book.id,
        );
        if (existingBook.length) {
          book.shelf = existingBook[0].shelf;
        }
        return book;
      });
      this.setState({ books: resultBooks });
    }
  };

  static getDerivedStateFromProps(props, state) {
    if (state.booksOnShelves !== props.books) {
      return { booksOnShelves: props.books };
    }
    return false;
  }

  componentDidMount() {
    this.setState({
      booksOnShelves: this.props.books,
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button
            className="close-search"
            onClick={() => this.props.history.push('/')}
          >
            Close
          </button>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <form onSubmit={this.onSearchSubmit}>
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.onChangeHandler}
                value={this.state.search}
                name="search"
              />
            </form>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book, key) => (
              <BookListItem
                book={book}
                key={key}
                updateShelf={this.changeShelfHandler}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.object,
  updateShelf: PropTypes.func,
  books: PropTypes.array,
};

export default withRouter(Search);
