const pizzaCost = 10;
const pizzaTopping = 2;

function calculatePrice(cost: number, toppings: number): number {
    return cost + 1.5 * toppings;
}

const cost = calculatePrice(pizzaCost, pizzaTopping);
console.log(cost)


const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
    return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
console.log(couponMessage);


const pizzas: number = 2;

function offerDiscount(orders: number): boolean {
    return orders >= 3;
}

if (offerDiscount(pizzas)) {
    console.log('offer available');
} else {
    console.log('No offer available')
}


let coupon2: any;

coupon2 = 25;
coupon2 = 'csd';
coupon2 = true;


let implicitCoupon = 'pizza25';
let explicitCoupon: string = 'pizza25';


let selectedTopping: string = 'peppperoni';

function selectTopping(topping: string) {
    selectedTopping = topping;
}

selectTopping('bacon');
console.log(selectedTopping);


// function orderError(error: string) {
//     throw new Error(error);
// }
//
// orderError('something went wrong');


let coupon3: string | null = 'pizza25';

function removeCoupon() {
    coupon3 = null;
}

console.log(coupon3);

removeCoupon();
console.log(coupon3);


let pizzaSize: string = '';

function selectSize(size: 'small' | 'medium' | 'large') {
    pizzaSize = size;
}

selectSize('medium');
console.log(`pizza sie is ${pizzaSize}`);


let pizza2: {
    name: string,
    price: number,
    getName(): string
} = {
    name: 'plain old pepperoni object types',
    price: 20,
    getName(): string {
        return pizza2.name
    }
}

console.log(pizza2.getName());


const sizesString: Array<String> = ['small', 'medium', 'large'];
const sizesNUmber: Array<Number> = [1, 2, 3];

let pizza3: [string, number, boolean, string[]];
pizza3 = ['pepperoni', 20, true, ['', ""]];


type Size = 'small' | 'medium' | 'large';

type Callback = (size: Size) => void;

let pizzaSize2: Size = 'small';

const selectSize2: Callback = (x) => {
    pizzaSize2 = x;
}

selectSize2('large');
console.log(pizzaSize2);

type myPizzaType = { name: string, toppings: number }

const myPizza: myPizzaType
    = {name: 'blazing Infero', toppings: 5};

const serialized = JSON.stringify(myPizza);

function getNameFromJson(obj: string): string {
    return (JSON.parse(obj) as myPizzaType).name;
}

function getToppingsFromJson(obj: string): number {
    return (JSON.parse(obj) as myPizzaType).toppings;
}

console.log(serialized);
console.log(getNameFromJson(serialized));
console.log(getToppingsFromJson(serialized));

interface Pizza {
    name: string,
    sizes: string[]
}

type NewPizza = {
    name: string,
    sizes: string[]
    price: number
};

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes
    }
}

let newPizza: Pizza;
newPizza = createPizza('pepperoni', ['small', 'medium']);


console.log(newPizza)
