function sum(a:number,b:number):string {
    return (a+b).toString();
}
enum Job {DEVELOPER="developer",PRODUCT_OWNER="product owner"};

let person:{
    name:string;
    age:number;
    job:Job
}={name:"reza",age:22,job:Job.PRODUCT_OWNER};
person.age=22;
person.name="ali";
person.job=Job.DEVELOPER;
let ar:Array<object>=[person];
let a:string=sum(1,2);
console.log(ar);
console.log(person.name);
//class
interface Person {
    name:string,
    age:number,
    email:string,
    print():void
}
class Student implements Person{
     name: string;
     age: number;
     email: string;
    constructor(name: string,age: number,email: string) {
        this.name=name;
        this.age=age;
        this.email=email;
    }


    
    public get ageValue() : number {
        return person.age;
    }
    public get nameValue() : string {
        return person.name;
    }
    public print(): void {
        console.log(Student);
        
    }

    
    
}
interface Course {
    name:string,
    grade:number
}
class Courses extends Student {
     course: Course[] = [];
    constructor( student:Student) {
        super(student.name,student.age,student.email)
    }

    public set addCource(v : Course) {
        this.course.push(v);
    }
    
}

let stu:Student=new Student("Mohammad Reza",27,"mohammad@yahoo.com");
let course1:Courses=new Courses(stu);
let c:Course={name:"arabi",grade:19.25};
course1.addCource=c;

console.log(stu);
console.log(course1);

//interface

