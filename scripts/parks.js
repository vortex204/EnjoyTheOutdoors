function locationOption(item) {
  const option = document.createElement("option");
  option.value = item;
  option.innerHTML = item;
  return option;
}

function parkCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");

  // Create HTML elements to display the park information
  const name = document.createElement("h2");
  name.textContent = item.LocationName;

  const address = document.createElement("p");
  address.textContent = "Address: " + item.Address;

  const city = document.createElement("p");
  city.textContent = "City: " + item.City;

  const state = document.createElement("p");
  state.textContent = "State: " + item.State;

  const zipcode = document.createElement("p");
  zipcode.textContent = "Zip Code: " + item.ZipCode;

  const phone = document.createElement("p");
  phone.textContent = "Phone: " + item.Phone;

  const fax = document.createElement("p");
  fax.textContent = "Fax: " + item.Fax;

  card.appendChild(name);
  card.appendChild(address);
  card.appendChild(city);
  card.appendChild(state);
  card.appendChild(zipcode);
  card.appendChild(phone);
  card.appendChild(fax);

  return card;
}

function showCards(list, target) {
  target.innerHTML = ""; // Clear the previous results

  // Check if there are any matches
  if (list.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No results found.";
    target.appendChild(message);
  } else {
    list.forEach((item) => target.appendChild(parkCard(item)));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const results = document.getElementById("results");
  const select = document.getElementById("location");
  const selectType = document.getElementById("type");

  function applyFilters() {
    const v = select.selectedOptions[0].value;
    const matches = nationalParksArray.filter(
      (item) => item.State == v || v == ""
    );

    const v2 = selectType.selectedOptions[0].value;
    const matches2 = matches.filter(
      (item) =>
        item.LocationName.toLowerCase().includes(v2.toLowerCase()) || v2 == ""
    );

    showCards(matches2, results);
  }

  locationsArray.forEach((item) => select.appendChild(locationOption(item)));
  parkTypesArray.forEach((item) =>
    selectType.appendChild(locationOption(item))
  );

  select.addEventListener("change", applyFilters);
  selectType.addEventListener("change", applyFilters);

  //SHOW ALL CARDS
});
