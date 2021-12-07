// window.addEventListener("load", main);

// function main() {
//   addEventListeners;
// }

// function addEventListeners() {}

todoMain();

functiontodoMain() {
    let inputElement1,
        inputElement2,
        ulElement;

    getElements();
    addEventListeners();

}

function getElements() {
    inputElement1 = document.getElementById('input')[0];
    inputElement2 = document.getElementById('input')[0];
    ulElement = document.getElementById('ul')[0];
}

function addEventListeners() {
    inputElement1.addEventListeners('change', onChange, false);
}

function onChange(event) {
    let flag = true;

    let inputValue = inputElement1.value;
}