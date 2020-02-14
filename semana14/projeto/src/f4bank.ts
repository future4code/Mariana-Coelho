import * as moment from 'moment'
import { readFile, writeFileSync } from 'fs'

type account = {
     holder: {
        name: string,
        cpf: string,
        birthDate: any,
    },
    expenses: expense[],
    balance: number,
};

type expense = {
    value: number,
    description: string,
    date: Date,
};

new Promise((resolve, reject) => {
    readFile('./accountsData.json', callback)
    function callback(err: Error, data: Buffer) {
        if(err) {
            reject(err)
        } else {
            resolve(data.toString())
        }
    }
}).then(
    (data: string) => updateAccount(JSON.parse(data)) 
).catch(
    (err) => console.log(err)
)

const updateAccount = (accounts: account[]) => {
    switch (process.argv[4]) {
        case "signUp": 
            createNewAccount(
                accounts,
                process.argv[5],
                process.argv[6],
                process.argv[7],
                )
            break; 
    }
    writeFileSync('./accountsData.json', JSON.stringify(accounts))
}

function createNewAccount(accounts: account[], newName: string, newCpf: string, newBirthDate: string) {
accounts.push({
    holder: {
        name: newName,
        cpf: newCpf,
        birthDate: moment(newBirthDate, "DD/MM/YYYY"),
        },

        expenses: [],
        balance: 0,
    })
    
}