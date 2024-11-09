import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number, status: boolean) {
        super(name, accountNumber, status)
    }

    getLoan = (amount: number): void => {
        if(this.getStatus()) {
            this.setBalance(amount)
            console.log(`${this.getName()}, loan approved, your new balance is ${this.getBalance()}`);
            
        }
        else {
            console.error('Inactive account. Contact to your manager.')
        }
    }

    deposit = (amount: number): void => {
        if (this.validateStatus()) {
            this.setBalance (this.getBalance() + amount)
            console.log(`${this.getName()}, deposit made successfully!. Your current balance is $${this.getBalance()}`)
        }    
    }
}