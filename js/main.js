// commnt
'use strict';

/**
 * comments
 */

// alert("Hello JavaScript"); // function()

// window.alert(); // method / function

// var let const

var a = 2;
var c = 2;

let d = 2;
const C = 'HELLO';

{
    let b = 3;
    const C = "WORLD";
    console.log(d * b); // + - * / % **
}

let b = 13;
// alert(a + b);

console.log(a + b);


let my_$block_1_A = "<div><p>Hello</p></div>";

// local scope
function hello() {
    console.log("Hello World");
}

function hello_msg(msg) {
    console.log(msg);
}

function add(x, y) {
    return x + y;
}

hello();
hello_msg("Hello there");
let res = add(3, 3);
console.log(res);

console.log("It's not Ok", 0.1 + 0.2)
if (0.1 + 0.2 == 0.3) {
    console.log("It's Ok", 0.1 + 0.2)
}

// == != >= <= > <  != === !==
if (0.1 + 0.2 == 0.3) {
    console.log("It's Ok", 0.1 + 0.2)
} 
else if (0.1 + 0.2 === 0.3) {
    console.log("It's Ok", 0.1 + 0.2)
}
else if (0.1 + 0.2 !== 0.3) {
    console.log("It's Ok", 0.1 + 0.2)
}
else {
    console.log(0.1 + 0.2)
}

let x = 12, y = 7;

let o = '*'; 

switch (o) {
    case '+':
        console.log(x + y);
        break;
        case '-':
            console.log(x - y);
            break;
            case '*':
        console.log(x * y);
        break;
        case '/':
        console.log(x / y);
        break;
}
// like
let likeIcon = document.querySelector('a.like');
console.log(likeIcon);

let faHeart = document.querySelector('a.fa-heart span');
console.log(faHeart);

likeIcon.onclick = () => {
    // console.log("I'm liki it")
    console.log(faHeart.textContent)
    let counter = faHeart.textContent;
    counter++;
    faHeart.textContent = counter;

};