export {};

var Grocery = /** @class */ (function () {
    function Grocery(name, id, description, quantity, price) {
        this.name = name;
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
let item_chicken = new Grocery("Chicken", 01, "Boneless, Skinless Chicken Thighs", 2, 6.50);
let item_milk = new Grocery("Milk", 02, "Whole-Fat Milk", 5, 3.99);
let item_cauliflower = new Grocery("Cauliflower", 03, "Fresh Cauliflower Head", 4, 1.99);
let item_eggs = new Grocery("Eggs", 04, "One Dozen Free Range Eggs", 8, 2.50)
let item_bread = new Grocery("Bread", 05, "Fresh Sourdough Bread", 6, 2.50)
var groceries = [];
groceries.push(item_chicken);
groceries.push(item_milk);
groceries.push(item_cauliflower);
groceries.push(item_eggs);
groceries.push(item_bread);

var table = document.getElementById('Grocery');
groceries.map(function (grocery) {
    var name = grocery.name, grocery.id, description = grocery.description, quantity = grocery.quantity, price = grocery.price;
    var row = table.insertRow();
    row.innerHTML =
        <><td id="Name">" + name + "</td><td id="ID">" + id + "</td><td id="Description">" + description + "</td><td id="Quantity">" + quantity + "</td><td id="Price">" + price + "</td></>"
) 