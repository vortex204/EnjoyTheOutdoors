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
  target.innerHTML = ""; // Clear the previous results

  if (list.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No results found.";
    target.appendChild(message);
  } else {
    const table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-striped");

    const tableHead = document.createElement("thead");
    const tableHeadRow = document.createElement("tr");
    const headers = [
      "Location Name",
      "Address",
      "City",
      "State",
      "Zip Code",
      "Phone",
      "Fax",
    ];

    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      tableHeadRow.appendChild(th);
    });

    tableHead.appendChild(tableHeadRow);
    table.appendChild(tableHead);

    const tableBody = document.createElement("tbody");
    list.forEach((item) => {
      const tableRow = parkCard(item);
      tableBody.appendChild(tableRow);
    });

    table.appendChild(tableBody);
    target.appendChild(table);
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
