'use-strict';
module.exports = inputs => {
  if (typeof inputs === 'string') {
    const lowercase = inputs.toLocaleLowerCase();
    let result = '';

    // case for evens
    if (lowercase.length % 2 == 0) {
      result = cap(lowercase);

    // case for odds
    } else {
      result = cap(lowercase);
    }

    return result;
  }
  
  throw new TypeError('Input must be string');
};

// function to capitalize every other letter
const cap = word => {

  // cap every other alphabetic character

  let result = '';
  let nextUp = word.charAt(0) === word.charAt(0).toLowerCase();   

  for (let i = 0; i < word.length; i++) {
    const currLetter = word.charAt(i);
    
    // case when previous letter was lowercase or first letter
    if (/[a-z]/.test(currLetter) && i !== 0 && nextUp) {
      result += currLetter.toUpperCase();
      nextUp = false;

    // case when previous letter is not lowercase
    } else if (/[a-z]/.test(currLetter)) {
      result += currLetter;
      nextUp = true;
    } else {
      result += currLetter;

      // if current letter is whitespace don't cap next letter
      if (/\s/.test(currLetter)) {
        nextUp = false;
      } else if (!/\s/.test(currLetter) && !/[a-z]/.test(currLetter)) {
        nextUp = true;
      }
      
    }
       
  }
  return result;
};
