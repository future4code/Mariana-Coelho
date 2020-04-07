import { writeFileSync } from 'fs';
import { readFileSync } from 'fs';

export class JSONFileManager {
    static getObjectFromFile() {
        try {
            const mission = JSON.parse(readFileSync('data.json').toString())
            return mission;
        } catch(error) {
            console.error(error)
            return error;
        }
    }
        static writeObjectToFile(mission: any) {
        try {
            writeFileSync("src/data.json", JSON.stringify(mission))
            
        } catch(error) {
            console.log(error)
        }
    }
}

