import { PeopleAccount } from './class/PeopleAccount'
import { EmployeeAccount } from './class/EmployeeAccount'
import { CompanyAccount } from './class/CompanyAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Bill Clinton', 1122, true)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)

const employeeAccount: EmployeeAccount = new EmployeeAccount('Barack Obama', 3344, true)
employeeAccount.deposit(200)

const companyAccount: CompanyAccount = new CompanyAccount('Dio TV', 5566, true)
companyAccount.deposit(1000)
companyAccount.getLoan(500)




