/*
* Takes EmployeeList as argument
* Creates an input field to enter filter term
* Attaches listener that trigger EmployeeList.filterList() to populate the list with the correct employees
*/
class EmployeeFilter {
  constructor(list) {
    this.list = list;
  }

  filterList(filterTerm) {
    if (filterTerm) {
      return this.list.employees.filter(employee =>
        `${employee.name.first} ${employee.name.last}` === filterTerm ||
          employee.name.first === filterTerm ||
          employee.name.last === filterTerm ||
          employee.username === filterTerm);
    }
    return this.list.employees;
  }

  build() {
    this.label = createNode('label', 'Filter by Name or Username', 'filter__label', {
      for: 'filterInput',
    });
    this.input = createNode('input', null, 'filter__input', {
      id: 'filterInput',
      placeholder: 'Jon Snow',
    });
    this.btn = createNode('button', 'Filter', ['btn', 'btn--primary', 'btn--right']);
    this.filter = createNode('div', [this.label, this.input, this.btn], 'filter');

    this.btn.addEventListener('click', () => {
      const filteredList = this.filterList(this.input.value.toLowerCase());
      this.list.update(filteredList);
    });

    return this.filter;
  }
}
