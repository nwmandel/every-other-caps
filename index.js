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
};

// function to capitalize every other character
const cap = words => {
  let result = '';
  for (let i = 0; i < words.length; i++) {
    if (i % 2 !== 0 && i > 0) {
      result += words.charAt(i).toUpperCase();
    } else {
      result += words.charAt(i);
    }
  }
  return result;
};
