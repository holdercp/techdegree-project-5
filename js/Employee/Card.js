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
      'p',
      `${capitalize(this.employee.name.first)} ${capitalize(this.employee.name.last)}`,
      'card__heading',
    ));
    details.push(createNode('a', `${this.employee.email}`, 'card__link', {
      href: `mailto:${this.employee.email}`,
    }));
    details.push(createNode('p', `${capitalize(this.employee.location.city)}`, 'card__p'));

    this.img = createNode('img', null, 'card__img', {
      src: `${this.employee.picture.large}`,
      alt: `${this.employee.name.first} ${this.employee.name.last}'s profile picture`,
    });

    this.body = createNode('div', details, 'card__body');
    this.card = createNode('div', [this.img, this.body], 'card');
    this.card.addEventListener('click', () => this.viewDetails());

    return this.card;
  }
}
