import { useContext } from "react";
import BooksContext from "../context/books";


function useBoksContext () {
    return useContext(BooksContext);
  }

  export default useBoksContext;