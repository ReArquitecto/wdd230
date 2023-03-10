const url = 'https://rearquitecto.github.io/wdd230/chamber/buisness-contacts.json';

async function getcompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.companies);
    displayCompanies(data.companies);
  }
  
function displayCompanies(companies) {
    const cards = document.querySelector('section.cards'); // select the output container element
  
    companies.forEach((company) => {
      // Create elements to add to the div.cards element
      let logo = document.createElement('img');
      let card = document.createElement('section');
      card.classList.add("card");
      let h2 = document.createElement('h2');
      let email = document.createElement('p');
      let phone = document.createElement('p');
      let address = document.createElement('p');
  
      // Build the h2 content out to show the p full name - finish the template string
      h2.textContent = `${company.name}`;
      email.textContent = `${company.email}`;
      phone.textContent = `Phone: ${company.phone}`;
      address.textContent = `Address: ${company.address}`;
  
      // Build the image portrait by setting all the relevant attribute
      logo.setAttribute('src', company.logo);
      logo.setAttribute('alt', `Logo of ${company.name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '340');
      logo.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(logo);
      card.appendChild(h2);
      card.appendChild(phone);
      card.appendChild(address);
  
      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression

getcompaniesData();
  