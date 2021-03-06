import React from 'react'
import './App.css'

class ShelfChanger extends React.Component {
    handleChange = event => {
        this.props.onUpdateBook(this.props.book, event.target.value);
    };

    render() {
        const {category} = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleChange} value={category}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChanger