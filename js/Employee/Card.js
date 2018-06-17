class EmployeeCard {
  constructor(employee, modal) {
    this.employee = employee;
    this.modal = modal;
  }

  openModal() {
    this.modal.update(this.employee);
    this.modal.openModal();
  }

  build(parentNode) {
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

    this.info = createNode('ul', details);
    this.card = createNode('div', this.info);
    this.card.addEventListener('click', () => this.openModal());

    parentNode.appendChild(this.card);
    return this.card;
  }
}
