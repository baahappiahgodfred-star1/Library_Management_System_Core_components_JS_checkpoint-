import Book from "./models/Book.js";

import UserFactory from "./factories/UserFactory.js";

import StudentBorrowStrategy from "./strategies/StudentBorrowStrategy.js";

import TeacherBorrowStrategy from "./strategies/TeacherBorrowStrategy.js";

import NotificationService from "./observers/NotificationService.js";

import LibraryService from "./services/LibraryService.js";

import { log } from "./utils/logger.js";


// Create books
const book1 =
  new Book(
    "Clean Code",
    "Robert Martin"
  );


// Create users using Factory Pattern
const student =
  UserFactory.createUser(
    "student",
    "Ahmed"
  );

const teacher =
  UserFactory.createUser(
    "teacher",
    "Sarah"
  );


// Create services
const notificationService =
  new NotificationService();


// Strategy Pattern
const studentStrategy =
  new StudentBorrowStrategy();

const teacherStrategy =
  new TeacherBorrowStrategy();


// Dependency Injection
const studentLibrary =
  new LibraryService(
    studentStrategy,
    notificationService
  );

const teacherLibrary =
  new LibraryService(
    teacherStrategy,
    notificationService
  );


// Borrow books
studentLibrary.borrowBook(
  student,
  book1
);


// Return book
studentLibrary.returnBook(book1);


// Teacher borrow
teacherLibrary.borrowBook(
  teacher,
  book1
);


log("System finished");