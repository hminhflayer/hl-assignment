'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

console.log(`Input:`);
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;

    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function miniMaxSum(arr) {
    // Write your code here
    const minArr = Math.min(...arr);
    const maxArr = Math.max(...arr);
    const sumArr = arr.reduce((first, second) => { return first + second }, 0);
    const evenArr = arr.filter((ele) => { return (ele % 2) == 0 });
    const oddArr = arr.filter((ele) => { return (ele % 2) != 0 });
    
    console.log(`Output:`);
    console.log(sumArr - maxArr, sumArr - minArr);
    console.log(`Bouns:`)
    console.log(`+ Count total of array: ${sumArr}`);
    console.log(`+ Find min in array: ${minArr}`);
    console.log(`+ Find max in array: ${maxArr}`);
    console.log(`+ Find even elements in array: ${evenArr}`);
    console.log(`+ Find odd elements in array: ${oddArr}`);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    console.log(arr);

    miniMaxSum(arr);
}