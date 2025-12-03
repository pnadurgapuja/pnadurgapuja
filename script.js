// FULL PAGE LOAD Loader দেখানো
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loaderScreen").style.display = "flex";
});

// সব লোড শেষ → Loader hide
window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loaderScreen").style.display = "none";
  }, 400); 
});

// Back click e loader off
window.addEventListener("pageshow", e => {
  if (e.persisted) {
    document.getElementById("loaderScreen").style.display = "none";
  }
});

// Details page always reload + loader show
function forceReload(el) {
  document.getElementById("loaderScreen").style.display = "flex";
  window.location.href = el.href + "?t=" + Date.now();
  return false;
}

// Search filter
function searchCards() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    let name = card.querySelector('.card-title').textContent.toLowerCase();
    card.style.display = name.includes(input) ? "" : "none";
  });
}