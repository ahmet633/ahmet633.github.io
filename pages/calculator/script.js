var calculator = document.getElementsByClassName('calculator')[0];


// creating buttons
for (i=0; i<10 ; i++) {
  var div = document.createElement('div');
  calculator.appendChild(div);
  div.setAttribute("id", i);
  div.innerText = i;
  div.classList.add("button");
}

var addition = document.createElement('div');
calculator.appendChild(addition);
addition.setAttribute("id", "addition");
addition.innerText = "+";
addition.classList.add("button");

var substraction = document.createElement('div');
calculator.appendChild(substraction);
substraction.setAttribute("id", "substraction");
substraction.innerText = "-";
substraction.classList.add("button");

var addition = document.createElement('div');
calculator.appendChild(addition);
addition.setAttribute("id", "addition");
addition.innerText = "+";
addition.classList.add("button");

var addition = document.createElement('div');
calculator.appendChild(addition);
addition.setAttribute("id", "addition");
addition.innerText = "+";
addition.classList.add("button");



/*
var newDiv = document.createElement('div');
body.appendChild(newDiv);
div.setAttribute("class", "button");
div.classList.add("hey");
*/
