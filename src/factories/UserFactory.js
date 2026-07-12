import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";

export default class UserFactory {

  static createUser(type, name) {

    if (type === "student") {

      return new Student(name);
    }

    if (type === "teacher") {

      return new Teacher(name);
    }

    throw new Error("Invalid user type");
  }
}