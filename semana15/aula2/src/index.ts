import { SaltyDish } from './saltyDish'
import { Dessert } from './dessert'
import { Dish } from './dish'

const carbonara = new SaltyDish('carbonara',50, 10, ['macarrao'], 20)
const acaraje = new SaltyDish('acaraje', 20, 10, ['camarao', 'quiabo', 'vatapa'], 50)
const brigadeiro = new Dessert('brigadeiro',5, 1, ['chocolate', 'leite condensado'], 30, 10)
const pudim = new Dessert('pudim',7, 2, ['ovo','leite condensado','leite'], 50, 8)


let dishes: Dish[] = [
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

class Manager extends Cashier {
    public sayJob(): string {
        return "Eu sou um gerente"
    }
}

class Chef extends Employee {
    public sayJob(): string {
        return "Você é a vergonha da prrofission"
    }

    removeDishFromMenu(dishes: Dish[], dishToRemove: string): Dish[] {
        return dishes.filter(dish => dish.name !== dishToRemove)
    }

}

const jacquin = new Chef("Jacquin", 20000)
dishes = jacquin.removeDishFromMenu(dishes, 'brigadeiro')

console.log(dishes) 