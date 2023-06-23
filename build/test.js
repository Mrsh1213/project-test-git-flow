"use strict";
function sum(a, b) {
    return (a + b).toString();
}
var Job;
(function (Job) {
    Job["DEVELOPER"] = "developer";
    Job["PRODUCT_OWNER"] = "product owner";
})(Job || (Job = {}));
;
let person = { name: "reza", age: 22, job: Job.PRODUCT_OWNER };
person.age = 22;
person.name = "ali";
person.job = Job.DEVELOPER;
let ar = [person];
let a = sum(1, 2);
console.log(ar);
console.log(person.name);
class Student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    get ageValue() {
        return person.age;
    }
    get nameValue() {
        return person.name;
    }
    print() {
        console.log(Student);
    }
}
class Courses extends Student {
    constructor(student) {
        super(student.name, student.age, student.email);
        this.course = [];
    }
    set addCource(v) {
        this.course.push(v);
    }
}
let stu = new Student("Mohammad Reza", 27, "mohammad@yahoo.com");
let course1 = new Courses(stu);
let c = { name: "arabi", grade: 19.25 };
course1.addCource = c;
console.log(stu);
console.log(course1);
//interface
