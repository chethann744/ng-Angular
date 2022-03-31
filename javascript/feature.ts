class Advancefeature {



    public getFeatureList(list: object[], key?: string | number) {
        return list.filter((ele: any, index, Array) => {
            return ele.name.includes(key || 'datatype')
        })
    }
}
let list = [
    { name: 'generics datatype' },
    { name: 'access modifiers' }
]

let af: Advancefeature = new Advancefeature();

let result = af.getFeatureList(list);
console.log(result);