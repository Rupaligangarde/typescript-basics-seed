class SizesClass {
    constructor(public sizes: string[]) {
    }

    get availableSizes() {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

const sizesClass = new SizesClass(['small']);
console.log(sizesClass.availableSizes);

sizesClass.availableSizes = ['small', 'large'];
console.log(sizesClass.availableSizes);

class PizzaClass extends SizesClass {
    private toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}


let pizzaClass = new PizzaClass(
    "pepperoni pizza class",
    ['small']);
pizzaClass.addTopping('veggie');

console.log(pizzaClass.name);
console.log(pizzaClass.availableSizes);


interface SizesInterface {
    sizes: string[];
    availableSizes: string[];

}


interface PizzaInterface extends SizesInterface{
    readonly name: string;
    toppings: string[];

    updateSizes(sizes: string[]): void;
    addToppings(topping: string): void;
}




const date=new Date();

console.log(date);


const date2 = Date.now()
console.log(date2);




class Coupon{
     static allowed = ['pepperoni', 'blazing Inferno'];

     static create(percentage: number){
         return `PIZZA_RESTAURANT_${percentage}`
     }
}

console.log(Coupon.allowed);
console.log(Coupon.create(50));