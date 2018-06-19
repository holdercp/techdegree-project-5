/*
* Pulls employee data from an API
* Passes that data to EmployeeList component
* Instantiates a Modal component and passes it to EmployeeList
* Attaches EmployeeList and EmployeeModal to DOM
*/
class App {
  constructor() {
    this.renderPoint = document.getElementById('app');
    this.modal = new EmployeeModal();
    this.fetchEmployees();
  }

  fetchEmployees() {
    fetch('https://randomuser.me/api/?results=12&nat=us')
      .then(response => response.json())
      .then((data) => {
        this.employees = data.results;
        this.list = new EmployeeList(this.employees, this.modal);
        this.modal.list = this.list;
        this.filter = new EmployeeFilter(this.list);
        this.build();
      });
  }

  build() {
    this.renderPoint.appendChild(this.filter.build());
    this.renderPoint.appendChild(this.list.build());
    this.renderPoint.appendChild(this.modal.build());
  }
}

const app = new App();
