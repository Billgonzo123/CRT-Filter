const controlContainer = document.getElementById('controlContainer');
const phosphorsContainer = document.querySelector('.phosphorsContainer');
phosphorsContainer.style.display = 'block';
let opacityValue = .9;
let opacityMask = .7;
let testImageId = 0;


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
        case 'toggle-bloom':
            toggleDisplay('R-bloom');
            toggleDisplay('G-bloom');
            toggleDisplay('B-bloom');

            break;
        case 'toggle-mask':
            toggleDisplay('mask');
            break;
        case 'opacity-mask':
            maskOpacity();
            break;
        case 'opacity':
            resetOpacity();
            break;
        case 'opacitySet':
            changeOpacity();
            break;
        case 'imageSet':
            imageSet();
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

function toggleDisplay(elClass) {
    const phosphor = document.querySelector(`.${elClass}`);
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

function resetOpacity() {
    const elements = document.querySelectorAll('.scanlines');
    Object.values(elements).forEach(e => {
        f = e.className.split(' ')[1];
        document.querySelector(`.${f}`).style.opacity = ''
        document.querySelector('#opacitySet').innerHTML = 'Change Opacity'
        opacityValue = .9;
    })
}

function changeOpacity() {
    const elements = document.querySelectorAll('.scanlines');
    opacityValue += .1;
    opacityValue = parseFloat(opacityValue.toFixed(2))
    Object.values(elements).forEach(e => {
        f = e.className.split(' ')[1];
        if (opacityValue > 1) {
            opacityValue = 0;
            document.querySelector(`.${f}`).style.opacity = `${opacityValue}`;
            event.target.innerHTML = `Change Opacity ${opacityValue}`
        } else {
            document.querySelector(`.${f}`).style.opacity = `${opacityValue}`;
            event.target.innerHTML = `Change Opacity ${opacityValue}`
        }
    })
}

function maskOpacity() {
    const e = document.querySelector('.mask');

    opacityMask += .1;
    console.log(opacityMask)
    opacityMask = parseFloat(opacityMask.toFixed(2));

    if (opacityMask > 1) {
        opacityMask = 0;
        e.style.opacity = `${opacityMask}`;
        event.target.innerHTML = `Mask Opacity ${opacityMask}`
    } else {

        e.style.opacity = `${opacityMask}`;
        event.target.innerHTML = `Mask Opacity ${opacityMask}`
    }

}

function imageSet() {
    (testImageId === 3) ? testImageId = 0 : testImageId += 1;

    console.log(testImageId);
    const el = document.querySelector('.test-image');

    el.style.background = `url(./assets/img/image${testImageId}.png) no-repeat center/100vw`

}


controlContainer.addEventListener('mouseup', controlClickHandler)