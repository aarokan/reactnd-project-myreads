import React from 'react'
import './App.css'
import ListOfBooks from './ListOfBooks'

class BookShelf extends React.Component {
    render() {
        // Extract data into distinct variables using destructuring
        const {category, title, books, onUpdateBook} = this.props;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ListOfBooks 
                        category={category} 
                        books={books} 
                        onUpdateBook={onUpdateBook}
                    />  
                </div>
            </div>
        )
    }
}

export default BookShelf