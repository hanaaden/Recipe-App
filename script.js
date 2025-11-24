const glass = document.querySelector(".fa-magnifying-glass");
const input = document.querySelector("input");

input.addEventListener("click", () => {
    glass.setAttribute("style", "display: none");
});