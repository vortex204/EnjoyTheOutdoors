document.addEventListener("DOMContentLoaded", () => {
  const mountainList = document.getElementById("mountainList");

  let heading = document.createElement("h1");
  let image = document.createElement("img");
  let description = document.createElement("p");
  let elevation = document.createElement("p");
  let coordinates = document.createElement("p");
  let effort = document.createElement("p");
  document.body.appendChild(heading);
  document.body.appendChild(image);
  document.body.appendChild(description);
  document.body.appendChild(elevation);
  document.body.appendChild(coordinates);
  document.body.appendChild(effort);

  for (let i = 0; i < mountainsArray.length; i++) {
    let mountainInfo = mountainsArray[i];
    const option = document.createElement("option");
    option.innerHTML = mountainInfo.name;
    option.value = mountainInfo.name;

    mountainList.appendChild(option);
  }

  async function displayMountain(mountainInfo) {
    heading.innerHTML = mountainInfo.name;
    image.src = "images/" + mountainInfo.img;
    image.classList.add("img-fluid");
    description.innerHTML = mountainInfo.desc;
    elevation.innerHTML = "Elevation: " + mountainInfo.elevation;
    effort.innerHTML = "Effort: " + mountainInfo.effort;
    const sunriseAndSunsetData = await getSunriseAndSunsetForMountain(
      mountainInfo.coords.lat,
      mountainInfo.coords.lng
    );
    coordinates.innerHTML = `Sunset Time: ${sunriseAndSunsetData.sunset}`;
    coordinates.innerHTML += `<br>Sunrise Time:${sunriseAndSunsetData.sunrise}`;
  }

  mountainList.addEventListener("change", () => {
    let selectedList = mountainList.selectedOptions[0].value;
    for (i = 0; i < mountainsArray.length; i++) {
      let mountainInfo = mountainsArray[i];
      if (selectedList === mountainInfo.name) {
        displayMountain(mountainInfo);
      }
    }
  });
});

// function to "fetch" the sunrise/sunset times
async function getSunriseAndSunsetForMountain(lat, lng) {
  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
  );
  let data = await response.json();
  return {
    sunrise: data.results.sunrise,
    sunset: data.results.sunset,
  };
}
