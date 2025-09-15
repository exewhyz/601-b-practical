import { useState } from "react";

const booksData = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "The Lord of the Rings", author: "JRR Tolkien" },
  { id: 3, title: "The Hobbit", author: "JRR Tolkien" },
  { id: 4, title: "The Hunger Games", author: "Suzanne Collins" },
];

export default function Library() {
  const [books, setBooks] = useState(booksData);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title,
      author,
    };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  const handleDelete = (bookId) => {
    const updated = books.filter((b) => b.id !== bookId);
    setBooks(updated);
  };

  const filterBooks = books.filter((book) => {
    return (
      book.title
        .toLowerCase()
        .trim()
        .includes(searchText.toLowerCase().trim()) ||
      book.author.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    );
  });

  return (
    <div>
      <h1>Library Management</h1>
      <div className="library-header">
        <div>
          <input
            type="text"
            placeholder="Search by title or authour"
            required
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            <button type="submit">Add Book</button>
          </form>
        </div>
      </div>
      <div className="books">
        <ul>
          {filterBooks.map((value) => {
            return (
              <li key={value.id}>
                {value.title} by {value.author}
                <button onClick={() => handleDelete(value.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
