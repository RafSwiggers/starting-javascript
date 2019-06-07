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
            var row = table.insertRow(2); // creates a new row
            var cell1 = row.insertCell(0); // add the new cells
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerText = textName.value; // adds the text to the cells
            cell2.innerText = size.value;
            cell3.innerText = pizza.value;
            cell4.innerText = remarks.value;


        } else {
            console.log("else for no values works")
        }
    }
});
/*document.getElementById("launchMe").addEventListener("click", listmaker());

function listmaker() {
    let p = document.getElementById('listHolder');
    let span = document.getElementById('listHolder').children;
    console.log(span);
    //let newList = span.map(creatLi);
    //creat ul
    let ul = document.createElement('ul');
    // put ul in p
    p.appendChild(ul);
    //creat 4 li 
    for (let i = 0; i <= span.length; i++) {
        let newLi = document.createElement('li');
        ul.appendChild(newLi);
        newLi.appendChild(span[i]);
    }
}

var elem = document.getElementById("moveAnimation");
var pos = 0;
var id = setInterval(frame, 20);

function frame() {
    if (pos == 100) {
        clearInterval(id);
        id2 = setInterval(frameback, 50);
    } else {
        pos++;
        elem.style.left = pos + '%';
    }
}

function frameback() {
    if (pos == 0) {
        clearInterval(id2);
        setInterval(frame, 20);
    } else {
        pos--;
        elem.style.left = pos + '%';
    }
} */


window.onload = function() {
    var bsDiv = document.getElementById("followMouse");
    var x, y;
    // On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
    window.addEventListener('mousemove', function(event) {
        x = event.clientX;
        y = event.clientY;
        if (typeof x !== 'undefined') {
            bsDiv.style.left = x + "px";
        }
    }, false);
}