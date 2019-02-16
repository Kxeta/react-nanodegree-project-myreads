import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

import { MyReads, Search, BookDetails } from './containers';

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  changeShelfHandler = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
      this.setState(prevState => {
        return {
          books: [
            ...prevState.books.filter(bookI => book.id !== bookI.id),
            { ...book, shelf },
          ],
        };
      }),
    );
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MyReads
              books={this.state.books}
              updateShelf={this.changeShelfHandler}
            />
          )}
        />
        <Route
          path="/search"
          render={() => <Search updateShelf={this.changeShelfHandler} />}
        />
        <Route path="/book/:bookId" render={() => <BookDetails />} />
      </div>
    );
  }
}

export default BooksApp;
