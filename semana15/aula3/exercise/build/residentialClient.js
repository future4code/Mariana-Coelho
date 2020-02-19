"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const residence_1 = require("./residence");
class ResidentialClient extends residence_1.Residence {
    constructor(name, cpf, cep, clientName, clientNumber, consumedEnergy) {
        super(name, cpf, cep);
        this.clientName = clientName;
        this.clientNumber = clientNumber;
        this.consumedEnergy = consumedEnergy;
    }
    calculateBill() {
        return 0;
    }
}
exports.ResidentialClient = ResidentialClient;
//# sourceMappingURL=residentialClient.js.map