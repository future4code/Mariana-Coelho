class JSONFileManager {
    static getObjectFromFile() {
        try {
            const accounts = JSON.parse(readFileSync(“src/accounts.json”).toString())
            return accounts;
        } catch(error) {
            console.error(error)
            return error;
        }
    }
        static writeObjectToFile(accounts: any) {
        try {
            writeFileSync("src/accounts.json", JSON.stringify(accounts))
            
        } catch(error) {
            console.log(error)
        }
    }
}

class Bank {
    accounts: any
    fileManager: JSONFileManager

    constructor(){
        this.accounts = []
        this.fileManager
    }
}

const accounts = JSONFileManager.getObjectFromFile()

