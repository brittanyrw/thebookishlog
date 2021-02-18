import firebase from "../firebase";

const db = firebase.ref("/books");

class BookData {
  getAll() {
    return db;
  }
}

export default new BookData();
