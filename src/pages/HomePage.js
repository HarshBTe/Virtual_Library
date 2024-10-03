import { useState } from 'react';
import { booksData } from '../data';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <center><h2 className='heading'> Welcome to Virtual Book Library </h2></center>
      <center><SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /></center>
      <BookList books={filteredBooks} />
    </div>
  );
};

export default HomePage;
