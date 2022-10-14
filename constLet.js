// var name = "Bahadır";
// var title = "Frontend Developer";
// var hourlyWage = 40;

ES6

const name = "Bahadır";
let title = "Frontend Developer";
let hourlyWage = 40;

TemplateStrings

function getMessage(){
    const year = new Date().getFullYear();

    return `The year is ${year}`
}

getMessage();

Arrow

const add = (a,b) => {
    return a+b
}

const newSum = add(1,2)
newSum;

//Default Function Arguments

function makeRequest(url,method = "GET"){
    return method;
}

makeRequest("google");
makeRequest("google", "POST")

function User(id){
    this.id = id
}
function generateId(){
    return Math.random() * 9999
}
function createAdminUser(user){
    user.admin = true;
    return user
}

createAdminUser(new User(generateId()))