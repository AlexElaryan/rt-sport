const feedback = document.getElementById('feedback');
const tabs = document.querySelectorAll('.tab');
const inputContainer = document.querySelector('.input-contact');
const contactType = document.querySelector('.contact-type');

function createInp(data) {
    let input = document.createElement('input');
    input.classList.add('main-input');
    input.type = 'text';
    let svg;
    if (data === 'phone') {
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
        input.id = 'phone';
        input.name = 'Контактные данные для выбранного способа связи'
        input.required = true;
        input.addEventListener("focus", function () {
            clearError(input);
        });
        input.addEventListener("input", function () {
            formatPhone(input);
        });
    } else if (data === 'mail') {
        input.placeholder = "example@mail.com";
        input.classList.add('inp-mail');
        input.id = 'mail';
        input.name = 'Контактные данные для выбранного способа связи';
        input.type = 'email';
        input.required = true;

        input.addEventListener("focus", function () {
            clearError(input);
        });
    } else if (data === 'social') {
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
        input.id = 'phone';
        input.name = 'WhatsApp';
        input.required = true;

        input.addEventListener("focus", function () {
            clearError(input);
        });
        input.addEventListener("input", function () {
            formatPhone(input);
        });
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

        contactType.value = tab.textContent;
    }
})


feedback.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // Phone Validation (+7 (999) 999-99-99)
    // let phoneInput = document.getElementById("phone");
    // let phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    // if (phoneInput) {
    //     if (!phoneRegex.test(phoneInput.value.trim())) {
    //         phoneInput.classList.add('input-valid__error');
    //         isValid = false;
    //     } else {
    //         phoneInput.classList.remove('input-valid__error');
    //     }
    // }

    let mailInput = document.getElementById('mail');
    let mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (mailInput) {
        if (!mailRegex.test(mailInput.value.trim())) {
            mailInput.classList.add('input-valid__error');
            isValid = false;
        } else {
            mailInput.classList.remove('input-valid__error');
        }
    }


    if (isValid) {
        Swal.fire({
            title: "Спасибо",
            text: "Ваша заявка успешно отправлена",
            icon: "success",
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'Swal_btn',
            }
        });
    }
});

function formatPhone(input, event) {
    let numbers = input.value.replace(/[^+\d]/g, "");
    let formattedNumber = "";

    if (event.data === "+" && numbers.indexOf("+") !== 0) {
        input.value = input.value.slice(0, -1);
        return; 
    }
    if (numbers[0] === "+" && formattedNumber === "") {
        formattedNumber = "+";
        numbers = numbers.slice(1);
    }


    if (numbers.length > 0) formattedNumber += numbers.substring(0, 1); 
    if (numbers.length > 1) formattedNumber += " (" + numbers.substring(1, 4);
    if (numbers.length >= 5) formattedNumber += ") " + numbers.substring(4, 7);
    if (numbers.length >= 8) formattedNumber += "-" + numbers.substring(7, 9);
    if (numbers.length >= 10) formattedNumber += "-" + numbers.substring(9, 11);

    input.value = formattedNumber;
}

function clearError(input) {
    input.classList.remove('input-valid__error');
}

function expandIfNeeded(textarea) {
    if (window.innerWidth <= 1780) {
        textarea.style.height = "55px";
    } else {
        textarea.style.height = "86px";
    }

    textarea.style.height = textarea.scrollHeight + "px";
}


const result = document.getElementById('result');

feedback.addEventListener('submit', function (e) {
    const formData = new FormData(feedback);
    e.preventDefault();

    formData.append('subject', 'Запрос консультации на подбор оборудования');
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = ""

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            feedback.reset();
            result.style.display = "none";
        });
});