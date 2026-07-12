export default class TeacherBorrowStrategy {

    borrow(user, book) {
  
      console.log(
        `${user.name} borrowed ${book.title} for 30 days`
      );
    }
  }