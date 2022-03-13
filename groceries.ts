export {};

class grocery {
    name: string;
    id: number;
    description: string;
    quantity: number;
    price: number;


    constructor (name: string, id: number, description: string, quantity: number, price: number) {
        this.name = name;
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price;   
    }
}

let item_chicken = new grocery("Chicken", 01, "Boneless, Skinless Chicken Thighs", 2, 6.50);
let item_milk = new grocery("Milk", 02, "Whole-Fat Milk", 5, 3.99);
let item_cauliflower = new grocery("Cauliflower", 03, "Fresh Cauliflower Head", 4, 1.99);
let item_eggs = new grocery("Eggs", 04, "One Dozen Free Range Eggs", 8, 2.50)
let item_bread = new grocery("Bread", 05, "Fresh Sourdough Bread", 6, 2.50)

let Groceries: grocery[] = [];

Groceries.push(item_chicken);
Groceries.push(item_milk);
Groceries.push(item_cauliflower);
Groceries.push(item_eggs);
Groceries.push(items_bread);

const table = document.getElementById('grocery') as HTMLTableElement;

Groceries.map(grocery => {
    const {name, id, description, quantity, price} = grocery;
    const row = table.insertRow()
    row.innerHTML = `
        <td id = "Name">${name}</td>
        <td id = "ID">${id}</td>
        <td id = "Description">${description}</td>
        <td id = "Quantity">${quantity}</td>
        <td id = "Price">${price}</td>`

})