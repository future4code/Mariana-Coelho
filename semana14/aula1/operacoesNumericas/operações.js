const operation = process.argv[2];
const firstNum = Number(process.argv[3]);
const secondNum = Number(process.argv[4]);

switch (operation) {
    case 'add': 
        console.log('A soma entre', firstNum, ' e ', secondNum, ' é ', firstNum + secondNum);
        break;
    case 'sub':
        console.log('A subtração entre', firstNum, ' e ', secondNum, ' é ', firstNum - secondNum);
        break;
    case 'mult':
        console.log('A multiplicação entre', firstNum, ' e ', secondNum, ' é ', firstNum * secondNum);
        break;
    case 'div':
        console.log('A divisão entre', firstNum, ' e ', secondNum, ' é ', firstNum / secondNum);
        break;
    default: console.log('Tente novamente.');
} 