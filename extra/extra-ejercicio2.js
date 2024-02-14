/*
    Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas.
    Recuerda no usar frutas duplicadas.
    Finalmente, imprime el array resultante.
*/

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];

const foodSchedule = [
    { name: "Salad", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
    { name: "Chicken", isVegan: false },
];

// Resultado 1

/*
let fruitChice = 0;

for (let i = 0; i < foodSchedule.length; i++) {
    const food = foodSchedule[i];

    if (!food.isVegan) {
        food.name = fruits[fruitChice];
        food.isVegan = true;

        fruitChice++;
    }
}

console.log(foodSchedule);
*/

// Resultado 2
/*
for (let i = 0; i < foodSchedule.length; i++) {
    const food = foodSchedule[i];
    const foodVegan = food.isVegan;

    if (!foodVegan) {
        food.name = fruits.pop();
        food.isVegan = true;
    }
}

console.log(foodSchedule);
*/

// Resultado 3

for (let i in foodSchedule) {
    const food = foodSchedule[i];
    const foodVegan = food.isVegan;

    if (!foodVegan) {
        food.name = fruits.pop();
        food.isVegan = true;
    }
}

console.log(fruits);
console.log(foodSchedule);