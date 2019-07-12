//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

// function rando() {
//     const decimal = Math.random();
//     const times10 = decimal * 10;
//     const final = Math.floor(times10)
//     console.log(final);
// }

// rando();
function rNumber() {
    // const decimal = Math.random();
    const decimal = Math.floor((Math.random() * 20) + 1); 
   let wNumber = Math.ceil(20);
    wNumber = Math.floor(1);
    return wNumber
    
    // console.log(decimal);
}
console.log(rNumber());

function simplify(max){
    return Math.floor((Math.random() * max) + 0);
}


function rLetter(){ 
let rlength = alphabet.length;
const randomindex = simplify(rlength);
console.log("random letter: " + alphabet[randomindex]);
} 
rLetter();

function rFoods(){ 
    let rfood = foods.length;
    const randomfoods = simplify(rfood);
    console.log("i like " + foods[randomfoods]);
    } 
    rFoods();

    function rStudents(){ 
        let rclass = students.length;
        const classroom = simplify(rclass)
   console.log("welcome to class " + students[classroom]);
}
rStudents()
// const kwesi = marlon();
// const eric = marlon();
// const abdul = marlon();
// // console.log(kwesi);
// // console.log(eric);
// // console.log(abdul);