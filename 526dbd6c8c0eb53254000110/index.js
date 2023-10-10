// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// assert.strictEqual(alphanumeric("Mazinkaiser"), true)
// assert.strictEqual(alphanumeric("hello world_"), false)
// assert.strictEqual(alphanumeric("PassW0rd"), true)
// assert.strictEqual(alphanumeric("     "), false)


const alphanumeric = (string) => string.split('').every(c => c.toLowerCase() != c.toUpperCase())


console.log(alphanumeric("032fds1"))