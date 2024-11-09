export abstract class DioAccount {
    readonly name: string
    readonly accountNumber: number
    private balance: number = 0
    private status: boolean

    constructor(name: string, accountNumber: number, status: boolean) {
        this.name = name
        this.accountNumber = accountNumber
        this.status = status
    }
    
    getName = (): string => {
        return this.name
    }
    
    getAccountName = (): number => {
        return this.accountNumber
    }

    getStatus = (): boolean => {
        return this.status
    }

    getBalance = (): number => {
        return this.balance
    }

    setBalance = (balance: number): void => {
        this.balance = balance
    }

    deposit = (amount: number): void  => {
        if (this.validateStatus()) {
            this.balance += amount
            console.log(`${this.getName()}, deposit made successfully!. Your current balance is $${this.balance}`)
        }        
    }

    withdraw = (amount: number): void => {
        if(this.validateStatus() && this.validadeBalance(amount)) {
            this.balance -= amount
            console.log(`${this.getName()}, withdraw made successfully!. Your current balance is $${this.balance}`)
        }
    }
    
    public validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }
        throw new Error('Inactive account. Contact to your manager.')
    }

    private validadeBalance = (amount: number): any => {
        if(this.balance >= amount) {
            return true
        }
        throw new Error('Insufficient balance. Contact to your manager.') 
    }
}

