// Given a two digit number, can you output the sum of those two digits?
// i.g. input: 29, output: 11
// input: 11, output: 2

//convert n to string
// loop over string and for each string we convert single char into a number
    // add to result string
// return result

function addTwoDigits(n) {
  let str = n.toString()
  let result = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    result += Number(char)
  }

  return result
}
