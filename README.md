# TypeScript Type Error in Arithmetic Operations

This repository demonstrates a subtle bug in TypeScript where type errors aren't detected during arithmetic operations when mixing number and string types.  The issue lies in the implicit type coercion that TypeScript sometimes performs, leading to runtime errors rather than compile-time errors.

## Bug Description

The `bug.ts` file contains functions that should only accept numbers. However, the code passes string arguments, resulting in unexpected behavior without any TypeScript errors during compilation. This demonstrates a failure in TypeScript's type checking system in this particular scenario.

## Solution

The `bugSolution.ts` file offers a corrected version. The solution involves explicit type guards to ensure all parameters are numbers before the arithmetic operations.  This prevents the implicit type conversion that was causing the bug. 

## How to Reproduce

1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler (`tsc bug.ts`).
3. Observe that the compiler does not report an error.
4. Run the compiled JavaScript code.  You'll likely see unexpected results due to the string concatenation.
5. Repeat steps 2-4 with `bugSolution.ts` to see the corrected behavior and the compile-time error when attempting to use incorrect types.