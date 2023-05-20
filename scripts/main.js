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
  const nav = document.getElementById("nav");

  navURLs.forEach((item) => nav.appendChild(navLink(item)));
});
