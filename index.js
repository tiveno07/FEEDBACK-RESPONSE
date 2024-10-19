const ratingEl = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const container = document.getElementById("container");

let selectedRating = "";

ratingEl.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    removeActive();
    console.log(e.target.innerText, e.target.parentNode.innerText);

    selectedRating = e.target.parentNode.innerText || e.target.innerText;
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    container.innerHTML = `
    <strong>Thank You!</strong>
     <br>
     <br>
    ${selectedRating}
   <p class="strong">We will use your feedback to improve our customer support.</p>`;
  }
});
function removeActive() {
  ratingEl.forEach((rating) => {
    rating.classList.remove("active");
  });
}
