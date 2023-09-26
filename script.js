let screen = document.getElementById('result');
let clear = false;

function appendToScreen(value) {
    if (clear) {
        screen.value = '';
        clear = false;
    }
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function calculate() {
    try {
        screen.value = eval(screen.value);
        clear = true;
    } catch (error) {
        screen.value = 'Error';
        clear = true;
    }
}
