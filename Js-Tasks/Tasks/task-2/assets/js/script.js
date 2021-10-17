let row = Number(prompt("Setrlerin sayini yazin: "));
let column = Number(prompt("sutunlarin sayini yazin: "));

let div = document.getElementsByClassName("table")[0];


function addTable(a, b) {

    let table = document.createElement('TABLE');
    table.border = '1';

    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (let i = 0; i < a; i++) {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (let j = 0; j < b; j++) {
            let td = document.createElement('TD');
            td.appendChild(document.createTextNode("Table " + (i + 1)));
            tr.appendChild(td);
        }
    }
    div.appendChild(table);
}
addTable(row, column);