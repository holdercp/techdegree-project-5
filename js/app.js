function createLI(innerHTML) {
  const li = document.createElement('li');
  li.innerHTML = innerHTML;
  return li;
}

fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then((data) => {
    data.results.forEach((employee) => {
      const div = document.createElement('div');
      const ul = document.createElement('ul');
      const image = createLI(`<img src="${employee.picture.thumbnail}" alt="${employee.name.first} ${
        employee.name.last
      }'s profile picture">`);
      const name = createLI(`<p>${employee.name.first} ${employee.name.last}</p>`);
      const email = createLI(`<p>${employee.email}</p>`);
      const city = createLI(`<p>${employee.location.city}</p>`);
      ul.appendChild(image);
      ul.appendChild(name);
      ul.appendChild(email);
      ul.appendChild(city);
      div.appendChild(ul);
      document.querySelector('main').appendChild(div);
    });
  });
