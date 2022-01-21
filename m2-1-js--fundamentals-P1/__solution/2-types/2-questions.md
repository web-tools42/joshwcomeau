# Types

## Question 1: Which of the following strings are valid? Add an 'x' between the ( ) to indicate that it's valid.

1. ( ) "I am a "Horse""
2. ( ) "I 'prefer' ducks'
3. (x) 'Yes, duck is nice'
4. (x) "Ah, but I\'m vegan!"
5. ( ) 'You'll eat salad then'
6. (x) 'Yes I\'ll eat salad'
7. (x) "I'm happy to hear that!"
8. (x) "\"Happy to hear " + 'that" ' + "he says!"
9. ( ) “Hello world!”

## Question 2: Rewrite below all of the strings that are not valid, and correct them to make them valid.

"I am a 'Horse'"
"I 'prefer' ducks"
'You\'ll eat salad then'
"Hello world"

_other answers possible_

## Question 3: Which of the following expressions are true? Add an 'x' between the ( ) to indicate that it's true.

1. ( ) 7 == 2
2. (x) 7 == 7
3. (x) 7 == '7'
4. (x) 7 != 0
5. (x) 7 !== '7'
6. ( ) 7 != '7'
7. ( ) 7 != 7

## Question 4: Which of the following expressions is/are truthy?

1. ( ) !0
2. ( ) !1
3. (x) -1
4. ( ) !"hello!"
5. ( ) null
6. (x) !undefined
7. (x) !NaN

The following values are always falsy:

- `false`
- `0` (zero)
- `''` or `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Everything else is truthy**

## Question 5: Which of the following are valid objects?

1. ( ) {}
2. ( ) { 'hello' }
3. (x) { name: 'I am fruit' }
4. (x) {'brand-name': 'Dior' }
5. ( ) { brand-name: 'Channel' }
6. (x) { cool_name: 'bob' + ' Dylan', age: 25 }

## Question 6: For each array, specify the number of elements and the type of each element.

1. ['cat', 'dog', 'bird']

   - number of elements: 3
   - type of _each_ element:
     - 'cat': string
     - 'dog': string
     - 'bird': string

2. [[], 24, 'hello', true]

   - number of elements: 4
   - type of _each_ element:
     - []: array
     - 24: number
     - 'hello': string
     - true: boolean

3. []

   - number of elements: 0

4. [['romeo', 'juliet'], false]

   - number of elements: 2
   - ['romeo', 'juliet']: array
   - false: boolean

5. [{name: 'bob', age: 23}, {name: 'paul', age: 33}]
   - number of elements: 2
   - {name: 'bob', age: 23}: object
   - {name: 'paul', age: 33}: object

## Question 7: What is the type and value for each of the following variables?

1. let name = 'bob';

   - type: string
   - value: 'bob'

2. let age = 45;

   - type: number
   - value: 45

3. let isMarried = false;

   - type: boolean
   - value: false

4. let person = { name: name, age: age, isMarried: isMarried }

   - type: object
   - value: { name: name, age: age, isMarried: isMarried }

5. let kids = [{name: 'Morty', age: 3}, {name: 'Summer', age: 7}]
   - type: array
   - value: [{name: 'Morty', age: 3}, {name: 'Summer', age: 7}]

## Question 8: Use string interpolation instead of concatenation

1. "Hi" + " " + "there" + "!"

```js
const name = 'Jack';
const greeting = 'Hi';

console.log(`${greeting} ${name}!`);
```

2. Convert the following snippet:

```js
const person1 = { name: 'Mabel', age: 102 };
const person2 = { name: 'Doug', age: 104 };

console.log(
  `${person1.name} and ${
    person2.name
  } are the oldest people I know. Together, they have lived for ${
    person1.age + person2.age
  } years!`
);
```

3. Convert the following snippet

```js
let str = 'Hi Kiddo!';
const temperature = 5;

if (temperature < 0) {
  str = `${str} it's very cold outside, you better wear a coat!`;
} else {
  str = `${str} It's beautiful outside, let's go swimming!`;
}
```
