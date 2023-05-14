var createHelloWorld = function() {
    return function() : string {
        return "Hello World";
    }
};

var greet: Function = createHelloWorld();
console.log(greet());


var createHelloWorld = function() {
    return () : string => "Hello World";
}

var greeting: Function = createHelloWorld();
console.log(greeting());

var createHelloWorldApp = function() {
    return (...args: any[]) : string => "Hello World";
}

var createGreetingApp: Function = createHelloWorld();
console.log(createGreetingApp());