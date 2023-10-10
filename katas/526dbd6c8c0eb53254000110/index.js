// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// assert.strictEqual(alphanumeric("Mazinkaiser"), true)
// assert.strictEqual(alphanumeric("hello world_"), false)
// assert.strictEqual(alphanumeric("PassW0rd"), true)
// assert.strictEqual(alphanumeric("     "), false)

const alphanumeric = (string) => {
    if (string.trim() === '') {
        return false;
    }

    return string.split('').every(c => {
        //Check if it's a letter
        if (c.toLowerCase() !== c.toUpperCase()) {
            return true;
        }

        //Check if it's a special symbol bypass empty " "
        if (Number.isNaN(Number(c))) {
            return false;
        }

        //Check if it's a empty " "
        if (c.trim() === "") {
            return false
        }

        //Other symbol that we don't know
        return true;
    })
}