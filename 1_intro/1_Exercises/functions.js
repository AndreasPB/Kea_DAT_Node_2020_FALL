function myFirstFunction() {
    return "Hello World!"
}

myFirstFunction();

console.log(myFirstFunction());

const myVariableFunction = function() {

    return 'value';

}

console.log(myVariableFunction);

const myArrowFunction = () => {
    console.log("Davs fra en annonym function");
}

function sayHiLater(anyFunctionReference) {

    console.log('Hej senere! ' + anyFunctionReference);
    anyFunctionReference
}

sayHiLater(myArrowFunction);

const poke = (name) => "poke " + name;

function interact(genericInteraction, name) {
    console.log(genericInteraction);
}

interact(poke, "Andreas");

const hug = (name) => "hug " + name;

interact(hug, "Andreas");