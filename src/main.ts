import "./reset.css";
import "./style.css";
import "./animate.css";

const closedBurger = document.querySelector(
  ".burger__closed"
) as unknown as HTMLDivElement;
const openedBurger = document.querySelector(
  ".burger__opened"
) as unknown as HTMLDivElement;
closedBurger.addEventListener("click", () => {
  closedBurger.classList.add("display-none");
  openedBurger.classList.add("display-block");
});
