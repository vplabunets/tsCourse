"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.id}: ` + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting", "d1");
console.log(accounting);
accounting.describe();
accounting.addEmployee("Vova Labunets");
accounting.printEmployeesInformation();
//# sourceMappingURL=app.js.map