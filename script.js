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
            toggleDisplay('mask');
            break;
        case 'opacity':
            toggleOpacity();
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

function toggleDisplay(color) {
    const phosphor = document.querySelector(`.${color}`);
    if (phosphor.style.display == 'none') {
        phosphor.style.display = 'block'
        event.target.style.color = 'black'
    } else {
        phosphor.style.display = 'none'
        event.target.style.color = 'red'
    }
}

function togglePhosphors(color) {
    const elements = document.querySelector(`.${color}`).children;
    console.log(Object.values(elements))
    Object.values(elements).forEach(e => {
        f = e.className.split(' ')[1];
        console.log(f)
        if (document.querySelector(`.${f}`).style.filter == '') {
            document.querySelector(`.${f}`).style.filter = 'brightness(0%) saturate(0%)';
            event.target.style.color = 'red'
        } else {
            document.querySelector(`.${f}`).style.filter = '';
            event.target.style.color = 'black'
        }
    })
}

function toggleOpacity() {
    const elements = document.querySelectorAll('.scanlines');
    console.log(Object.values(elements))

    Object.values(elements).forEach(e => {
        f = e.className.split(' ')[1];
        console.log(f)
        if (document.querySelector(`.${f}`).style.opacity == '1') {
            document.querySelector(`.${f}`).style.opacity = ''
            event.target.style.color = 'black'
        } else {
            document.querySelector(`.${f}`).style.opacity = '1'
            event.target.style.color = 'red'
        }
    })
}



controlContainer.addEventListener('mouseup', controlClickHandler)