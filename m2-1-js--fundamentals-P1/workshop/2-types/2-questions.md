# Types

## Question 1: Which of the following strings are valid? Add an 'x' between the ( ) to indicate that it's valid.

1. ( ) "I am a "Horse""
2. ( ) "I 'prefer' ducks'
3. ( ) 'Yes, duck is nice'
4. ( ) "Ah, but I\'m vegan!"
5. ( ) 'You'll eat salad then'
6. ( ) 'Yes I\'ll eat salad'
7. ( ) "I'm happy to hear that!"
8. ( ) "\"Happy to hear " + 'that" ' + "he says!"
9. ( ) “Hello world!”

## Question 2: For the strings in Question 1 that were invalid, rewrite them to be valid:

## Question 3: Which of the following expressions evaluate to true? Add an 'x' between the ( ) to indicate that it's true.

1. ( ) 7 == 2
2. ( ) 7 == 7
3. ( ) 7 == '7'
4. ( ) 7 != 0
5. ( ) 7 !== '7'
6. ( ) 7 != '7'
7. ( ) 7 != 7

## Question 4: Which of the following expressions are truthy?

1. ( ) !0
2. ( ) !1
3. ( ) -1
4. ( ) !"hello!"
5. ( ) null
6. ( ) !undefined
7. ( ) !NaN

## Question 5: Which of the following are valid objects?

1. ( ) {}
2. ( ) { 'hello' }
3. ( ) { name: 'I am fruit' }
4. ( ) {'brand-name': 'Dior' }
5. ( ) { brand-name: 'Channel' }
6. ( ) { cool_name: 'bob' + ' Dylan', age: 25 }

## Question 6: For each array, specify the number of elements and the type of each element.

1. ['cat', 'dog', 'bird']

- number of elements:
- type of _each_ element:
  - 'cat':
  - 'dog':
  - 'bird':

(Use the same format for the answers to all prompts in Question 6)

2. [[], 24, 'hello', true]

3. []

4. [['romeo', 'juliet'], false]

5. [{name: 'bob', age: 23}, {name: 'paul', age: 33}]

## Question 7: What is the type and value for each of the following variables?

1. let name = 'bob';

- type:
- value:

2. let age = 45;

3. let isMarried = false;

4. let person = { name: name, age: age, isMarried: isMarried }

5. let kids = [{name: 'Morty', age: 3}, {name: 'Summer', age: 7}]

## Question 8: Use string interpolation instead of concatenation

1.

```js
const name = 'Jack';
const greeting = 'Hi';

console.log(greeting + ' ' + name + '!');
```

2.

```js
const person1 = { name: 'Mabel', age: 102 };
const person2 = { name: 'Doug', age: 104 };

console.log(
  person1.name +
    ' and ' +
    person2.name +
    ' are the oldest people I know. Together, they have lived for ' +
    (person1.age + person2.age) +
    ' years!'
);
```

3.

```js
let str = 'Hi Kiddo!';
const temperature = 5;

if (temperature < 0) {
  str = str + ' ' + "It's very cold outside, you better wear a coat!";
} else {
  str = str + ' ' + "It's beautiful outside, let's go swimming!";
}
```
