var products = [
  { name: "cucumber", type: "vegetables", quantity: 10, price: 12 },
  { name: "banana", type: "fruit", quantity: 1, price: 17 },
  { name: "celery", type: "vegetables", quantity: 18, price: 12 },
  { name: "orange", type: "fruit", quantity: 5, price: 20 },
];

var filteredProducts = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filteredProducts.push(products[i]);
  }
}

filteredProducts;

products.filter(function (product) {
  if (product.type === "fruit") {
    return true;
  }
});

//Type is "vegetables", quantity is greater than 0,prodice is less to 12

products.filter(function (product) {
  return (
    product.type === "vegetables" && product.quantity > 0 && product.price < 12
  );
});

var post = { id: 4 , title: "New Post"};
var comments = [
    {postId : 4 , content : "awesome post"},
    {postId : 3 , content : "it was ok"},
    {postId : 4 , content : "nice"},
];

function commentsForPost(post,comments){
    return comments.filter(function(comment){
        return comment.postId === postId;
    })
}

commentsForPost(post,comments);

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function (number) {
  return number > 50;
});


