class Department {
  static fiscalYear = 2023;
  // private employees: string[]=[]
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // console.log(this.fiscalYear) mistake with access to static property
    console.log(Department.fiscalYear);
  }
  static createEmployee(name: string) {
    return { name: name };
  }
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfromation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class ITDepartment extends Department {
  // admins:string[]
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    // this.admins=admins
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}
class AccountingDepartment extends Department {
  private lastReport: string;
  get mostRecentReport() {
    console.log(this.lastReport);
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  getReports() {
    console.log(this.reports);
  }
}
const accounting = new AccountingDepartment("d2", []);
const employee1 = AccountingDepartment.createEmployee("Ludvig2");
console.log(employee1);
// accounting.mostRecentReport = "Something went good..."
// accounting.addReport("Something went wrong...")
// accounting.addReport("Something went wrong...2")
// console.log(accounting.mostRecentReport)
// accounting.describe()
// accounting.addEmployee("Vova")
// accounting.addEmployee("Helen")
// accounting.printEmployeeInfromation()
// console.log(accounting)
// accounting.getReports()
// const it = new ITDepartment("d1",["Vova",'Olena'])
// it.describe()
// it.addEmployee("Artur")
// it.addEmployee("Eduardo")
// it.printEmployeeInfromation()
// console.log(it)
