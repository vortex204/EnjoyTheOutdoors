function locationOption(item) {
  const option = document.createElement("option");
  option.value = item;
  option.innerHTML = item;
  return option;
}

function parkCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = item.LocationName;
  return card;
}

function showCards(list, target) {
  target.innerHTML = ""; //CLEAR
  list.forEach((item) => target.appendChild(parkCard(item)));
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
