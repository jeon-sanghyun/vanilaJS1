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