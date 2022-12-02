export class Employee {
    private _name!: string;
    private _age!: number;
    private _address!: string;
    private _email!: string;
    private _phoneNumber!: number;
    private _jopPosition!: string;
    private _status!: string;

    constructor(name: string, age: number, dress: string, email: string, phoneNumber: number, jopPosition: string, status: string) {
        this._name = name;
        this._age = age;
        this._address = dress;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._jopPosition = jopPosition;
        this._status = status;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phoneNumber(): number {
        return this._phoneNumber;
    }

    set phoneNumber(value: number) {
        this._phoneNumber = value;
    }

    get jopPosition(): string {
        return this._jopPosition;
    }

    set jopPosition(value: string) {
        this._jopPosition = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }
}