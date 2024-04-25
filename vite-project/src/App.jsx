// import './config.mjs';
import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // use state to
  const [books, setBooks] = useState([]);
  console.log('App rendered');
  useEffect(() => {
    const getBooks = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data);
    }
    getBooks(`${import.meta.env.VITE_REACT_API_URL}/api/books`);
  }, []);
  const lis = books.map(book => <li key={book._id}>{book.title}</li>);

  return(
    <>
    <h1>book</h1>
        <ul>{lis}</ul>
    </>

  )
}

export default App
