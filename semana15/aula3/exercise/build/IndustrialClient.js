"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const industry_1 = require("./industry");
class IndustrialClient extends industry_1.Industry {
    constructor(name, cnpj, cep, industryName, industryNumber) {
        super(name, cnpj, cep);
        this.industryName = industryName;
        this.industryNumber = industryNumber;
    }
    calculateBill() {
        return 0;
    }
}
exports.IndustrialClient = IndustrialClient;
//# sourceMappingURL=IndustrialClient.js.map