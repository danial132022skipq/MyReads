import BookComponent from "./BookComponent";


function ReadingShelf({booksData, effect}) {

    return (
        <div className="bookshelf">
                    <h2 className="bookshelf-title">Read 😃✨</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        booksData.length === 0 && (
                            <div>There are no books on read shelf 😯</div> 
                        )
                        
                    }
                    {
                        booksData.map((book) => 
                        <li key={book.id}>
                        <BookComponent id= {book.id} title= {book.title} author={book.authors[0]} imageURL = {book.imageLinks.thumbnail} shelf = {book.shelf} effect = {effect}/>
                        </li>
                        )
                    }
                    </ol>
                    </div>
                </div>
    );

}

export default ReadingShelf;