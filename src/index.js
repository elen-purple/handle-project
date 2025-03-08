import mealsList from "./templates/meals.hbs";
import mealsData from "./menu.json";

const root = document.querySelector("#root");
const meals = mealsData.meals;
const mealsLayout = mealsList({meals});
root.innerHTML = mealsLayout;

