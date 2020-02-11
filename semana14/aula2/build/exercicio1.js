const numbersArray = [0, 4, 6, 17, 24, 30, 53];
function handleArrayData(numbersArray) {
    let sumOfNumbers = 0;
    for (let number of numbersArray) {
        sumOfNumbers += number;
    }
    const output = {
        totalOfNumbers: numbersArray.length,
        oddNumbers: numbersArray.filter((number) => number % 2 === 1).length,
        sumOfNumbers,
    };
    return output;
}
console.log(handleArrayData(numbersArray));
//# sourceMappingURL=exercicio1.js.map