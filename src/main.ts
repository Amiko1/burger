import "./reset.css";
import "./style.css";
import "./animate.css";

const openedBurgers = document.querySelectorAll(
  ".burger__opened"
) as unknown as HTMLDivElement;
const burgerIngredients = document.querySelectorAll(".burger__igredient");
const burgerDescriptions = document.querySelectorAll(".burger__description");
const burgerSectionHeaders = document.querySelectorAll(
  ".burger-section__header"
);

setTimeout(() => {
  for (let burgerIngredient of burgerIngredients) {
    burgerIngredient.classList.remove("no-transition");
  }
  for (let burgerDescription of burgerDescriptions) {
    burgerDescription.classList.remove("no-transition");
  }
}, 0);

for (let openedBurger of openedBurgers) {
  openedBurger.addEventListener("click", () => {
    for (let burgerIngredient of burgerIngredients) {
      burgerIngredient.classList.toggle("transform-normal");
    }
    for (let burgerDescription of burgerDescriptions) {
      burgerDescription?.classList.toggle("hide-out");
    }

    console.log(burgerSectionHeaders);

    for (let burgetDesctionHeader of burgerSectionHeaders) {
      console.log(burgetDesctionHeader);
      burgetDesctionHeader?.classList.toggle("throw-up");
    }
  });
}
