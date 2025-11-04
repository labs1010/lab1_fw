function calculateIceCreamCost(): void {
    const sizeInput = prompt("Розмір морозива:\n1 - Маленький стаканчик (10грн)\n2 - Великий стаканчик (25грн)");
    const toppingsInput = prompt("Начинки (через кому):\n1 - шоколад (+5грн)\n2 - карамель (+6грн)\n3 - ягоди (+10грн)")
    const marshmallowInput = prompt("Додати маршмелоу?\n1 - Так (+5грн)\n2 - Ні");

    let cost = 0;

    if (sizeInput === "1") {
        cost += 10;
    } else if (sizeInput === "2") {
        cost += 25;
    } else {
        alert("Невірний вибір розміру!");
        return;
    }

    if (toppingsInput) {
        const toppings = toppingsInput.split(",").map(item => item.trim());
        
        if (toppings.length === 0) {
            alert("Оберіть хоча б одну начинку!");
            return;
        }

        for (const topping of toppings) {
            switch (topping) {
                case "1":
                    cost += 5;
                    break;
                case "2":
                    cost += 6;
                    break;
                case "3":
                    cost += 10;
                    break;
                default:
                    alert(`Невірний вибір начинки: ${topping}`);
                    return;
            }
        }
    } else {
        alert("Оберіть хоча б одну начинку!");
        return;
    }

    if (marshmallowInput === "1") {
        cost += 5;
    }

    alert(`Загальна вартість морозива: ${cost}грн`);
}

calculateIceCreamCost();