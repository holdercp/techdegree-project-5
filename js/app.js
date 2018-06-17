const mainElement = document.querySelector('main');

const modal = new Modal();

fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then((data) => {
    data.results.forEach((employee, index) => {
      console.log(employee);

      const empCard = new EmployeeCard(employee, modal);
      empCard.build(mainElement);
    });
  });
