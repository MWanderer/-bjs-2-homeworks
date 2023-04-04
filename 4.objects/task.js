function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined){
    let marks = [];
    this.marks = [mark]
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...rest) {
  if (this.marks === undefined) {
    this.marks = [...rest]
  } else {
    this.marks.push(...rest);
  }
}

Student.prototype.getAverage = function () { 
  let sum = 0;
  for (let n = 0; n < this.marks.length; n++) {
    sum = sum + this.marks[n];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason){
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}