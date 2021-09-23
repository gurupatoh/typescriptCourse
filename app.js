function add(number1, number2, ShowResult, phrase) {
    var result = number1 + number2;
    if (ShowResult) {
        console.log(phrase + result);
    }
    else {
        return number1 + number2;
    }
}
var number1 = '10';
var number2 = 12;
var printResult = true;
var ResultPhrase = 'Result is:';
add(+number1, +number2, printResult, ResultPhrase);
