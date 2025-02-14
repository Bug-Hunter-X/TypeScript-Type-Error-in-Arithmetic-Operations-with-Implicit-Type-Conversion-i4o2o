function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Correct: result1 is 8
const result2 = subtract(10, 5); // Correct: result2 is 5

const result3 = add(5, "hello"); // Type error should be detected here. 
const result4 = subtract(10, "world"); // Type error should be detected here