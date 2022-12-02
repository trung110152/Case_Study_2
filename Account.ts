export class Account {
    private _name!: string;
    private _jopPosition!: string
    private _userName!: string;
    private _passWord!: string;
    private _statusAccount: boolean = false ;


    constructor(name: string, jopPosition: string, userName: string, passWord: string, statusAccount: boolean) {
        this._name = name;
        this._jopPosition = jopPosition;
        this._userName = userName;
        this._passWord = passWord;
        this._statusAccount = statusAccount;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get jopPosition(): string {
        return this._jopPosition;
    }

    set jopPosition(value: string) {
        this._jopPosition = value;
    }

    get statusAccount(): boolean {
        return this._statusAccount;
    }

    set statusAccount(value: boolean) {
        this._statusAccount = value;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get passWord(): string {
        return this._passWord;
    }

    set passWord(value: string) {
        this._passWord = value;
    }
}