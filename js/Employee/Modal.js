/*
* Creates an EmployeeModal component
* Tracks state of modal, either open or closed
* Call update() to pass employee data to component and update content
*/
class EmployeeModal {
  constructor() {
    this.open = false;
  }

  isOpen() {
    return this.open;
  }

  openModal() {
    this.open = true;
    this.modal.classList.add('modal--open');
    this.overlay.classList.add('modal--open');
  }

  closeModal() {
    this.open = false;
    this.modal.classList.remove('modal--open');
    this.overlay.classList.remove('modal--open');
  }

  update(employee) {
    const info = [];
    const details = [];

    info.push(createNode('img', null, 'modal__img', {
      src: `${employee.picture.large}`,
      alt: `${employee.name.first} ${employee.name.last}'s profile picture`,
    }));
    info.push(createNode(
      'p',
      `${capitalize(employee.name.first)} ${capitalize(employee.name.last)}`,
      'modal__heading',
    ));
    info.push(createNode('p', `${employee.login.username}`, 'modal__item'));
    info.push(createNode('a', `${employee.email}`, 'modal__link', {
      href: `mailto:${employee.email}`,
    }));
    info.push(createNode('p', `${capitalize(employee.location.city)}`, 'modal__item'));

    details.push(createNode('a', `${employee.cell}`, 'modal__link', { href: `tel:${employee.cell}` }));
    details.push(createNode(
      'p',
      `${capitalize(employee.location.street)}, ${capitalize(employee.location.state)} ${
        employee.location.postcode
      }`,
      'modal__item',
    ));
    details.push(createNode('p', `Birthday: ${formatDate(employee.dob.date)}`, 'modal__item'));

    this.info = createNode('div', info, 'modal__info');
    this.details = createNode('div', details, 'modal__details');

    removeChildNodes(this.body);
    this.body.appendChild(this.info);
    this.body.appendChild(createNode('hr', null, 'modal__hr'));
    this.body.appendChild(this.details);
  }

  // Build the modal and attach to the DOM
  build() {
    const docFrag = document.createDocumentFragment();

    this.body = createNode('div', null, 'modal__body');
    this.closeBtn = createNode('button', 'X', 'modal__close-btn');
    this.modal = createNode('div', [this.body, this.closeBtn], 'modal');
    this.overlay = createNode('div', null, 'modal__overlay');

    docFrag.appendChild(this.overlay);
    docFrag.appendChild(this.modal);

    this.attachListeners();

    return docFrag;
  }

  // Attach listeners
  attachListeners() {
    this.closeBtn.addEventListener('click', () => this.closeModal());
    this.overlay.addEventListener('click', () => this.closeModal());
    // Escape key closes modal
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27 && this.isOpen()) this.closeModal();
    });
  }
}
