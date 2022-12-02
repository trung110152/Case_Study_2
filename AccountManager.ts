import {Account} from "./Account";

export class AccountManager {
    listAccount: Account[] = [];
    registration(newAccount: Account) {
        this.listAccount = [...this.listAccount, newAccount]
    }

    login(userName: string, passWord: string): Account[] {
        return  this.listAccount.filter(obj => obj.userName === userName && obj.passWord === passWord)

    }

    showAccount(): Account[]{
        return this.listAccount
    }

    findByAccountName(accountName: string): Account[] {
        return this.listAccount.filter(obj => obj.userName.includes(accountName))
    }

    checkAccount(accountName: string){
        return this.listAccount.filter(obj => obj.statusAccount)
    }

}