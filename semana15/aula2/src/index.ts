import { SaltyDish } from './saltyDish'
import { Dessert } from './dessert'
import { Dish } from './dish'

const carbonara = new SaltyDish(50, 10, ['macarrao'], 20)
const acaraje = new SaltyDish(20, 10, ['camarao', 'quiabo', 'vatapa'], 50)
const brigadeiro = new Dessert(5, 1, ['chocolate', 'leite condensado'], 30, 10)
const pudim = new Dessert(7, 2, ['ovo','leite condensado','leite'], 50, 8)


const dishes: Dish[] = [
    carbonara, 
    acaraje, 
    brigadeiro, 
    pudim
];

abstract class Employee {
    static totalOfEmployees: number = 0
    constructor(public name: string, public payment: number) {
        Employee.totalOfEmployees++
    }
    public abstract sayJob(): void;
}

// Abstrata porque serve pra ser extendida pelo cashier

class Cashier extends Employee {
    public sayJob(): string {
        return "Eu sou um caixa"
    }
    public calculateBill(dishes: Dish[]): number {
        let total = 0
        for (let eachDish of dishes) {
            total += eachDish.getPrice()
        }
        return total
    }
}

const caixa = new Cashier('Astrodev', 500)
console.log(caixa)
console.log("quantidade de funcionarios", Employee.totalOfEmployees)

//class Manager extends Cashier {

//}

//class Chef extends Employee {

//}