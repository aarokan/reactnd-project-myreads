import React from 'react'
import './App.css'
import ListOfBooks from './ListOfBooks'

class ShelfChanger extends React.Component {
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ListOfBooks />  
                </div>
            </div>
        )
    }
}

export default ShelfChanger