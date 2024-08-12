import React from 'react';
import './Books.css'; // Import the CSS file for the Books page

// Sample data for books with images
const booksList = [
  { id: 1, title: 'Book One', author: 'Author A', genre: 'Fiction', price: '$10.00', image: 'path/to/image1.jpg' },
  { id: 2, title: 'Book Two', author: 'Author B', genre: 'Non-Fiction', price: '$15.00', image: 'path/to/image2.jpg' },
  { id: 3, title: 'Book Three', author: 'Author C', genre: 'Science Fiction', price: '$20.00', image: 'path/to/image3.jpg' }
];

function Books() {
  return (
    <div className="dash-books-container">
      <h2 className="dash-books-title">Books Management</h2>
      <h3>Book Requests</h3>
      <table className="dash-books-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {booksList.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td><img src={book.image} alt={book.title} className="dash-books-image" /></td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.price}</td>
              <td>
                <button className="dash-books-edit-button">Accept</button>
                <button className="dash-books-remove-button">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <h3>All Books</h3>
      <div className="dash-books-card-container">
        {booksList.map(book => (
          <div className="dash-books-card" key={book.id}>
            <img src={book.image} alt={book.title} className="dash-books-card-image" />
            <div className="dash-books-card-content">
              <h4 className="dash-books-card-title">{book.title}</h4>
              <p className="dash-books-card-author">by {book.author}</p>
              <p className="dash-books-card-genre">{book.genre}</p>
              <p className="dash-books-card-price">{book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
