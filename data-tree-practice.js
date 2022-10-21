class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }
    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {
    let employees = [];

    if (this.salary > amount) {
      employees.push(this);
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount);
      employees = employees.concat(subordinatesThatMakeOver);
    }
    return employees;
  }

  totalEmployees() {
    let totalEmployees = 0;

    totalEmployees += 1;

    if (!this.subordinates) {
      totalEmployees += 1;
    }

    for (const subordinate of this.subordinates) {
      const currentTotal = subordinate.totalEmployees();
      totalEmployees += currentTotal;
    }
    return totalEmployees;
  }
}

const ada = new Employee('Ada', 'CEO', 3000000.0);

const benedict = new Employee('Benedict', 'Middle Management', 1000000);

const craig = new Employee('Craig', 'VP Software', 1000000);
const arvinder = new Employee('Arvinder', 'Chief Design Officer', 1000000);
const angela = new Employee('Angela', 'VP Retails', 1000000);
const phil = new Employee('Phil', 'VP Marketing', 1000000);

const simone = new Employee('Simone', 'Junior Dev', 1000000);
const ali = new Employee('Ali', 'junior dev', 1000000);
const florida = new Employee('Florida', 'VP junior marketer', 1000000);
const david = new Employee('David', 'junior marketer', 1000000);
const brian = new Employee('Brian', 'junior marketer', 1000000);
const karla = new Employee('Karla', 'Junior retail', 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(benedict);

benedict.addSubordinate(phil);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);
phil.addSubordinate(karla);

angela.addSubordinate(karla);

// console.log(craig.boss);
// console.log(craig.numberOfSubordinates);
// console.log(karla.numberOfPeopleToCEO);

// console.log(craig.hasSameBoss(phil));
// console.log(ada.employeesThatMakeOver(418401));

console.log(craig.totalEmployees());
console.log(ada.totalEmployees());
console.log(phil.totalEmployees());
console.log(benedict.totalEmployees());
