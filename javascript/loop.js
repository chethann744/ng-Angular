//for loop
let myarr=['hello','how','are','you']
for(let i=0;i<myarr.length;i++){
    console.log(myarr[i])
}
//foreach
myarr.forEach((ele,index,arr)=>{
    console.log(`${ele},${index},${arr}` )
})

//filter
let myar=[1,2,3,4,5]
let array=myar.filter((ele,index,arr)=>{
    console.log(ele,index,arr)
    return ele<5
})
console.log(array)



let myarray=[{name:'chethan',skill:['java','python','js','css','html']},
             {name:'nishanth',skill:['java','js','css','html']},
             {name:'priya',skill:['java','python','js','css','html','bootstrap']},
             {name:'avinash',skill:['java','js','css','html','bootstrap']},
];
 
let my = myarray.filter((val,index,arr)=>{
    console.log(myarray);
    return val.name.includes('chethan')
})
console.log(my)
console.log(`Is Array method result ==> ${Array.isArray({})}`);

// map
let myarry=[{name:'chethan',skill:['java','python','js','css','html']},
             {name:'nishanth',skill:['java','js','css','html']},
             {name:'priya',skill:['java','python','js','css','html','bootstrap']},
             {name:'avinash',skill:['java','js','css','html','bootstrap']}
];
 

let mappedarray= myarry.map((val,index,array)=>{
    console.log(val,index,array);
    val.name='hello '+ val.name
})
console.log(mappedarray)
