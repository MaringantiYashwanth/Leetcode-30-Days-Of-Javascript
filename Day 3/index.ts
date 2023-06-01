// Closure syntax
var createNumber = function (init: number) {
  let currentCount = init;
  return {
    increment: function () {
      currentCount += 1;
      return currentCount;
    },
    decrement: function () {
      currentCount -= 1;
      return currentCount;
    },
    reset: function () {
      currentCount = init;
      return currentCount;
    },
  };
};

// Approach 2: Closure with Shortened Syntax
var createCounter = function (init: number) {
  let currentCount = init;
  return {
    increment: () => ++currentCount,
    decrement: () => --currentCount,
    reset: () => (currentCount = init),
  };
};

// Approach 3: Closure with separately created functions
var createCounter3 = function (init: number) {
  let currentCount = init;
  function increment() {
    return ++currentCount;
  }

  function decrement() {
    return --currentCount;
  }

  function reset() {
    return (currentCount = init);
  }

  return { increment, decrement, reset };
};

// Approach 4: Classes
class Counter {
  init: number;
  currentCount: number;
  constructor(init) {
    this.init = init;
    this.currentCount = init;
  }

  increment() {
    this.currentCount += 1;
    return this.currentCount;
  }

  decrement() {
    this.currentCount -= 1;
    return this.currentCount;
  }

  reset() {
    this.currentCount = this.init;
    return this.currentCount;
  }
}

var createCounter2 = function (init: number) {
  return new Counter(init);
};

// Approach 5: Closure with Proxy
var createCounter5 = function (init: number) {
  let currentCount = init;
  return new Proxy(
    {},
    {
      get: (target, key) => {
        switch (key) {
          case "increment":
            return () => ++currentCount;
          case "decrement":
            return () => --currentCount;
          case "reset":
            return () => (currentCount = init);
          default:
            throw Error("Unexpected Error");
        }
      },
    }
  );
};
