import { useState } from "react";
import useBoksContext from "../hooks/use-books-context";


function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const {editBookById} = useBoksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title)
  }
  return <form onSubmit={handleSubmit} className="boot-edit">
    <label>Title</label>
    <input className="input" value={title} onChange={handleChange} />
    <button className="button is-primary">
      Save
    </button>

  </form>;
}

export default BookEdit;
