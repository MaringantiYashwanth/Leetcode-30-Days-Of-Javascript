var createHelloWorld = function () {
    return function () {
        return "Hello World";
    };
};
var greet = createHelloWorld();
console.log(greet());
var createHelloWorld = function () {
    return function () { return "Hello World"; };
};
var greeting = createHelloWorld();
console.log(greeting());
var createHelloWorldApp = function () {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return "Hello World";
    };
};
var createGreetingApp = createHelloWorld();
console.log(createGreetingApp());
