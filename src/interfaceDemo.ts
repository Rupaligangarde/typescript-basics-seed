interface Sizes {
    sizes: string[];

    getAvailableSizes(): string[];
}

interface PizzaInterFace extends Sizes {
    name: string;
    toppings?: number;

    [key: number]: string;

    dictionary?: {
        [key: string]: any
    }
}

function createPizza1(name: string, sizes: string[]): PizzaInterFace {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    }
}

let pizza = createPizza1(
    'pepperoni interface',
    ['small interface', 'large interface']);

console.log(pizza.getAvailableSizes())
console.log(pizza)

pizza.toppings = 1;
console.log(pizza)


pizza[1] = 'zxy';
pizza.dictionary ? pizza.dictionary :
    pizza.dictionary = {"special": 1}
console.log(pizza)

