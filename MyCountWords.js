// Write a program to count the 2 letter words in a sentence.
// E.G. 'I am in love with New York' should return 2 (am and in)

function countWords(str) {
  let words = str.split(' ');
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length < 3 && word.length > 1) count++;
  }

  return count;
}

countWords('I am in love with New York');
