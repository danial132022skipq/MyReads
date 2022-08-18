# MyReads Project

This is MyReads project which is built using the React Framework and Node Js. This project demonstrate how you can build a web application using React core concepts (components, react router, state management using useState hook and use of useEffect for making any external resource call like API calls, IO operations etc.). 

This web application has three book shelves (Currently Reading, Want to Read and Read) and the books will be placed by the user.
If the user wants to get new book he/she can look up for a book by searching the book.

The web application should maintain its state even when the browser is refreshed. 
The books should be held by the shelves in which there were placed by the user.

## How to setup the environment for the project

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

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

