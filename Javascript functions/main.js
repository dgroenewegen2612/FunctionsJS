console.log('werkt')


//no function parameter
function sayHello(){
console.log('Hallo Allemaal')
};
//callingfuction
sayHello();


//function w parameter

function sayMessage(message){
    console.log('ik ben', message)
};

sayMessage('donald'
);

// function w more than one parameter

function sayMessage(message1,message2){
    console.log('voornaam is',message1)
    console.log('achternaam is', message2)
};

sayMessage('Damian','Groenewegen');

//function with return value
function calculateProduct(x,y){
    let result=x*y;
return result
}

let product = calculateProduct(6,3)
console.log('product is',product)
//////////////



//

function numberShow(a,b){ console.log('a is ',a);
console.log('b is ',b);}

numberShow(12,24)

//
function showSum(a, b) {console.log('som is 4+5',4+5)
    
}


showSum()


//

function fuseStrings(a,b) { const resultstring= a+" "+b;
    console.log('fusedstring is', resultstring);
}
fuseStrings('Francis', 'Ngannou')
//opdracht 1

function greet(){console.log('Hello')};

greet();

//opdracht 2
function welcome(){console.log('welkom bij rocmondriaan')};

welcome();

//opdr 3

function calculate(x,y){
    const anwser= x*y;
    return anwser
}
product=calculate(4,3);
console.log('het antwoord is ',product)


//opdracht 4
function calculateDivision()
{result=8/2;
console.log('8 gedeeld door 2 is',result)};

calculateDivision()


//opdracht 5

function showNumberArray(){
    let numbers=[1,2,3,4,5];
    console.log(numbers);
}

showNumberArray();

//popdracht 6
function showBrandArray(){
let brands=["mercedes",'tesla', 'peugeot','volkswagen'];
console.log(brands)
}

showBrandArray();

////opdracht 7



let computer = 7;

let user = 5;

let assignmentSeven = document.querySelector("#assignment-7")

function gamble() {

    
    let higherLower = prompt(" hoger of lager?")

    if (higherLower === "hoger") {

        assignmentSeven.textContent = "Fout"

    } else if (higherLower === "lager") {

        assignmentSeven.textContent = "Goed"

    }

}

 

gamble()



 

console.log("opdracht 8------------------------------------------");

//opdracht 8

function showMessage(text1) {

    console.log("Willekeurig tekst:", text1)

}

 

showMessage("Hallo");

 

console.log("opdracht 9------------------------------------------");

//opdracht 9

function showNumbers(number1, number2) {

    console.log("getallen", number1 + " - " + number2);

}

 

showNumbers(28, 10)

 

console.log("opdracht 10 en 11------------------------------------------");

//opdracht 10 en 11

function showSum(sum1, sum2) {

 

    console.log("getallen", sum1 + " - " + sum2);

}

 

    let result1 = "10 + 10";

    let result2 = "20 + 20";

showSum(result1, result2);

 

console.log("opdracht 12------------------------------------------");

//opdracht 12

function concatenateStrings(text1, text2) {

    text1 = "test1";

    text2 = "test2";

    console.log("text",text1 + " " + text2);

}

 

concatenateStrings()

//opdracht 13



function showArray(list) { for( let i=0; i< list.length; i++){const x= list[i];
console.log('computer:',i)}
    

    
};

const computers=['dell','hp','acer','asus'];
console.log('computer=', computers)
showArray(computers);
 
// opdracht 15



function getSum(x,y){
    const XYsum= x+y;

    return XYsum;
}
   const total= getSum(12,3);
console.log('total is ', total);

//opdracht 16
function getProduct(x,y){
    const XYproduct= x*y;

    return XYproduct;
}
   const totalProduct= getProduct(12,3);
console.log('total is ', totalProduct);
//opdracht 17 
function getDivision(a,divider){
    if (divider===0) {return 0;
        
    }
    
    const divisionResult=a/divider
    return divisionResult;
};
const divisiontotal = getDivision(8,2);
console.log("Division is",divisiontotal );
