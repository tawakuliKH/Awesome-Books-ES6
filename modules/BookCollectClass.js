export default class BookCollect {
  constructor() {
    this.books = [];
  }

  removeBook(index) {
    this.books = this.books.filter((item, i) => i !== index);
    localStorage.setItem('Books', JSON.stringify(this.books));
    window.location.reload();
  }

  addBook(BookName, Author) {
    const book = {
      name: BookName,
      author: Author,
    };
    this.books.push(book);
    localStorage.setItem('Books', JSON.stringify(this.books));
  }
}
