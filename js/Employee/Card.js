/*
* Takes employee object and a EmployeeModal instance as arguments
* Creates a card for a single employee
* Attaches listener to card to open the modal instance for detailed employee info
*/
class EmployeeCard {
  constructor(employee, modal) {
    this.employee = employee;
    this.modal = modal;
  }

  viewDetails() {
    this.modal.update(this.employee);
    this.modal.openModal();
  }

  // Create and array of child nodes to append to the parent component
  build() {
    const details = [];

    details.push(createNode(
      'li',
      `<img src="${this.employee.picture.large}" alt="${this.employee.name.first} ${
        this.employee.name.last
      }'s profile picture">`,
    ));
    details.push(createNode('li', `${this.employee.name.first} ${this.employee.name.last}`));
    details.push(createNode('li', `${this.employee.email}`));
    details.push(createNode('li', `${this.employee.location.city}`));

    this.body = createNode('ul', details);
    this.card = createNode('div', this.body);
    this.card.addEventListener('click', () => this.viewDetails());

    return this.card;
  }
}
