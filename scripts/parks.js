function locationOption(item) {
  const option = document.createElement("option");
  option.value = item;
  option.textContent = item;
  return option;
}

function parkCard(item) {
  const row = document.createElement("tr");

  const name = document.createElement("td");
  name.textContent = item.LocationName;

  const address = document.createElement("td");
  address.textContent = item.Address;

  const city = document.createElement("td");
  city.textContent = item.City;

  const state = document.createElement("td");
  state.textContent = item.State;

  const zipcode = document.createElement("td");
  zipcode.textContent = item.ZipCode;

  const phone = document.createElement("td");
  phone.textContent = item.Phone;

  const fax = document.createElement("td");
  fax.textContent = item.Fax;

  row.appendChild(name);
  row.appendChild(address);
  row.appendChild(city);
  row.appendChild(state);
  row.appendChild(zipcode);
  row.appendChild(phone);
  row.appendChild(fax);

  return row;
}

function showCards(list, target) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = ""; // Clear the previous results

  if (list.length === 0) {
    const tableRow = document.createElement("tr");
    const message = document.createElement("td");
    message.setAttribute("colspan", "7");
    message.textContent = "No results found.";
    tableRow.appendChild(message);
    tableBody.appendChild(tableRow);
  } else {
    list.forEach((item) => {
      const tableRow = parkCard(item);
      tableBody.appendChild(tableRow);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const results = document.getElementById("list");
  const select = document.getElementById("location");
  const selectType = document.getElementById("type");
  const searchBox = document.getElementById("searchBox");

  function applyFilters() {
    const locationValue = select.selectedOptions[0].value;
    const typeValue = selectType.selectedOptions[0].value;
    const searchValue = searchBox.value.toLowerCase().trim();

    const matches = nationalParksArray.filter((item) => {
      const locationMatch = item.State === locationValue || locationValue === "";
      const typeMatch =
        item.LocationName.toLowerCase().includes(typeValue.toLowerCase()) || typeValue === "";
      const searchMatch =
        item.LocationName.toLowerCase().includes(searchValue) ||
        item.State.toLowerCase().includes(searchValue);
      return locationMatch && typeMatch && searchMatch;
    });

    showCards(matches, results);
  }

  locationsArray.forEach((item) => select.appendChild(locationOption(item)));
  parkTypesArray.forEach((item) => selectType.appendChild(locationOption(item)));

  select.addEventListener("change", applyFilters);
  selectType.addEventListener("change", applyFilters);
  searchBox.addEventListener("input", applyFilters);

  applyFilters(); // Initial filter application
});
