class Person{
    firstname='';
    lastname='';

    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    name(){
        return `${this.firstname} ${this.lastname}`
    }

    whoAreYou () {
        return `i am ${this.firstname} ${this.lastname}`
    }
}

class Student extends Person{
    course='';
    constructor(firstname,lastname,course){
    super(firstname,lastname);
    this.course=course;
    }
    whoAreYou() {
        return `${super.whoAreYou()} i am studing ${this.course}`
    }
    getcourse(){
        return `${this.course} is the course i am doing`
    }
}

let ram = new Student('chethan','nagaraju','javaScript');
let shree=ram.whoAreYou();
console.log(shree)
// let ram=new person('chethan','nagaraju');
// let sha=ram.name();
// console.log(sha)
// let ash=ram.whoAreYou();
// console.log(ash)

// let boy=new person('nishanth','nagaraju');
// let she=boy.name();
// console.log(she)
// let hi=boy.whoAreYou();
// console.log(hi)