import { ResidentialClient } from './ResidentialClient';
import { CommercialClient } from './CommercialClient';
import { IndustrialClient } from './IndustrialClient';

const casaMariana = new ResidentialClient('Mariana','15292151799','20540150','Mariana', 1, 300)
const casaAmora = new ResidentialClient('Amora','00101010101','20540150','Amora', 2, 100)
const lojaDoMarcio = new CommercialClient('Loja do Márcio', '123456789', '240550-002', 'Marcio', 3, 1000)
const lojaDoZuko = new CommercialClient('Loja do Zuko', '123456789', '240550-002', 'Zuko', 4, 5000)
//const industriaDeSache = new IndustrialClient('Sachês do Zuko', '123456789','22020-020', 'Zuko', 5, 2000, 'Industria de Sachê', '1')


console.log(casaMariana)
console.log(casaAmora)
console.log(lojaDoMarcio)
console.log(lojaDoZuko)
//console.log(industriaDeSache)