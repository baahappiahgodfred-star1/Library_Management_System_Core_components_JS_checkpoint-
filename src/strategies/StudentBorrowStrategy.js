export default class StudentBorrowStrategy {

    borrow(user, book) {
  
      console.log(
        `${user.name} borrowed ${book.title} for 7 days`
      );
    }
  }