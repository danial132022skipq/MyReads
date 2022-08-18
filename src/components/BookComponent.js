import { useState } from 'react';
import * as BookAPI from '../BooksAPI';

function BookComponent({ id, title, author, imageURL, shelf, effect}) {

    let [shelfs, setShelf] = useState(shelf);

    function updateShelf(value) {
        const changeShelf = async () => {
            await BookAPI.update(id, value);
            setShelf(value);
        }
        if (effect !== null) {
            const getBooks = async () => {
                const response = await BookAPI.getAll();
        
                effect(response);
              }
            getBooks();
        }
        
        changeShelf();
       
        
      

    }

    return (
        <div className="book">
            <div className="book-top">
            <div
                className="book-cover"
                style={{
                width: 128,
                height: 192,
                backgroundImage:
                    `url(${imageURL})`,
                }}
            ></div>
            <div className="book-shelf-changer">
            {
                    shelf === 'currentlyReading' && (
                        <select defaultValue={shelfs} onChange={(event) => updateShelf(event.target.value)}>
                            <option value="none" disabled> Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read" >Read</option>
                            <option value="none">None</option>
                        </select>
                    )
                }
                {
                    shelf === 'wantToRead' && (
                        <select defaultValue={shelfs} onChange={(event) => updateShelf(event.target.value)}>
                            <option value="none" disabled> Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read" >Read</option>
                            <option value="none">None</option>
                        </select>
                    )
                }
                {
                    shelf === 'read' && (
                        <select defaultValue={shelfs} onChange={(event) => updateShelf(event.target.value)}>
                            <option value="none" disabled> Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    )
                }
                {
                    shelf === 'none' && (
                        <select defaultValue={shelfs} onChange={(event) => updateShelf(event.target.value)}>
                            <option value="none" disabled> Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read" >Read</option>
                            <option value="none">None</option>
                        </select>
                    )
                }
                
            </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author}</div>
        </div>
    );

}

export default BookComponent;