var Advancefeature = /** @class */ (function () {
    function Advancefeature() {
    }
    Advancefeature.prototype.getFeatureList = function (list, key) {
        return list.filter(function (ele, index, Array) {
            return ele.name.includes(key || 'datatype');
        });
    };
    return Advancefeature;
}());
var list = [
    { name: 'generics datatype' },
    { name: 'access modifiers' }
];
var af = new Advancefeature();
var result = af.getFeatureList(list);
console.log(result);
