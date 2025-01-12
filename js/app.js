const count = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

let result = 0;

increase.addEventListener("click" , () => {
  result += 1;
  count.innerHTML = result;
  result === 0 && (count.style.color = "rgba(0, 0, 0, 0.6)");
  result > 0 && (count.style.color = "#198754");
});

decrease.addEventListener("click" , () => {
  result -= 1;
  count.innerHTML = result;
  result === 0 && (count.style.color = "rgba(0, 0, 0, 0.6)");
  result < 0 && (count.style.color = "#dc3545");
});

reset.addEventListener("click" , () => {
  result = 0;
  count.innerHTML = result;
  count.style.color = "rgba(0, 0, 0, 0.6)"
});
