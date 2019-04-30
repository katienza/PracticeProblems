function reverseStr(str) {
    return parseFloat(str.toString().split('').reverse().join(''))
}

var isPalindrome = function(x) {
    return x === reverseStr(x)
}
