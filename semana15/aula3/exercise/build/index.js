"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResidentialClient_1 = require("./ResidentialClient");
const CommercialClient_1 = require("./CommercialClient");
const casaMariana = new ResidentialClient_1.ResidentialClient('Mariana', '15292151799', '20540150', 'Mariana', 1, 300);
const casaAmora = new ResidentialClient_1.ResidentialClient('Amora', '00101010101', '20540150', 'Amora', 2, 100);
const lojaDoMarcio = new CommercialClient_1.CommercialClient('Loja do Márcio', '123456789', '240550-002', 'Marcio', 3, 1000);
const lojaDoZuko = new CommercialClient_1.CommercialClient('Loja do Zuko', '123456789', '240550-002', 'Zuko', 4, 5000);
console.log(casaMariana);
console.log(casaAmora);
console.log(lojaDoMarcio);
console.log(lojaDoZuko);
//# sourceMappingURL=index.js.map