import {Employee} from "./Employee";

export class EmployeeManager {
    listEmployee: Employee[] = [];
    show(): Employee[]{
        return this.listEmployee
    }

    add(obj: Employee) {
        this.listEmployee = [...this.listEmployee,obj]
    }

    edit(name: string, newObj: Employee ) {
        this.listEmployee = this.listEmployee.map(obj => obj.name === name ? newObj : obj);
    }

    remove(name: string ) {
        this.listEmployee = this.listEmployee.filter(obj => obj.name !== name)
    }

    findByName(name: string): Employee[] {
        return this.listEmployee.filter(obj => obj.name.includes(name))
    }


}