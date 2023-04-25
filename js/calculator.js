window.addEventListener('load', ()=> { /* Listen when the document is loaded */

    /* Create two constants and save the items need */
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    /* Create a new constant to convert HTMLCollecttion to Array */
    const keypadButtonsArray = Array.from(keypadButtons);

    /* Iterate through a new buttons Array  */
    keypadButtonsArray.forEach( (button) => {

        /* Add a click event to each button */
        button.addEventListener('click', () => {
            calculator(button, display);
        })
    })
});

function calculator (button, display){ 
    switch(button.innerHTML){
        case 'C':
            clean(display);
            break;
        case '=':
            result(display);
            break;
        default:
            refresh(display, button);
            break;
    }
}

function result(display) {
    /* Catch the string, resolve and save to the innerHTML of display */
    display.innerHTML = eval(display.innerHTML);
    }

function refresh(display, button) { 
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function clean(display) { 
    display.innerHTML = 0;
}