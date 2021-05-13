import { multiply } from "./utils/math";

function render() {
  let p = document.createElement("p");
  p.innerHTML = "test";
  document.body.appendChild(p);
}

render();

document.querySelector("#multiplyButton")?.addEventListener("click", () => alert(multiply(5,5)))