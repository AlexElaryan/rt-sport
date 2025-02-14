const tabs = document.querySelectorAll('.tab');
const inputContainer = document.querySelector('.input-contact');

function createInp(data) {
    let input = document.createElement('input');
    input.classList.add('main-input');
    input.type = 'text';
    let svg;
    if (data === 'phone' || data === 'social') {
        svg = document.createElement('div');
        svg.innerHTML = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <circle cx="15" cy="15" r="15" fill="url(#pattern0_772_60)"/>
                                        <defs>
                                        <pattern id="pattern0_772_60" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlink:href="#image0_772_60" transform="scale(0.00552486)"/>
                                        </pattern>
                                        <image id="image0_772_60" width="181" height="181" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAC1CAYAAAAZU76pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIJSURBVHgB7dZBEQJBEMDAWer+2ELGGcID+jAxoCPVrSGPnP0bCHkMxIiaHFGTI2pyRE2OqMkRNTmiJkfU5IiaHFGTI2pyRE2OqMkRNTmiJkfU5IiaHFGTI2pyRE2OqMkRNTmiJkfU5IiaHFGTI2pyRE2OqMkRNTmiJkfU5IiaHFGTI2pyRE2OqMkRNTmiJkfU5IiaHFGTI2pyRE2OqMkRNTmiJkfU5IiaHFGTI2pyRE2OqMkRNTmiJkfU5IiaHFGTc93vgZQzr92BEPtBjqjJETU5oiZH1OSImhxRkyNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNjqjJue7vZ6Dk7HN2IMR+kCNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNjqjJETU5oiZH1OSImhxRkyNqckRNzg+twQyS0dQN3QAAAABJRU5ErkJggg=="/>
                                        </defs>
                                        </svg>`;
        input.placeholder = "+7 (_ _ _) _ _ _  _ _ - _ _";
        input.classList.add('inp-phone');

    } else if (data === 'mail') {
        input.placeholder = "example@mail.com";
        input.classList.add('inp-mail');
    }


    inputContainer.innerHTML = '';
    if (svg) {
        inputContainer.appendChild(svg.firstElementChild);
    }
    inputContainer.appendChild(input);
}

tabs.forEach((tab, ind) => {
    tab.onclick = () => {
        tabs.forEach(c => { c.classList.remove('active-tab') });
        tab.classList.add('active-tab');

        let dataType = tab.getAttribute('data');
        createInp(dataType);
    }
})