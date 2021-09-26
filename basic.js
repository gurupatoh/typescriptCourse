"use strict";
function combine(input1, input2, ResultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        var result_1 = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (ResultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var age = combine(12, 56, 'as-number');
console.log(age);
var ageconversion = combine('12', '56', 'as-number');
console.log(ageconversion);
var names = combine('patrick', 'julius', 'as-text');
console.log(names);
