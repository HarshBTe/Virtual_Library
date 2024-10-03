import { createContext, useState } from 'react';


export const MyLibraryContext = createContext();


export const MyLibraryProvider = ({ children }) => {
  const [myLibrary, setMyLibrary] = useState([]);


  const addToLibrary = (book) => {
    setMyLibrary((prevLibrary) => [...prevLibrary, book]);
  };

  
  const removeFromLibrary = (bookId) => {
    setMyLibrary((prevLibrary) => prevLibrary.filter((book) => book.id !== bookId));
  };

  return (
    <MyLibraryContext.Provider value={{ myLibrary, addToLibrary, removeFromLibrary }}>
      {children}
    </MyLibraryContext.Provider>
  );
};
