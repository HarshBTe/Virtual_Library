const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title, author, or genre..."
        className="search-bar"
      />
    );
  };
  
  export default SearchBar;
  