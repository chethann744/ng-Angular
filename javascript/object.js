const car ={
    name:'hyunday',
    cost:'10000',
    model:'2016'
};

let obj=Object.keys(car);
console.log(obj)

let objj=Object.values(car);
console.log(objj)

const car2={
    name:'honda',
    cost:'20000',
    model:'2015'
};
let carobj=Object.assign(car,car2);
console.log(carobj)

const man={
    firstname:'chethan'
}