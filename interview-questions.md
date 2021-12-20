# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer:
  'this' references the object that is executing the current function. If the function is a method in an object 'this' refers to that object itself but if the function is not part of an object, 'this' references the global object which is the window object (in browser).  

  Researched answer:
  'this' keyword refers to the object it belongs to. It has different values depending on where it is used:
  - In a method, 'this' refers to the owner object.
  - Alone, 'this' refers to the global object.
  - In a function, 'this' refers to the global object.
  - Methods like call(), and apply() can refer 'this' to any object.



2. What is React? Why would you use it?

  Your answer:
  React is a javascript library that can be reusabled. It used for building/creating user interfaces. 

  Researched answer:
  React is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple



3. Which lifecycle method is required in a React class component?

  Your answer:
  The render() method. It needs to be called in order to return the result/output.

  Researched answer:
  The render() method is the only required method in a class component.
  When called, it should examine this.props and this.state and return one of the following types: React elements, Arrays and fragments, Portals, String and numbers and Boolean or null.




4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer:
  JSX (JavaScript XML) is a javascript language syntax that allows developers to directly write HTML in React.
  One notable difference between HTML and JSX is JSX needs to return a parent element using a fragment <> </> wrap around the HTML code block but HTML doesn't need a return.

  Researched answer:
  JSX (JavaScript + XML) is an extension of JavaScript that allows you to write HTML within JavaScript, which has a few benefits of making your code more readable and exercising the full power of JavaScript within HTML.
  One of the major differences between HTML and JSX is that in JSX, you must return a single parent element, or it won't compile.





5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer:
  Yarn is a javascript package manager. It's used to communicate with the repository to help install packages. React uses Node.js to open the app on localhost:3000 and run the start script command on the terminal with yarn. 

  Researched answer:
  Yarn is a software packaging system developed in 2016 by Facebook for Node.js JavaScript runtime environment that provides speed, consistency, stability, and security as an alternative to npm (package manager).



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: 
  An anonymous function is a function has no name in it.

  Researched answer:
  Anonymous function is a function that doesn't have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name. Example below:
  const x = function (a, b) {return a * b};
  let z = x(4, 3);


## Looking Ahead: Terms for Next Week

1. Conditional rendering:
Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. In React, it allows us to render different elements or components based on a condition

2. Props:
Props in React takes a function that returns an element and calls it instead of implementing its own render logic.

3. JavaScript Events:
JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. When the page loads, it is called an event. When the user clicks a button, that click too is an event. Other examples include events like pressing any key, closing a window, resizing a window, etc.

4. Object-oriented programming:
Object-oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.

5. Ruby:
Ruby is a programming language. It is most used for building web applications.