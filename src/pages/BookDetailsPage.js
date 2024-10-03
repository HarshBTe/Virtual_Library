import { useParams, useNavigate } from 'react-router-dom';
import { booksData } from '../data';
import { useContext } from 'react';
import { MyLibraryContext } from '../context/MyLibraryContext';

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const book = booksData.find((b) => b.id === parseInt(id));

  
  const { myLibrary, addToLibrary } = useContext(MyLibraryContext);

  const handleAddToLibrary = () => {
    
    if (myLibrary.find((b) => b.id === book.id)) {
      alert(`${book.title} is already in your library.`);
    } else {
      addToLibrary(book);
      alert(`${book.title} has been added to your library!`);

      
      navigate('/mylibrary');
    }
  };

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Publication Year:</strong> {book.publication_year}</p>
      <p>{book.description}</p>
      <button onClick={handleAddToLibrary}>Add to My Library</button>
    </div>
  );
};

export default BookDetailsPage;
