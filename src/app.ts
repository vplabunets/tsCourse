class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(public name: string, private readonly id: string) {
    // this.name = n;
  }
  describe(this: Department) {
    console.log(`Department ${this.id}: ` + this.name);
  }
  addEmployee(employee: string) {
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
// const accountingCopy = { name: "s", describe: accounting.describe };

// accountingCopy.describe();
accounting.addEmployee("Vova Labunets");
accounting.printEmployeesInformation();
// accounting.employees[2] = "Girl"; error access to private property
//# sourceMappingURL=app.js.map
