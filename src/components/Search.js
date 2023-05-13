const Search = () => {
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Search...."
      ></input>
      <button className="search-button" type="submit">
        Search
      </button>
    </div>
  );
};

export default Search;
