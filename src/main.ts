import "./reset.css";
import "./style.css";
import "./animate.css";

const openedBurger = document.querySelector(
  ".burger__opened"
) as unknown as HTMLDivElement;
const burgerIngredients = document.querySelectorAll(".burger__igredient");
const burgerDescriptions = document.querySelectorAll(".burger__description");

openedBurger.addEventListener("click", () => {
  for (let burgerIngredient of burgerIngredients) {
    burgerIngredient.classList.toggle("transform-normal");
  }
  for (let burgerDescription of burgerDescriptions) {
    burgerDescription?.classList.toggle("display-block");
  }
});
