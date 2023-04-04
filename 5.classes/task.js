// Task 1 - Printed edition

class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;   
    }

    fix() {
    this.state = this.state *1.5;
    }RUGt

    set state(curstate) {
        if (curstate < 0) {
            this._state = 0;
        } else if (curstate > 100) {
            this._state = 100
        } else {
            this._state = curstate;
        }
    }

    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    
    constructor(author, name, releaseDate, pagesCount) {
        super(name,releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author,name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author,name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author,name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Task 2 - Library

class Library {
    constructor(name) {
        this.name = name;
        let books = [];
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30)
        this.books.push(book);
    }

    findBookBy(type, value) {
      let searchResult = this.books
      .find(book => book[type] === value)
      if (searchResult === undefined) return null;
      return searchResult;
    }

    giveBookByName(bookName) {

        let searchResult = this.books
        .find((book) => book.name === bookName)
        let IndResult = this.books.findIndex((book) => book.name === bookName);
        if (searchResult === undefined) return null;
        else this.books.splice(IndResult, 1);
        return searchResult;
    }
}

// Task 3 - Gradebook

class Student{
    constructor(fullName) {
      this.name = fullName;
      this.subjects = [];
    }
    
    addMark(mark, subject) {
      if (mark < 1 || mark > 5) return 'Ошибка, оценка должна быть числом от 1 до 5';
      (this.subjects[subject] === undefined) ? this.subjects[subject] = [mark] : this.subjects[subject].push(mark);
    }
    
    getAverageBySubject(subject) {
      if (this.subjects[subject] === undefined) return "Несуществующий предмет";
      let sum = 0;
      this.subjects[subject].forEach(item => sum = sum + item);
      return sum / this.subjects[subject].length;
    }
    
    getAverage() {
      let sumAdverage = 0;
      let subjects = Object.keys(this.subjects);
      subjects.forEach(item => sumAdverage = sumAdverage + this.getAverageBySubject(item))
      return sumAdverage / subjects.length;
    }
    
    exclude(reason) {
      delete this.subjects;
      this.excluded = reason;
      return reason;
    }
  }