# MyReads Project

This is the result for the final assessment project for Udacity's React Fundamentals course First Module.

The goal of this project is to create a book tracking app, so you can manage the books that you have read, wanting to read or is currently reading. There's a Search page that you can search for the books that you want to track (Be aware for the whitelisted short collection of available search terms for you to use this app - [SEARCH_TERMS.md)](./SEARCH_TERMS.md).

The challenge here is to create this app using the best practice learned so far in the course, using only really needed libraries and knowing when you should use a React Class Component or a Functional Component.

You can check the final result [here](http://kxeta-my-reads.surge.sh/)

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── APP_DESIGN.md # A file showing the basic structure of the approach in this project.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── images # Helpful images for the app.
    │   ├── loading.gif
    ├── components # Components for the app.
    │   ├── BookListItem.js # Individual book item showed on the Search and MyReads containers
    │   ├── BookShelf.js # Shelf component to be used on MyReads containers to display a list of BookListItem
    │   └── index.js
    ├── containers # Containers for the app.
    │   ├── BookDetails.js # Extra page, to get more details about the book
    │   ├── MyReads.js # Main page showing the list of shelfs with their own books
    │   ├── Search.js # Search page where you can search to add books to the shelves
    │   └── index.js
    ├── index.css # Global styles.
    └── index.js # File used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, they've provided a backend server for me to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
