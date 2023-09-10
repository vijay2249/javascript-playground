const defaultResult = 0;
let currentResult = defaultResult;

function add(n1, n2){
  const result = n1 + n2;
  return result;
}

currentResult = add(1,2);
let calcDesc = `(${defaultResult} + 10) / 2 - 1`

outputResult(currentResult, calcDesc);