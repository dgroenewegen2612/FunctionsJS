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

showBrandArray()