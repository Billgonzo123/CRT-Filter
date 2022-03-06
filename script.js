const controlContainer = document.getElementById('controlContainer');
const phosphorsContainer = document.querySelector('.phosphorsContainer');
phosphorsContainer.style.display = 'block';


function controlClickHandler(event) {
    switch (event.target.id) {
        case 'toggle-all':
            toggleAll();
            break;
        case 'toggle-r':
            togglePhosphors('red');
            break;
        case 'toggle-g':
            togglePhosphors('green');
            break;
        case 'toggle-b':
            togglePhosphors('blue');
            break;
        case 'toggle-mask':
            togglePhosphors('mask');
            break;
    };
}


function toggleAll() {
    if (phosphorsContainer.style.display == 'none') {
        phosphorsContainer.style.display = 'block'
        event.target.style.color = 'black'
    } else {
        phosphorsContainer.style.display = 'none'
        event.target.style.color = 'red'
    }
}

function togglePhosphors(color) {
    const phosphor = document.querySelector(`.${color}`);
    if (phosphor.style.display == 'none') {
        phosphor.style.display = 'block'
        event.target.style.color = 'black'
    } else {
        phosphor.style.display = 'none'
        event.target.style.color = 'red'
    }
}


controlContainer.addEventListener('mouseup', controlClickHandler)