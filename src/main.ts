import "./reset.css";
import "./style.css";
import "./animate.css";

const openedBurger = document.querySelector(
  ".burger__opened"
) as unknown as HTMLDivElement;
const burgerIngredients = document.querySelectorAll(".burger__igredient");

openedBurger.addEventListener("click", () => {
  for (let burgerIngredient of burgerIngredients) {
    burgerIngredient.classList.toggle("transform-normal");
  }
});
