// console.log('utilities');
function getTextValue(id) {
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}
function getInputValue(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    document.getElementById(id).value = '';
    return inputValue;
}

function setValue(id, value) {
    document.getElementById(id).innerText = value;

}