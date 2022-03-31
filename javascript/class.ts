class person{
    firstname='';
    lastname='';

    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    name(){
        return `${this.firstname} ${this.lastname}`
    }

    whoAreYou(){
        return `i am ${this.firstname} ${this.lastname}`
    }
}
let ram=new person('chethan','nagaraju');
let sha=ram.name();
console.log(sha)
let ash=ram.whoAreYou();
console.log(ash)

let boy=new person('nishanth','nagaraju');
let she=boy.name();
console.log(she)
let hi=boy.whoAreYou();
console.log(hi)