var colors = ["sarı","kırmızı","mavi"]

for (let index = 0; index < colors.length; index++) {
    console.log(colors[index])
    
}

colors.forEach(function(color){
    console.log(color)
})

// Create an array of numbers

var numbers = [1,2,3,4,5]

//Create a variable to hold the sum

var sum = 0;

//Loop over the array , incrementing the sum variable

numbers.forEach(function(number){
    sum += number
})

//print the sum variable

sum;

//Exercise

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 },
  ];
  
  var areas = [];
  images.forEach(function (image) {
    areas.push(image.height * image.width);
  });
  