function addNumbers(...numbers){
    return numbers.reduce((sum,number)=>{
        return sum + number
    }, 0)
}

addNumbers(1,2,3,4,8,5,6,4,6,7)


const defaultColors = ["red","green"];
const myFavorite = ["blue","orange"]

const newList = [...defaultColors,...myFavorite] //concat