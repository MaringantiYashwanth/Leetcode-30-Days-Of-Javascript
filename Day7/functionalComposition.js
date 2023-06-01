// const fish = (x: number): number => x + 2;
// const garfield = (x: number): number => x * 3;
// console.log(fish);
// console.log(garfield);
// const composingFish = (x: number): number => fish(garfield(x));
var compose = function (functions) {
    return function (x) {
        if (functions.length === 0) {
            // Identity function
            return x; // f(x) = x
        }
        var input = x;
        for (var i = functions.length - 1; i >= 0; i--) {
            var currFunc = functions[i];
            input = currFunc(input);
            console.log(typeof currFunc);
        }
        return input;
    };
};
var x = 10;
var F = compose([function (x) { return x + 1; }, function (x) { return x * x; }, function (x) { return 2 * x; }]);
console.log(F(10));
