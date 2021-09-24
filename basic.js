function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        var result_1 = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var age = combine(12, 56);
console.log(age);
var names = combine('patrick', 'julius');
console.log(names);
