# javascript-js
# Complete JavaScript Fundamentals Guide

JavaScript is a versatile programming language that powers modern web development. Let's explore all core concepts in a continuous flow:

**1. JavaScript Runtimes**  
JavaScript originally ran only in browsers, but Node.js (created in 2009) enabled server-side execution using Chrome's V8 engine. Deno (2018) is Node's modern successor by the same creator, featuring enhanced security, TypeScript support out-of-the-box, and a simplified module system without package.json.

**2. File Extensions Matter**  
We use `.js` instead of `.txt` because:
- Browsers/engines recognize `.js` as executable code
- Enables proper syntax highlighting in code editors
- Follows web standards for script identification
- Differentiates from plain text files which would be treated as data rather than code

**3. Variable Declarations**  
Variables store data using three approaches:
- `var`: The older function-scoped declaration (avoid in modern code)
- `let`: Modern block-scoped mutable variable
- `const`: Block-scoped immutable constant
```javascript


**4. Type Conversion**
var oldVariable = "deprecated";
let counter = 0; // Can be changed
const PI = 3.14; // Cannot be reassigned

// Explicit conversion
String(123);    // "123" 
Number("3.14"); // 3.14
Boolean(1);     // true

// Implicit conversion (type coercion)
"5" + 2;    // "52" (string concatenation)
"5" - 2;    // 3 (numeric subtraction)
null == undefined; // true (special case)


**5. Operator EcoSystem**
// Arithmetic
10 + 5;   // Addition
10 ** 2;  // Exponentiation (100)

// Assignment
let x = 10;
x += 5;   // x = x + 5

// Comparison
5 == '5';  // true (loose equality)
5 === '5'; // false (strict equality)

// Logical
true && false; // AND → false
true || false; // OR → true
!true;         // NOT → false


**6. Data Type Landscape**
JavaScript has 7 primitive types:

String: Textual data ("hello")

Number: Numeric values (42, 3.14)

Boolean: true/false

Null: Intentional empty value

Undefined: Uninitialized variable

Symbol: Unique identifiers

BigInt: Large integers (123n)

And objects:

Object: { key: value }

Array: [1, 2, 3]

Function: function() {}

Date: new Date()


**7. Memory Management**
JavaScript engines use:

Stack: Fast memory for primitives (fixed size)

Heap: Dynamic memory for objects (reference-based)

javascript
let a = 5;    // Stack
let b = a;     // Copy value
let obj = {};  // Heap
let ref = obj; // Copy reference


**8. String Manipulation**
// Concatenation
"Hello" + " " + "World";

// Interpolation
const name = "Alice";
`Hello ${name}`;

// Methods
"hello".toUpperCase();       // "HELLO"
"HELLO".toLowerCase();       // "hello"
"hello".slice(1,3);          // "el"
"hello".padStart(8,"x");     // "xxxhello"

// Constructor
new String("hello");         // String object


**9. Number System**
// Number methods
(123.456).toFixed(2);       // "123.46"
Number.parseInt("100px");    // 100
Number.isNaN(NaN);           // true

// Math object
Math.PI;                    // 3.141592653589793
Math.floor(3.7);            // 3
Math.random();              // 0-1 random number
Math.max(1, 2, 3);          // 3


**10. Date Handling**
const now = new Date();
now.getFullYear();          // Current year (2025)
now.getMonth();             // 0-11 (0 = January)
now.toISOString();          // "2025-08-19T12:34:56.789Z"

// Specific date
const birthday = new Date(1990, 5, 15);


**11. Array Fundamentals**
const fruits = ["Apple", "Banana"];

// Key Methods
##fruits.push("Orange");      // Add to end
##fruits.pop();               // Remove from end
##fruits.unshift("Mango");    // Add to start
##fruits.shift();             // Remove from start
##fruits.slice(1, 2);         // ["Banana"] (no mutation)
##fruits.splice(1, 1, "Kiwi"); // Modify array
##fruits.map(f => f.length);  // [5, 6] (transform)
##fruits.filter(f => f.length > 5); // ["Banana"]


**12. Object System**
const person = {
  name: "John",
  age: 30,
  greet() {
    return `Hello, ${this.name}`;
  }
};

// Access
person.name;                // "John"
person["age"];              // 30

// Methods
Object.keys(person);        // ["name", "age", "greet"]
Object.values(person);       // ["John", 30, function]
Object.entries(person);     // [["name","John"],...]

// Prototypes
person.toString();          // "[object Object]"

// Object destructuring
const { name, age } = person;

// Array destructuring
const [firstFruit, secondFruit] = fruits;

// Nested destructuring
const user = {
  id: 1,
  profile: {
    email: "test@example.com"
  }
};
const { profile: { email } } = user;
