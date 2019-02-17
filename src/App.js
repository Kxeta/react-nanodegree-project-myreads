import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

import { MyReads, Search, BookDetails, PageNotFound } from './containers';

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
    const { books } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MyReads books={books} updateShelf={this.changeShelfHandler} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Search books={books} updateShelf={this.changeShelfHandler} />
            )}
          />
          <Route path="/book/:bookId" render={() => <BookDetails />} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
