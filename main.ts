import {AccountManager} from "./AccountManager";
import {Account} from "./Account";
import {EmployeeManager} from "./EmployeeManager";
import {Employee} from "./Employee";

let input = require("readline-sync");
let accountManager = new AccountManager();
let employeeManager = new EmployeeManager()

function main() {
    let choice = -1;
    do {
        console.log(`
        1. Login
        2. Register
        0. Out
        `)
        choice = +input.question('Enter choice : ')
        switch (choice) {
            case 1:
                loginAcc()
                break;
            case 2:
                registrationAcc()
                break;
            case 0:
                break;
        }
    } while (choice !== 0);
}

function loginAcc() {
    let userName = input.question("Enter user name: ")
    let passWord = input.question("Enter password: ")
    let a = accountManager.login(userName, passWord)
    if(a.length === 0){
        console.log("Can't")
        main()
    }
    accountManager.listAccount.map(obj => obj.userName === userName && obj.passWord === passWord ? obj.statusAccount = true : obj);
    let choice = -1;
    do{
    console.log(`
    1. Employ Manager
    2. Account Manager
    3. Log out`)
        choice = +input.question("Enter choice")
        switch (choice) {
            case 1:
                emManager()
                break;
            case 2:
                acctManager()
                break;
    }
    }while (choice !== 3)
}

function registrationAcc() {
    let userName = input.question("Enter user name: ")
    let a = accountManager.listAccount.filter(obj => obj.userName === userName)
    if (a.length !== 0 && userName.length > 20) {
        console.log("Can't")
        registrationAcc()
    }
    let passWord = input.question("Enter password: ")
    let name = input.question("Enter full name: ")
    let jopPosition = input.question("Enter jop position: ")
    let newAcc = new Account(name, jopPosition, userName, passWord, false)
    accountManager.registration(newAcc)
}

function emManager() {
    let choice = -1;
    do {
        console.log(`
    1. List
    2. Add employee
    3. Remove employee
    4. Edit employee
    5. Find employee
    6. Exit`)
        choice = +input.question("Enter choice")
        switch (choice) {
            case 1:
                showList();
                break;
            case 2:
                addEmployee()
                break;
            case 3:
                removeEmployee()
                break;
            case 4:
                editEmployee()
                break;
            case 5:
                findEmployee()
                break;
        }
    }while (choice !== 6)
}

function showList() {
    console.log(employeeManager.show())
}

function addEmployee() {
    console.log("Add")
    let name = input.question(" Enter full name: ")
    let age = +input.question(" Enter age: ")
    let address = input.question("Enter address: ")
    let email = input.question("Enter email: ")
    let phoneNumber = input.question("Enter phone number")
    let jopPosition = input.question("Enter jop position")
    let status = input.question("Enter status: ")
    let employee = new Employee(name, age, address, email, phoneNumber, jopPosition, status)
    employeeManager.add(employee);
}

function removeEmployee() {
    console.log("Remove")
    let name = input.question(" Enter name: ")
    employeeManager.findByName(name).length !== 0 ? employeeManager.remove(name): console.log("Can't find")

}

function editEmployee() {
    console.log("Edit")
    let name = input.question(" Enter name: ")
    employeeManager.findByName(name).length !== 0 ? console.log(employeeManager.findByName(name)): emManager() ;
    let newName = input.question(" Enter new name: ")
    let age = +input.question(" Enter new age: ")
    let address = input.question("Enter new address: ")
    let email = input.question("Enter new email: ")
    let phoneNumber = input.question("Enter new phone number")
    let jopPosition = input.question("Enter new jop position")
    let status = input.question("Enter new status: ")
    let employee = new Employee(newName, age, address, email, phoneNumber, jopPosition, status)
    employeeManager.edit(name, employee)
}

function findEmployee() {
    console.log("Find")
    let name = input.question(" Enter name: ")
    employeeManager.findByName(name).length !== 0 ? console.log(employeeManager.findByName(name)): console.log("Can't find")
}

function acctManager() {
    let choice = -1;
    do {
        console.log(`
    1. Show Account
    2. Registration
    3. Find Account
    4. Exit
    `)
        choice = +input.question("Enter choice: ")
        switch (choice) {
            case 1:
                showAcc()
                break;
            case 2:
                registrationAcc()
                break;
            case 3:
                findAcc()
                break;
            case 4:
                break;
        }
    }while (choice !== 4)
}

function showAcc() {
    console.log("Show Account")
    console.log(accountManager.showAccount())
}

function findAcc() {
    console.log("Find")
    let name = input.question(" Enter account name: ")
    accountManager.findByAccountName(name).length !== 0 ? console.log(accountManager.findByAccountName(name)): console.log("Can't find")
}



main();