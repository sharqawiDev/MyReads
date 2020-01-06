# MyReads Project

The final assessment project for Udacity's React Fundamentals course. The goal of this project is to solidify the main principle of state and props management in React. The project simply presents your library in the form of three shelves:

    * Currently Reading
    * Want to Read
    * Read

## Requirements

Before running the project, you have to ensure that your device have:

-   Node.JS
-   NPM (Node Package Manager)
-   Yarn (Optional)

## Installation

To run the project, execute the following commands:

-   `npm install` or `yarn`
-   `npm start` or `yarn start`

## What You're Getting

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── icon.png # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── components # the directory that contains all sub-components
    │   ├── Book.js
    │   ├── BooksGrid.js
    │   ├── Header.js
    │   ├── SearchBar.js
    │   ├── SearchPage.js
    │   └── Shelves.js
    |
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simulate the fetching process, a backend server is included to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

-   [`getAll`](#getall) <!-- get all books that belongs to a certain shelf -->
-   [`update`](#update) <!-- update the shelf where the book belongs -->
-   [`search`](#search) <!-- search for books using certain keywords -->
-

### `getAll`

Method Signature:

```js
getAll();
```

-   Returns a Promise which resolves to a JSON object containing a collection of book objects.
-   This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

-   book: `<Object>` containing at minimum an `id` attribute
-   shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
-   Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

-   query: `<String>`
-   Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Author

**Abdulrahman Elsharqawi**
