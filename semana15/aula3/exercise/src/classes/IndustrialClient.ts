import { Industry } from './industry';
import { Place } from './place';


export class IndustrialClient extends Industry implements Place {

    constructor(
        name: string,
        cnpj: string,
        cep: string,
        public industryName: string,
        public industryNumber: string
    ) {
        super(name,cnpj,cep)
    }
    calculateBill(): number {
        return 0
    }
} 