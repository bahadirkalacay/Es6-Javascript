var numbers = [1,2,3,4]
var doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    doubleNumbers.push(numbers[i] * 2);
    
}

var doubled = numbers.map(function(number){
    return number * 2
})

doubled;

doubleNumbers;

var cars = [
    {model: "Wv", price: 200000},
    {modal:"Opel", price:250000}
]

var prices = cars.map(function(car){
    return car.price;
})

prices;