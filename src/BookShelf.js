import React from 'react'
import './App.css'
import ListOfBooks from './ListOfBooks'

class BookShelf extends React.Component {
    render() {
        const {category, title, books} = this.props;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ListOfBooks category={category} books={books} />  
                </div>
            </div>
        )
    }
}

export default BookShelf