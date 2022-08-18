import {Link} from "react-router-dom"
import { useState, useEffect } from 'react';

import * as BookAPI from '../BooksAPI'
import BookComponent from "./BookComponent";

function SearchComponent() {

    const [query, setQuery] = useState("");
    let [books, setBooks] = useState([]);

    function updateQuery(query) {
        setQuery(query);
    }

    // function searchBook(query) {
    //     const getSearchBook = async () => {
    //         console.log(query);
    //         const response = await BookAPI.search(query, 20);
    //         setBooks(response);
    //     }

    //     getSearchBook();
    // }

    useEffect(() => {

        const getBooks = async () => {
            const response = await BookAPI.getAll();

            setBooks(response);
        }

        getBooks();
    }, []);

    let showingResults = query === '' ? books : books.filter((b) => b.title.toLowerCase().includes(query.toLowerCase()));
    
    console.log(showingResults);

    return (
        
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" >Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title"
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {
                    showingResults.length === 0 && (
                        <div>Sorry 😢, we couldn't find your book.</div> 
                    )
                    
                }
            {
                    showingResults.map((book) => 
                        <li key={book.id}>
                            <BookComponent id= {book.id} title={book.title} author={book.authors[0]} imageURL = {book.imageLinks.thumbnail} shelf = {book.shelf} effect = {null}/>
                        </li>
                    )
            }
            </ol>   
          </div>
        </div>
      );
}

export default SearchComponent;