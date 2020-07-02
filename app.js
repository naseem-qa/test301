'use strict';

var container = document.getElementById('table');

var table = document.createElement('table');
container.appendChild(table);

var carsArr = ['BMW','Mercedes','Cadillac'];

function Cars(carModel, modelYear, manufacturer) {
    this.carModel = carModel;
    this.modelYear = modelYear;
    this.manufacturer = manufacturer;
    this.price;
}

// var BMW = new Cars('BMW', 1980,'Germany');
// var Mercedes = new Cars('Mercedes', 1990, 'Germany');
// var Cadillac = new Cars('Cadillac', 1990, 'USA');
var vehicles =[];
vehicles.push(new Cars('BMW', 1980,'Germany'));
vehicles.push(new Cars('Mercedes', 1990, 'Germany'));
vehicles.push(new Cars('Cadillac', 1990, 'USA'));

Cars.prototype.randomPrice = function () {
        var carRandomPrice = Math.ceil(Math.floor(Math.random() * (100000 - 7000)) + 7000);
        this.price = carRandomPrice;
}


function renderHr(table) {

    var tr = document.createElement('tr');
    table.appendChild(tr);
    var th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = 'Car Model';

        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = 'Model Year';

        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = 'Price';

        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = 'Car Manufacturer';
}
renderHr(table);


Cars.prototype.render = function (table) {

    var tr = document.createElement('tr');
    table.appendChild(tr);

    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.carModel;
    
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this. modelYear;

    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.price;

    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.manufacturer;
}

for (let index = 0; index < vehicles.length; index++) {
    vehicles[index].randomPrice();
    vehicles[index].render(table);
}

function formNew(event) {
    event.preventDefault();

    var carModel = event.target.carModel.value;
    var modelYear = parseInt(event.target.modelYear.value);
    var manufacturer =event.target.manufacturer.value;

    var newCar = new Cars(carModel, modelYear, manufacturer);
    vehicles.push(newCar);
    carsArr.push(carModel);

    newCar.randomPrice();
    newCar.render(table);
}

var form = document.getElementById('carsForm');
form.addEventListener('submit', formNew);
