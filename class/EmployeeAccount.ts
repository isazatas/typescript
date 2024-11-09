import { DioAccount } from "./DioAccount";

export class EmployeeAccount extends DioAccount {

    constructor(name: string, accountNumber: number, status: boolean){
        super(name, accountNumber, status)
    }

    deposit = (amount: number): void => {
        if (this.validateStatus()) {
            const amountPlus = amount + 10
            this.setBalance (this.getBalance() + amountPlus)
            console.log(`${this.getName()}, deposit made successfully!. Your current balance is $${this.getBalance()}`)
        } 
    }
}