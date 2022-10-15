promise = new Promise((resolve, reject) => {
  reject();
});

promise
  .then(() => console.log("Finaly finishes"))
  .then(() => console.log("i was also ran !!!"))
  .catcgh(() => console.log("error"));

url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  .then((response) => console.log(response))
  .catch((error) => console.log("Bad", error));
