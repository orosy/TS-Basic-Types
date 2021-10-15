// type: symbol, 함수: Symbol
console.log(Symbol("foo") === Symbol("foo"));

const sym = Symbol();

const obj = {
  [sym]: "value",
};

// obj["sym"]; 오류
obj[sym];
