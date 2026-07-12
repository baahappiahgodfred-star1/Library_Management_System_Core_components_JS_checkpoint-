export default class Book {

    constructor(title, author) {
  
      this.title = title;
      this.author = author;
      this.available = true;
    }
  
    borrowBook() {
  
      if (this.available) {
  
        this.available = false;
  
        console.log(`${this.title} borrowed`);
  
      } else {
  
        console.log("Book unavailable");
      }
    }
  
    returnBook() {
  
      this.available = true;
  
      console.log(`${this.title} returned`);
    }
  }