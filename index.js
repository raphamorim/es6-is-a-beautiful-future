/*
	# Classes

	## Description:
	ES6 classes are a simple sugar over the prototype-based OO pattern. 
	Having a single convenient declarative form makes class patterns 
	easier to use, and encourages interoperability. Classes support 
	prototype-based inheritance, super calls, instance 
	and static methods and constructors.
*/

export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let point = new Point(7,4);
console.log(`My point: ${JSON.stringify(point)}`);

// --------------------------------------------------------------

/*
	# Arrows

	## Description:
	Arrows are a function shorthand using the => syntax. They are 
	syntactically similar to the related feature in C#, Java 8 and 
	CoffeeScript. They support both statement block bodies as well as 
	expression bodies which return the value of the expression. 
	Unlike functions, arrows share the same lexical this as their 
	surrounding code.
*/

var fives = [],
	nums = [0, 10, 25, 27, 30, 56];

var numsPlus = nums.map(v => v + 1);

nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

console.log(fives);
console.log(numsPlus);


// --------------------------------------------------------------

/*
	# Enhanced Object Literals

	## Description:
	Object literals are extended to support setting the prototype at 
	construction, shorthand for foo: foo assignments, defining methods,
	making super calls, and computing property names with expressions. 
	Together, these also bring object literals and class declarations 
	closer together, and let object-based design benefit from some of 
	the same conveniences.
*/

// var obj = {
//     // __proto__
//     __proto__: theProtoObj,
//     // Shorthand for ‘handler: handler’
//     handler,
//     // Methods
//     toString() {
//      // Super calls
//      return "d " + super.toString();
//     },
//     // Computed (dynamic) property names
//     [ 'prop_' + (() => 42)() ]: 42
// };


// --------------------------------------------------------------

/*
	# Template Strings

	## Description:
	Template strings provide syntactic sugar for constructing strings. 
	This is similar to string interpolation features in Perl, Python 
	and more. Optionally, a tag can be added to allow the string 
	construction to be customized, avoiding injection attacks or 
	constructing higher level data structures from string contents.
*/

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);


// --------------------------------------------------------------

/*
	# Let + Const

	## Description:
	Block-scoped binding constructs. let is the new var. const is 
	single-assignment. Static restrictions prevent use before 
	assignment.
*/

function f() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
      // see error uncommenting above this line, cause x cannot be changed
      // x = "foo";
    }
    // see error uncommenting above this line, cause x is already declared in block
    // let x = "inner";
  }
}