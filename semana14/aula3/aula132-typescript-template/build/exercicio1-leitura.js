let fs = require('fs'), log = console.log;
const primeiraPromessa = new Promise((resolve, reject) => {
    fs.readdit('textos/', (error, data) => {
        if (error) {
            reject(error);
        }
        else {
            resolve(data);
        }
    });
}).then((files) => Promise.all(generatePromises(files)).then(values => log(values.map(value => value.toString()).join(' ')))).catch(err => log(err));
function generatePromises(files) {
    return files.map(file => new Promise((resolve, reject) => {
        if (error) {
            reject(error);
        }
        else {
            resolve(data);
        }
    }));
}
//# sourceMappingURL=exercicio1-leitura.js.map