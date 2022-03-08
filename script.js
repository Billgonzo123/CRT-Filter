const controlContainer = document.getElementById('controlContainer');
const phosphorsContainer = document.querySelector('.phosphorsContainer');
phosphorsContainer.style.display = 'block';
let opacityValue = .9;
let opacityMask = .9;
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
    const crtBlur = document.querySelector('.test-image')
    if (phosphorsContainer.style.display == 'none') {
        phosphorsContainer.style.display = 'block'
        event.target.style.color = 'black'
        crtBlur.className = 'test-image crt'
    } else {
        crtBlur.className = 'test-image'
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
        if (document.querySelector(`.${f}`).style.background == '') {
            document.querySelector(`.${f}`).style.setProperty('mix-blend-mode', 'normal');
            switch (color) {
                case 'red':
                    document.querySelector(`.${f}`).style.background = 'url(./assets/img/Red.png)'

                    break;
                case 'green':
                    document.querySelector(`.${f}`).style.background = 'url(./assets/img/Green.png)'
                    break;
                case 'blue':
                    document.querySelector(`.${f}`).style.background = 'url(./assets/img/Blue.png)'
                    break;
            }
            event.target.style.color = 'red'
        } else {
            document.querySelector(`.${f}`).style.background = '';
            document.querySelector(`.${f}`).style.setProperty('mix-blend-mode', '');
            event.target.style.color = 'black'
        }
    })
}

function resetOpacity() {
    const elements = document.querySelectorAll('.scanlines');
    Object.values(elements).forEach(e => {
        f = e.className.split(' ')[1];
        document.querySelector(`.${f}`).style.opacity = ''
        document.querySelector('#opacitySet').innerHTML = 'Phosphor Opacity'
        opacityValue = .9;
    })
    const mask = document.querySelector('.mask');
    const maskBtn = document.querySelector('#opacity-mask');
    mask.style.opacity = '';
    maskBtn.innerHTML = 'Mask Opacity';
    opacityMask = .9;
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
            event.target.innerHTML = `Phosphor Opacity ${opacityValue}`
        } else {
            document.querySelector(`.${f}`).style.opacity = `${opacityValue}`;
            event.target.innerHTML = `Phosphor Opacity ${opacityValue}`
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
    (testImageId === 4) ? testImageId = 0 : testImageId += 1;

    console.log(testImageId);
    const el = document.querySelector('.test-image');

    el.style.background = `url(./assets/img/image${testImageId}.png) no-repeat center/100vw`;
    
    if (testImageId === 4) {
        el.style.background = `url(./assets/img/video.gif) no-repeat center/100vw`;
    }

}


controlContainer.addEventListener('mouseup', controlClickHandler)