// Your task is to write a function that receives as its single argument a string that contains numbers delimited by single spaces.Each number has a single alphabet letter somewhere within it.

//     Example : "24z6 1x23 y369 89a 900b"
// As shown above, this alphabet letter can appear anywhere within the number.You have to extract the letters and sort the numbers according to their corresponding letters.

//     Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246(ordered according to the alphabet letter)
// Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

// The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
// This has to work for any size of numbers sent in (after division, go back to addition, etc).
// In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
// Remember to also round the final answer to the nearest integer.

function doMath(string) {
    const arrayOfMixedNumbers = string.split(' ');

    const operationsOrder = ["+", "-", "*", "/"];

    const arrayOfSortedNumber = arrayOfMixedNumbers.sort((a, b) => {
        const [letterA] = a.split('').filter(c => c.toLowerCase() !== c.toUpperCase())
        const [letterB] = b.split('').filter(c => c.toLowerCase() !== c.toUpperCase())

        return letterA.localeCompare(letterB)
    }).map((mixedNumber) => mixedNumber.split('').filter(c => Number.isInteger(Number(c))).join(''))
        .map(Number);

    return reducedValue = Math.round(arrayOfSortedNumber.reduce((prevValue, currentValue, currentIndex) => {
        if (currentIndex === 0) {
            return currentValue;
        }

        return eval(`prevValue ${operationsOrder[currentIndex - 1]} currentValue`);
    }, 0));
}

function doMathVar2(string) {
    const arrayOfMixedNumbers = string.split(' ');

    const operationsOrder = ["+", "-", "*", "/"];

    const arrayOfSortedNumber = arrayOfMixedNumbers.sort((a, b) => {
        const [letterA] = a.split('').filter(c => c.toLowerCase() !== c.toUpperCase())
        const [letterB] = b.split('').filter(c => c.toLowerCase() !== c.toUpperCase())

        return letterA.localeCompare(letterB)
    }).map((mixedNumber) => mixedNumber.split('').filter(c => Number.isInteger(Number(c))).join(''))
        .map(Number);

    let result = arrayOfSortedNumber[0];
    let operationIndex = 0;

    for (let i = 1; i < arrayOfSortedNumber.length; i++) {
        const currentValue = arrayOfSortedNumber[i];
        const operation = operationsOrder[operationIndex % 4];

        if (operation === "+") {
            result += currentValue;
        } else if (operation === "-") {
            result -= currentValue;
        } else if (operation === "*") {
            result *= currentValue;
        } else if (operation === "/") {
            result /= currentValue;
        }

        operationIndex++;
    }

    return Math.round(result);
}


console.log(doMath("24z6 1x23 y369 89a 900b"));
console.log(doMath("24z6 1z23 y369 89z 900b"));