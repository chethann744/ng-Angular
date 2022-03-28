// let fullname= "chethan nagaraju"
// console.log(fullname)
// console.log(typeof fullname)



// let bacthNumber = 99; //number datatype
// console.log(bacthNumber);
// console.log(typeof bacthNumber); //number

// bacthNumber = 'nine nine'; // updating value of already declared veriable 
// console.log(bacthNumber); // 
// console.log(typeof bacthNumber); // sting 



// let batchSpeclization = 'MEAN/MERN';
// console.log(batchSpeclization);
// console.log(typeof batchSpeclization);

// let allPresent = true; //block scope
// console.log(allPresent); 
// console.log(typeof allPresent);

// var isLegacy = 'Yes'; 
// console.log(isLegacy); // veriable with var get access thorught window object 
// console.log(typeof isLegacy); //variable will availabe gloablly in program




// function hello(avar1,avar2){
//     return avar1 + avar2;
// }

// console.log( hello("chethan","nagaraju"));
// console.log( hello(600,"nagaraju"));
// console.log( hello("chethan",600));
// console.log( hello(600,600));


// let newarray= [10,'chethan',20,'nagaraju'];
// console.log(newarray);

// console.log(newarray[2]='60')
// console.log(newarray)

// console.log(newarray[2]=60)


let personinfo = {
    name: 'chethan',
    age: '23',
    gender: 'male',
    address: {
        presentadd: {
            location: 'mysore',
            area: 'jp nagara',
            pincode: 571110,
        permanantadd: {
             location: 'T Narasiputa',
             area: 'patel street',
             pincode: 571101,
            }


        }
    }
};
console.log(personinfo);
personinfo.address.presentadd.pincode