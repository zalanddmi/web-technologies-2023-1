class Topping {
    constructor(name, smallPrice, largePrice, smallCalories, largeCalories) {
        this.name = name;
        this.smallPrice = smallPrice;
        this.largePrice = largePrice;
        this.smallCalories = smallCalories;
        this.largeCalories = largeCalories;
    }

    getPrice(size) {
        return size === 'small' ? this.smallPrice : this.largePrice;
    }

    getCalories(size) {
        return size === 'small' ? this.smallCalories : this.largeCalories;
    }
}

class Pizza {
    constructor(name, basePrice, baseCalories) {
        this.name = name;
        this.basePrice = basePrice;
        this.baseCalories = baseCalories;
        this.toppings = [];
        this.size = 'small';
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    removeTopping(topping) {
        this.toppings = this.toppings.filter(item => item !== topping);
    }

    getToppings() {
        return this.toppings;
    }

    getSize() {
        return this.size;
    }

    setSize(size) {
        if (size === 'small' || size === 'large') {
            this.size = size;
        } else {
            console.log('Invalid size.');
        }
    }

    getName() {
        return this.name;
    }

    calculatePrice() {
        let totalPrice = this.basePrice;
        totalPrice += (this.size === 'small' ? 100 : 200);

        this.toppings.forEach(topping => {
            totalPrice += topping.getPrice(this.size);
        });

        return totalPrice;
    }

    calculateCalories() {
        let totalCalories = this.baseCalories;
        totalCalories += (this.size === 'small' ? 100 : 200);

        this.toppings.forEach(topping => {
            totalCalories += topping.getCalories(this.size);
        });

        return totalCalories;
    }
}

const mozzarella = new Topping('mozzarella', 50, 100, 20, 40);
const cheddar = new Topping('cheddar', 150, 300, 50, 100);
const parmesan = new Topping('parmesan', 150, 300, 50, 100);

const margarita = new Pizza('Margarita', 500, 300);
margarita.setSize('large');
margarita.addTopping(mozzarella);
margarita.addTopping(cheddar);

console.log('Цена маргариты:', margarita.calculatePrice());
console.log('Калорийность маргариты:', margarita.calculateCalories());  