import firebase from "../firebase";

const db = firebase.ref("/authors");

class AuthorData {
  getAll() {
    return db;
  }
}

export default new AuthorData();
