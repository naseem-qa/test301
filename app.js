'use strict';

var container = document.getElementById('table');

var table = document.createElement('table');
container.appendChild(table);

function Cars(carModel, modelYear, manufacturer) {
    this.carModel = carModel;
    this.modelYear = modelYear;
    this.manufacturer = manufacturer;
    this.price;
    Cars.all.push(this)
}

Cars.all =[];
new Cars('BMW', 1980,'Germany');
new Cars('Mercedes', 1990, 'Germany');
new Cars('Cadillac', 1990, 'USA');
console.log('ARR', Cars.all)

const randomPrice = function (car) {
        var carRandomPrice = Math.ceil(Math.floor(Math.random() * (100000 - 7000)) + 7000);
        console.log('car',car)
        car.price = carRandomPrice;
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


const render = function (table) {

    for (let i = 0; i < Cars.all.length; i++) {

        console.log('love', Cars.all)
        
        randomPrice(Cars.all[i]);

        var tr = document.createElement('tr');
        table.appendChild(tr);
        
        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = Cars.all[i].carModel;
        
        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = Cars.all[i]. modelYear;
        
        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = Cars.all[i].price;
        
        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = Cars.all[i].manufacturer;
    }
}



function formNew(event) {
    event.preventDefault();
    table.innerHTML = '';

    var carModel = event.target.carModel.value;
    var modelYear = parseInt(event.target.modelYear.value);
    var manufacturer = event.target.manufacturer.value;
    new Cars(carModel, modelYear, manufacturer);
    console.log('here', Cars.all);
    renderHr(table);
    render(table);
    setData();

}


function setData() {   
    var vehiclesArr = JSON.stringify(Cars.all);
    localStorage.setItem('newVehicles', vehiclesArr);
}


function getData() {
    let storedCars = localStorage.getItem('newVehicles');
    console.log('storedCars',JSON.parse(storedCars));
    if (storedCars) {
        Cars.all = JSON.parse(storedCars);  
    }
}

var form = document.getElementById('carsForm');
form.addEventListener('submit', formNew);

getData();
renderHr(table);
render(table);