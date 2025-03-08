import mealsList from "./templates/meals.hbs";
import mealsData from "./menu.json";

const root = document.querySelector("#root");
const meals = mealsData.meals;
const mealsLayout = mealsList({meals});
root.innerHTML = mealsLayout;

// import pizzalist from "./templates/meals.hbs";
// import pizzadata from "./menu.json";

// const menu = document.querySelector("#menu");
// const pizzas = pizzadata.pizzas;
// const pizzaLayout = pizzalist({ pizzas });
// menu.innerHTML = pizzaLayout;
