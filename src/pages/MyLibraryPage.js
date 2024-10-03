import { useContext } from 'react';
import { MyLibraryContext } from '../context/MyLibraryContext';

const MyLibraryPage = () => {
  const { myLibrary, removeFromLibrary } = useContext(MyLibraryContext);

  return (
    <div className="my-library">
      <h2 className='heading'>My Library</h2>
      {myLibrary.length > 0 ? (
        <ul>
          {myLibrary.map((book) => (
            <li key={book.id} className="book-item">
              <span>{book.title} by {book.author}</span>
              <button onClick={() => removeFromLibrary(book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your library is empty.</p>
      )}
    </div>
  );
};

export default MyLibraryPage;
