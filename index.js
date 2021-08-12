const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(toUpperCase);

const titleCased = () => {
  const title = tutorials.map(function(name) {
    const words = name.split(' ');
    const combine = words.map(word => word[0].toUpperCase() + word.slice(1)); // W + hat
    const cased = combine.join(' ');
    return cased;
  });
  return title;
}

// console.log(title)

// const titleCased = () => {
//   return tutorials
// }


// //Julie's code
// const titleCased = (array) => array.map(function(x){
//   return x.toUpperCase();
// })
