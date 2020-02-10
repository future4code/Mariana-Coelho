const fs = require('fs');
const fileName = process.argv[2];
const data = process.argv[3];

try{
    fs.appendFileSync(fileName, data, 'utf8')
    console.log("Dado inserido com sucesso!")
}catch(err){
    console.log("Erro");
}