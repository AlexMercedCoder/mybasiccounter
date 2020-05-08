////////////////////
// Global Variables
///////////////////

const global = {
    number: 0,
};

const el = {
    plus: document.querySelector('#plus'),
    minus: document.querySelector('#minus'),
    number: document.querySelector('input'),
    display: document.querySelector('h2'),
};

////////////////////////
// Functions
////////////////////////

const func = {};

//////////////////////
// Event
//////////////////////

const handle = {
    add: () => {
        global.number = global.number + parseInt(el.number.value);
        el.display.innerText = global.number;
        el.display.style.color = global.number < 0 ? 'red' : 'green';
    },
    minus: () => {
        global.number = global.number - parseInt(el.number.value);
        el.display.innerText = global.number;
        el.display.style.color = global.number < 0 ? 'red' : 'green';
    },
};

//////////////////////
// App Logic
//////////////////////

el.display.innerText = 0;
el.plus.addEventListener('click', handle.add);
el.minus.addEventListener('click', handle.minus);
