
import BookShow from "./BookShow";
import useBoksContext from "../hooks/use-books-context";



function BookList() {
  const  {books} = useBoksContext ();


  const renderedBooks = books.map((book) => {
    return <BookShow  key={book.id} book={book} />
  })
  return (
    <div className="book-list">
      {renderedBooks}
    </div>

  );

}

export default BookList;
