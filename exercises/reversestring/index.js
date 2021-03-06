// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    let reversed = '';
    for(let letter of str){
        reversed = letter + reversed;
    }
    return reversed;
}

function reverse2(str) {
    return str.split("").reverse().join("");
}

function reverse3(str) {
    return str.split("").reduce((reversed, letter) => letter + reversed, '');
}

module.exports = reverse;
