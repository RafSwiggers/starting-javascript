function textBox() {
    document.getElementById("holderBox").innerText = document.getElementById('greetingsBox').value
}
var pizza = document.getElementById('pizzaField');
var textName = document.getElementById('nameField');
var size = document.getElementById('sizeField');
var remarks = document.getElementById('remarksField');

var menu = document.getElementById("pizzaOrders");
menu.addEventListener("keydown", function(e) {
    var table = document.getElementById("pizzaOrders");

    var tableBody = document.getElementById('tableBody');
    if (e.keyCode === 13) { //checks whether the pressed key is "Enter"
        if ((textName.value != '') && (size.value != '') && (pizza.value != '')) { //checks if the three required fields are filled in.
            var row = table.insertRow(2);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerText = textName.value;
            cell2.innerText = size.value;
            cell3.innerText = pizza.value;
            cell4.innerText = remarks.value;


        } else {
            console.log("else for no values works")
        }
    }
});