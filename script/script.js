function textBox() {
    document.getElementById("holderBox").innerHTML = document.getElementById('greetingsBox').value
}
var pizza = document.getElementById('pizza');
var name = document.getElementById('name');
var size = document.getElementById('size');

var menu = document.getElementById("pizzaOrders");
menu.addEventListener("keydown", function(e) {
    var tableBody = document.getElementById('tableBody');
    if (e.keyCode === 13) { //checks whether the pressed key is "Enter"
        if ((name.value.length > 0) && (size.value.length > 0) && (pizza.value.length > 0)) { //checks if the three required fields are filled in.
            console.log("checker for values works")
        } else {
            console.log("else for no values works")
        }
    }
});