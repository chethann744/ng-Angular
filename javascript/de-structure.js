let getelement = () => {
    return {
        name: 'chethan',
        age: 23,
        address: {
            presentadd: {
                location: 'bang',
                pincode: 635427,
            },
            permanentadd: {
                location: 'mysore',
                pincode: 571110
            }
        }
    }
}
let ad = getelement();
let { name, age, address } = ad;
console.log(name, age, address)