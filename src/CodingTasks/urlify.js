const urlify = str => str.replace(/(\w)\s(\w)/g, '$1%20$2').trim();

console.log(urlify('Hello my name is Noone       '));
