/*
* Takes an array of employee objects and a Modal instance as arguments
* Passes employees and EmployeeModal to EmployeeCard components
* Creates a list of EmployeeCards
*/
class EmployeeList {
  constructor(employees, modal) {
    this.employees = employees;
    this.modal = modal;
  }

  update(employees) {
    this.filteredEmployees = employees;
    removeChildNodes(this.list);

    employees.forEach((employee) => {
      const empCard = new EmployeeCard(employee, this.modal);
      this.list.appendChild(createNode('li', empCard.build(), 'list__item'));
    });
  }

  getAdjacentEmployee(currentEmployee, reverse = false) {
    const currentIndex = this.employees.findIndex(employee => currentEmployee === employee);
    if (reverse) {
      return this.employees[currentIndex - 1 < 0 ? this.employees.length - 1 : currentIndex - 1];
    }
    return this.employees[currentIndex + 1 === this.employees.length ? 0 : currentIndex + 1];
  }

  build() {
    const listItems = this.employees.map((employee) => {
      const empCard = new EmployeeCard(employee, this.modal);
      return createNode('li', empCard.build(), 'list__item');
    });

    this.list = createNode('ul', listItems, 'list');

    return this.list;
  }
}
