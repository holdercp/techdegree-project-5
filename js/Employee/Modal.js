class Modal {
  constructor() {
    this.build();
    this.attachListeners();
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
    const details = [];

    details.push(createNode(
      'li',
      `<img src="${employee.picture.large}" alt="${employee.name.first} ${
        employee.name.last
      }'s profile picture">`,
    ));
    details.push(createNode('li', `${employee.name.first} ${employee.name.last}`));
    details.push(createNode('li', `${employee.login.username}`));
    details.push(createNode('li', `${employee.cell}`));
    details.push(createNode('li', `${employee.email}`));
    details.push(createNode('li', `${employee.location.street}`));
    details.push(createNode('li', `${employee.location.city}`));
    details.push(createNode('li', `${employee.location.state}`));
    details.push(createNode('li', `${employee.location.postcode}`));

    this.info = createNode('ul', details);

    removeChildNodes(this.body);
    this.body.appendChild(this.info);
  }

  // Build the modal and attach to the DOM
  build() {
    const docFrag = document.createDocumentFragment();

    // Build modal
    this.modal = document.createElement('div');
    this.modal.className = 'modal';

    // Build modal body and append
    this.body = document.createElement('div');
    this.body.className = 'modal__body';
    this.modal.appendChild(this.body);

    // Build close button and append to modal
    this.closeBtn = document.createElement('button');
    this.closeBtn.className = 'modal__close-btn';
    this.closeBtn.textContent = 'x';
    this.modal.appendChild(this.closeBtn);

    // Build overlay and append to doc fragment
    this.overlay = document.createElement('div');
    this.overlay.className = 'modal__overlay';
    docFrag.appendChild(this.overlay);

    // Append modal to doc fragment
    docFrag.appendChild(this.modal);

    // Append modal to document
    document.body.appendChild(docFrag);
  }

  // Attach listeners
  attachListeners() {
    this.closeBtn.addEventListener('click', () => this.closeModal());
    this.overlay.addEventListener('click', () => this.closeModal());
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27 && this.isOpen()) this.closeModal();
    });
  }
}
