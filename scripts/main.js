const navURLs = [
  { name: "Home", url: "index.html" },
  { name: "National Parks", url: "parks.html" },
  { name: "Mountains", url: "mountains.html" },
];

function navLink(item) {
  const a = document.createElement("a");
  a.href = item.url;
  a.innerHTML = item.name;
  return a;
}

document.addEventListener("DOMContentLoaded", () => {
  const image = document.createElement("img");
  image.src = "images/banner.jpg";
  image.alt = "Banner Image";
  const banner = document.createElement("div");
  banner.classList.add("banner");
  banner.appendChild(image);
  document.body.prepend(banner);

  const nav = document.getElementById("nav");
  navURLs.forEach((item) => nav.appendChild(navLink(item)));

  const logo = document.createElement("img");
  logo.src = "images/logo.png";
  logo.alt = "Logo";
  logo.classList.add("logo");
  nav.insertAdjacentElement("afterbegin", logo);
});

