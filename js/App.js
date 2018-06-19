/*
* Pulls employee data from an API
* Passes that data to EmployeeList component
* Instantiates an EmployeeFilter component and passes it a reference to EmployeeList
* Instantiates an EmployeeModal component and passes it to EmployeeList
* Attaches components to DOM
*/
class App {
  constructor() {
    this.app = document.getElementById('app');
    this.modal = new EmployeeModal();
    this.fetchEmployees();
  }

  initData(data) {
    this.employees = data.results;
    this.list = new EmployeeList(this.employees, this.modal);
    this.modal.list = this.list;
    this.filter = new EmployeeFilter(this.list);
  }

  fetchEmployees() {
    const loader = createNode('div', 'Loading...', 'loader');
    this.app.removeChild(document.querySelector('.background__p'));
    this.app.appendChild(loader);

    fetch('https://randomuser.me/api/?results=12&nat=us')
      .then(response => response.json())
      .then((data) => {
        this.app.removeChild(loader);
        this.initData(data);
        this.build();
      });
  }

  build() {
    this.app.appendChild(this.filter.build());
    this.app.appendChild(this.list.build());
    this.app.appendChild(this.modal.build());
  }
}

const app = new App();
