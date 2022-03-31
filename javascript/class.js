var person = /** @class */ (function () {
    function person(firstname, lastname) {
        this.firstname = '';
        this.lastname = '';
        this.firstname = firstname;
        this.lastname = lastname;
    }
    person.prototype.name = function () {
        return "".concat(this.firstname, " ").concat(this.lastname);
    };
    person.prototype.whoAreYou = function () {
        return "i am ".concat(this.firstname, " ").concat(this.lastname);
    };
    return person;
}());
var ram = new person('chethan', 'nagaraju');
var sha = ram.name;
console.log(sha);
var ash = ram.whoAreYou;
console.log(ash);
var boy = new person('nishanth', 'nagaraju');
var she = ram.name;
console.log(she);
var hi = ram.whoAreYou;
console.log(hi);
