const inputFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputFontSize.addEventListener('change', onChange);

function onChange(event) { 
    let newFontSize = `${event.currentTarget.value}px`
    text.style.fontSize = newFontSize;
}   