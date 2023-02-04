const inputArea = document.querySelector('#validation-input');

inputArea.addEventListener('blur', onBlur);
const inputValidDatalength = inputArea.dataset.length;

function onBlur(event) {
    console.dir(event.currentTarget.id);
    console.dir(event.currentTarget.value.length);

    let inputCurrentDatalength = event.currentTarget.value.length;
    if (inputCurrentDatalength == 0) {
        // event.currentTarget.className = '';
        event.currentTarget.removeAttribute("class");
    }
    else if (inputCurrentDatalength == inputValidDatalength) {
        event.currentTarget.className ='valid';
    }
    else if (inputCurrentDatalength != inputValidDatalength) {        
        event.currentTarget.className ='invalid';
    } 
}