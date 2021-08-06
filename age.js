"use strict";
let age = prompt("Age:",18);
let message = (age<3)? "Hello baby": 
(age<18)?"Hi!":
(age<100)?"Hello!":
"What an unusual age!";
alert(message);

