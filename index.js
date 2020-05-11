// alert('Im working.Im JS. Im Beautiful. Im worth it');

// console.log('Im working.Im JS. Im Beautiful. Im worth it');

// let a = 221;
// let b = a-5;
// a=4;
// console.log(b,a);

// //String
// const what = "Nicolas";
// console.log(what);

// //Boolean
// const what = "Nicolas";
// console.log(what);

// //number
// const what = 234235;
// console.log(what);

// //float
// const what = 234.386758;
// console.log(what);

// const somgthing = "something"

// const daysOfWeek = ["mon","tue","wed","thu","fri","sat","sun", true, somgthing];
// const num =4;
// console.log(daysOfWeek[num]);

/*
const nicoInfo = {
    name:"Nicolas",
    age:55,
    gender:"male",
    isHandsome:true,
    favmovies:[
        "along the gods", "lotr","oldboy"
    ],
    favfood:[
        {name:"kimchi", fatty:false},
        {name:"chees burger", fatty:true}
    ]
};

const num =2;
console.log(nicoInfo.gender);
nicoInfo.gender = "female"
console.log(nicoInfo.gender);
console.log(console);
*/

// function sayHello(potato, chicken){
//     return `hello ${potato} you are ${chicken} years old`;
// }

// const greetNicolas = sayHello("nicolas",15);
// console.log(greetNicolas)

/*
const calculator = {
    plus : function(a,b){
        return a + b
    },
    minus: function(a,b){
        return a-b
    },
    divide: function(a,b){
        return a/b
    },
    multiple: function(a,b){
        return a*b
    },
    power: function(a,b){
        return a**b
    }
}


const plusConst = calculator.plus(5,5)
console.log(plusConst)

const minusConst = calculator.minus(5,2)
console.log(minusConst)

const divideConst = calculator.divide(10,2)
console.log(divideConst)

const multipleConst = calculator.multiple(5,2)
console.log(multipleConst)

const powerConst = calculator.power(5,2)
console.log(powerConst)
*/

const potato = document.querySelector("#titleID");

const CLICKED_CLASS = "clicked";

function handleClick(){
    
    potato.classList.toggle(CLICKED_CLASS)
    
    // const hasClass =potato.classList.contains(CLICKED_CLASS)
    // if(!hasClass){
    //     potato.classList.add(CLICKED_CLASS)
    // }else{
    //     potato.classList.remove(CLICKED_CLASS)

    // }

    
    // const currentClass = potato.className;
    // if(currentClass !== CLICKED_CLASS){
    //     potato.classList.add(CLICKED_CLASS)
    // } else{
    //     potato.classList.remove(CLICKED_CLASS);
    // }
}

// const BASE_COLOR = "rgb(0, 255, 255)";
// const OTHER_COLOR = "rgb(0, 0, 255)";

// // potato.innerHTML = "Hi From JS by potato";
// // potato.style.color= "blue";
// // // console.dir(titleID);
// // document.title = "i own you now";

// // function handleResize(){
// //     console.log("I have been resized")
// // }

// function handleClick(){
//     const currentColor = potato.style.color;
//     console.log("currentcolor:", currentColor);
//     if(currentColor === BASE_COLOR){
//         console.log("truecolor:", currentColor);
//         potato.style.color = OTHER_COLOR;
        
//     }
//     else{
//         console.log("falsecolor:", currentColor);
//         potato.style.color = BASE_COLOR;
        
//     }
//  }

function init(){
    // potato.style.color = BASE_COLOR;
    potato.addEventListener("click", handleClick);
    // console.log("initcolor:",potato.style.color)
}
init();

// function handleoffline(){
//     console.log("sdasg");
// }

// function handleonline(){
//     console.log("wel")
// }

// window.addEventListener("offline", handleoffline)
// window.addEventListener("online",handleonline)


// const age = prompt("How old are you");

// if(age >= 18 && age <= 21){
//     console.log("you can drind but you should not");
// }
// else if (age>21){
//     console.log("go ahead")
// }
// else{
//     console.log("too young")
// }