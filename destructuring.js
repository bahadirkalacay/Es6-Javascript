var expens = {
    type: "Business",
    amount: "$45 USD"
}

//ES5 

// var type = expens.type;
// var amount = expens.amount;

//ES6 

const {type,amount} = expens;

var savedFiled = {
    extension : "jpg",
    name:"repost",
    size:1400
}

//ES5

function fileSummary(file){
    return `The file ${file.name}.${file.extension} is of size ${file.size}`
}

fileSummary(savedFiled);

//ES6

function fileSummaryTwo({name,extension,size}){
    return `The file ${name}.${extension} is of size ${size}`
}

fileSummaryTwo(savedFiled);

const companies = [
    "Google","Facebook","Uber"
]

const [name,name2,...name3] = companies;


const company = [
    {name:"Google" , location :"Mountain View"},
    {name:"Facebook",location:"Menlo Park"}
]

const [{location}] = company;
location; //Mountain View

const Google = {
    locationsTwo:["Mountain View", "New York","London"]

}

const {locations: [locationTwo]} = Google;
locationTwo; //Mountain View

