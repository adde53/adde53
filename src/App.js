import React, {useEffect, useState} from 'react';
import Book from "./Book";
import './App.css';

const App = () => {

  const APP_ID = "27e2022d-bce6-49f0-8411-5007d570dd93";
  const APP_KEY = "M66s24ZmsuDrX0H7rOGpJG4n9kIb6pPo";

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');
  useEffect(() => {
    getBooks();
  }, [query]);
  const getBooks = async () => {
    const response = await fetch(
        `https://api.nytimes.com/svc/books/v3/reviews.json?title=${query}&api-key=${APP_KEY}`
    );
    const data = await response.json();
    setBooks(data.results);
    console.log(data.results);
  }
  const updateSearch = e =>{
    setSearch(e.target.value);
  };
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);

  };
  return (
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar"
                 type = "text"
                 value={search}
                 onChange={updateSearch}
          />
          <button className="search-button" type = "submit">
            Search
          </button>
        </form>
        {books.map(book => (
            <Book className= "book"
                  key = {book.isbn13}
                  title={book.book_title}
                  author={book.book_author}
                  summary={book.summary}
                  isbn ={book.isbn13}
            />
        ))};
      </div>
  );
}

export default App;
