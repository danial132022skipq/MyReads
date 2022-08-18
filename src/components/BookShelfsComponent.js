import {Link} from "react-router-dom"
import CurrentlyReadingShelf from "./BSCRComp";
import WantToReadShelf from "./BSWTRComp";
import ReadingShelf from "./BSRComp";

import {useState, useEffect} from 'react';
import * as BookAPI from '../BooksAPI';

function BookShelfComponent() {

    let [allBooks, setAllBooks] = useState([]);
    let [crtReading, setCrtReading] = useState([]);
    let [wtRead, setWTRead] = useState([]);
    let [read, setread] = useState([]);

    function refreshAll(books) {

        
        let currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
        let wantToRead = books.filter((book) => book.shelf === 'wantToRead');
        let read = books.filter((book) => book.shelf === 'read');
  
        setCrtReading(currentlyReading);
        setWTRead(wantToRead);
        setread(read);

    }
  
    useEffect(()=>{
  
      const getBooks = async () => {
        const response = await BookAPI.getAll();

        setAllBooks(response);
        refreshAll(allBooks);
      }
  
      getBooks();
  
    }, [allBooks]);
  

    return (
        <div className="app">
            <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads: M. Danial Pasha</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <CurrentlyReadingShelf booksData = {crtReading} effect = {setAllBooks}/>
                    <WantToReadShelf booksData = {wtRead} effect = {setAllBooks}/>
                    <ReadingShelf booksData = {read} effect = {setAllBooks}/>
                </div>
            </div>
            <div className="open-search">
               <Link to="/search" >Search
               </Link>
            </div>
            </div>    
        </div>
    );
}

export default BookShelfComponent;