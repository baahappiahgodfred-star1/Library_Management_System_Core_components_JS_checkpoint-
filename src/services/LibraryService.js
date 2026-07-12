export default class LibraryService {

    constructor(strategy, notificationService) {
  
      // Dependency Injection
      this.strategy = strategy;
      this.notificationService =
        notificationService;
    }
  
    borrowBook(user, book) {
  
      if (book.available) {
  
        book.borrowBook();
  
        this.strategy.borrow(user, book);
  
        this.notificationService.notify(
          `${book.title} borrowed successfully`
        );
  
      } else {
  
        console.log("Book unavailable");
      }
    }
  
    returnBook(book) {
  
      book.returnBook();
  
      this.notificationService.notify(
        `${book.title} returned successfully`
      );
    }
  }