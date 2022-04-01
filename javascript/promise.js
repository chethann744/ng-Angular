// // let myThbs=new Promise((solve,reject) =>{
// //     setTimeout(() =>{
// //         reject('thbs');
        
// //     },2000);
// //     });


// // myThbs.then(
// //     (use)=>{
// //         console.log(`i am in sucess callback of promise ${use}`);
// //     },
// //     (error) =>{
// //         console.log(`i am in error callback of promise ${error}`);
    
// // }
// // ).then(
// //     (sucess) =>{
// //         console.log(`11111 am in sucess ${sucess}`);
// // },
// // (error1) =>{
// //     console.log(`11111 am in error ${error1}`);
// // })



// let mypromise=new Promise((resolve,reject)=>{
//     reject('thbs');
//     resolve('thbs');
// }).then((sucess)=>{
//     console.log(`the fuction call was resolved ${sucess}`)
// // },(error)=>{
// //     console.log(`the function call was rejected ${error}`)
// }).catch((reject)=>{
//     console.log(`the function call was permanantly rejected ${reject}`)
// })



let hipromise= new Promise ((resolve,reject)=>{
    reject('bro');
}).then(
    (success) =>
    {
        console.log(`promise is sucess ${success}`)
    },(error)=>{
        console.log(`prmise is failed ${error}`)
    })