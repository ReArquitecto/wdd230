async function getBusinessData() {
    const response = await fetch("https://rearquitecto.github.io/wdd230/chamber/buisness-contacts.json");
    const data = await response.json();
    displayBusinesses(data);
  }
  
  function displayBusinesses(data) {
    const cards = document.querySelector(".cards");
    
    data.forEach((business) => {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let pAddress = document.createElement("p");
      let pPhone = document.createElement("p");
      let pWebsite = document.createElement("p");
      let pMembership = document.createElement("p");
      let pDescription = document.createElement("p");
      let img = document.createElement("img");
      
      h2.textContent = business.name;
      pAddress.textContent = `Address: ${business.address}`;
      pPhone.textContent = `Phone: ${business.phone}`;
      pWebsite.innerHTML = `Website: <a href="${business.website}" target="_blank">${business.website}</a>`;
      pMembership.textContent = `Membership Level: ${business.membership}`;
      pDescription.textContent = business.description;
      img.src = `images/${business.image}`;
      img.alt = `Logo for ${business.name}`;
      
      card.appendChild(h2);
      card.appendChild(img);
      card.appendChild(pAddress);
      card.appendChild(pPhone);
      card.appendChild(pWebsite);
      card.appendChild(pMembership);
      card.appendChild(pDescription);
      
      cards.appendChild(card);
    });
  }
  
  getBusinessData();
  