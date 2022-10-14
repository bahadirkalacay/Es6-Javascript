var products = [
    {name: "cucumber" , type:"vegetables"},
    {name: "banana" , type:"fruit"},
    {name: "celery" , type:"vegetables"},
    {name: "orange" , type:"fruit"},
];

var filteredProducts = [] ;

for (let i = 0; i < products.length; i++) {
    if(products[i].type === "fruit"){
        filteredProducts.push(products[i])
    }
    
}

filteredProducts;

products.filter(function(product){
    if(product.type === "fruit"){
        return true
    }
})