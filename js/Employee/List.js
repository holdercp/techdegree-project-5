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

  build() {
    const listItems = this.employees.map((employee) => {
      const empCard = new EmployeeCard(employee, this.modal);
      return createNode('li', empCard.build(), 'list__item');
    });

    this.list = createNode('ul', listItems, 'list');

    return this.list;
  }
}
