import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../ErrorNotice";
import Book from "./Book";
export default function Library() {
  const { userData } = useContext(UserContext);
  const [errorM, setError] = useState();
  const [isbn, setIsbn] = useState();
  let lib = userData.user.library;

  let userEmail = userData.user.email;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //   console.log(isbn);
      let getBook = await Axios.post(
        "http://localhost:5000/home/library/getBook",
        { bookIsbn: isbn },
        {
          headers: { "Content-Type": "application/JSON" },
        }
      );
      const { book } = getBook.data;
      // Add book to userData.user.library and make post req to add to db
      lib.push(book);

      userData.user.library.push(book);
      await Axios.post(
        "http://localhost:5000/home/library/add",
        {
          email: userEmail,
          book,
        },
        { headers: { "Content-Type": "application/JSON" } }
      );
    } catch (err) {
      setError("Incorrect ISBN entered");
      console.log(err);
    }
  };
  return (
    <div className="library-container">
      {errorM && (
        <ErrorNotice message={errorM} clearError={() => setError(undefined)} />
      )}
      <div className="form-container">
        <form className="register-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              id="library-add"
              type="text"
              placeholder="Book ISBN"
              className="form-control"
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="btn btn-primary btn-sm"
              type="submit"
              value="Add Book"
            />
          </div>
        </form>
      </div>
      <div className="books-container bg-light">
        {userData.user.library.map((book, index) => {
          return (
            <div key={index}>
              <Book book={book} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
