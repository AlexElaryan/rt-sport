let obj = {
    first: ['Горячекатанный профиль с толщиной стенки 3 мм – рамы тренажеров выдерживают заявленную производителем нагрузку', 'img/gym2/fitnes-1.png'],
    second: ['Все узлы вращения и качения на закрытых подшипниках российского производства', 'img/gym2/fitnes-2.png'],
    third: ['Возможность регулировки под рост спортсмена - фиксация на пружинных фиксаторах ', 'img/gym2/fitnes-3.png'],
    forth: ['Чехлы из качественного заменителя кожи российского производства – цвет мягких элементов можно выбрать ', 'img/gym2/fitnes-4.png'],
    fifth: ['Полимерно-порошковое покрытие рам с возможностью персонализации цвета – цвет рамы тренажера можно выбрать', 'img/gym2/fitnes-0.png'],
    sixth: ['Все сварные соединения выполнены «вкруг» - гарантия на раму тренажера – 10 лет', 'img/gym2/fitnes-0.png'],
    seventh: ['Промокод на скидку – ПРОМОКОД', 'img/gym2/fitnes-0.png'],
    eight: ['Резиновые рукояти на местах хватов ', 'img/gym2/fitnes-5.png'],
    nineth: ['Качественная пластиковая фурнитура российского производства', 'img/gym2/fitnes-0.png'],
    ten: ['Тренажеры на свободном весе произведены и сертифицированы по ГОСТ-Р', 'img/gym2/fitnes-0.png'],
    eleven: ['Адаптеры для хранения дисков нужного диаметра – на ваш выбор 25, 30 или 50 мм', 'img/gym2/fitnes-6.png'],
    tuelve: ['Для задания нагрузки используются стандартные диски – на ваш выбор 25, 30 или 50 мм', 'img/gym2/fitnes-0.png'],
};

let resultObj = { ...obj };

let forVectors = {
    desktop: ['img/vector1/Vector1.png', 'img/vector1/Vector2.png', 'img/vector1/Vector3.png', 'img/vector1/Vector4.png', 'img/vector1/Vector5.png', 'img/vector1/Vector6.png', 'img/vector1/Vector7.png', 'img/vector1/Vector8.png', 'img/vector1/Vector9.png', 'img/vector1/Vector10.png', 'img/vector1/Vector11.png', 'img/vector1/Vector12.png'],
    laptop: ['img/vector1/Vector01.png', 'img/vector1/Vector02.png', 'img/vector1/Vector03.png', 'img/vector1/Vector04.png', 'img/vector1/Vector05.png', 'img/vector1/Vector06.png', 'img/vector1/Vector07.png', 'img/vector1/Vector08.png', 'img/vector1/Vector09.png', 'img/vector1/Vector010.png', 'img/vector1/Vector011.png', 'img/vector1/Vector012.png'],
    mobile: ['img/vector1/Vector001.png', 'img/vector1/Vector002.png', 'img/vector1/Vector003.png', 'img/vector1/Vector004.png', 'img/vector1/Vector005.png', 'img/vector1/Vector006.png', 'img/vector1/Vector007.png', 'img/vector1/Vector008.png', 'img/vector1/Vector009.png', 'img/vector1/Vector0010.png', 'img/vector1/Vector0011.png', 'img/vector1/Vector0012.png']
};

let forGymDesktopPictures = {
    desktop: [
        'img/gym2/fitnes-1.png',
        'img/gym2/fitnes-2.png',
        'img/gym2/fitnes-3.png',
        'img/gym2/fitnes-4.png',
        'img/gym2/fitnes-0.png',
        'img/gym2/fitnes-0.png',
        'img/gym2/fitnes-0.png',
        'img/gym2/fitnes-5.png',
        'img/gym2/fitnes-0.png',
        'img/gym2/fitnes-0.png',
        'img/gym2/fitnes-6.png',
        'img/gym2/fitnes-0.png'
    ],

    laptop: [
        'img/gym2/fitnes-01.png',
        'img/gym2/fitnes-02.png',
        'img/gym2/fitnes-03.png',
        'img/gym2/fitnes-04.png',
        'img/gym2/fitnes-00.png',
        'img/gym2/fitnes-00.png',
        'img/gym2/fitnes-00.png',
        'img/gym2/fitnes-05.png',
        'img/gym2/fitnes-00.png',
        'img/gym2/fitnes-00.png',
        'img/gym2/fitnes-06.png',
        'img/gym2/fitnes-00.png'],

    mobile: [
        'img/gym2/fitnes-001.png',
        'img/gym2/fitnes-002.png',
        'img/gym2/fitnes-003.png',
        'img/gym2/fitnes-004.png',
        'img/gym2/fitnes-000.png',
        'img/gym2/fitnes-000.png',
        'img/gym2/fitnes-000.png',
        'img/gym2/fitnes-005.png',
        'img/gym2/fitnes-000.png',
        'img/gym2/fitnes-000.png',
        'img/gym2/fitnes-006.png',
        'img/gym2/fitnes-000.png'
    ],
};

let objKeys = Object.keys(obj);

let marker = document.querySelectorAll('.marker-item');
let mainLInfo = document.querySelector('.main_left-info');
let mainLInfoText = document.querySelector('.main_left-info > span');
let info = document.querySelector('.info_block');
let infoText = document.querySelector('.info_block > p');
let line = document.querySelectorAll('.line');
let vectors = document.querySelectorAll('.line > img');
let pictures = document.querySelectorAll('.pictures');

function forPicturesChange() {
    if (window.innerWidth <= 1200) {
        vectors.forEach((el, ind) => (el.src = forVectors.mobile[ind]));
        objKeys.forEach((key, ind) => (resultObj[key][1] = forGymDesktopPictures.mobile[ind]));
        pictures.forEach(el => {
            el.style.display = 'none';
        })
        pictures[0].style.display = 'block';

    } else if (window.innerWidth <= 1400) {
        vectors.forEach((el, ind) => (el.src = forVectors.laptop[ind]));
        objKeys.forEach((key, ind) => (resultObj[key][1] = forGymDesktopPictures.laptop[ind]));
        pictures.forEach(el => {
            el.style.display = 'none';
        })
        pictures[0].style.display = 'block';

    } else {
        vectors.forEach((el, ind) => (el.src = forVectors.desktop[ind]));
        objKeys.forEach((key, ind) => (resultObj[key][1] = forGymDesktopPictures.desktop[ind]));
        pictures.forEach(el => {
            el.style.display = 'none';
        })
        pictures[0].style.display = 'block';

    }
}

function forPicturesSrc() {
    pictures[0].src = resultObj.fifth[1];
    objKeys.forEach((key, index) => {
        pictures[index + 1].src = resultObj[key][1];
    })
}
function forActivate(element, ind) {
    element.classList.add('marker-animation_active');
    mainLInfo.classList.add('hidden');
    if (element !== marker[marker.length - 1]) {
        line[ind].classList.add('line_active_right');
        if (objKeys[ind]) {
            info.classList.add('info_block_active');
            infoText.textContent = resultObj[objKeys[ind]][0];

            if (resultObj[objKeys[ind]][1]) {
                pictures.forEach(el => {
                    el.style.display = 'none';
                })
                pictures[ind + 1].style.display = 'block';

            }
        }
    }
}

function forDisactive(element, ind) {
    element.classList.remove('marker-animation_active');
    line[ind]?.classList.remove('line_active_right');
    info.classList.remove('info_block_active');
    mainLInfo.classList.remove('hidden');
    if (window.innerWidth <= 1200) {
        pictures.forEach(el => {
            el.style.display = 'none';
        })
        pictures[0].style.display = 'block';

    } else if (window.innerWidth <= 1400) {
        pictures.forEach(el => {
            el.style.display = 'none';
        })
        pictures[0].style.display = 'block';

    } else {
        pictures.forEach(el => {
            el.style.display = 'none';
        })
        pictures[0].style.display = 'block';
    }
}

function mainFunc() {
    const isMobileView = window.innerWidth < 1200;

    document.removeEventListener('click', handleClick);

    if (isMobileView) {
        document.addEventListener('click', handleClick);

        marker.forEach((el, ind) => {
            el.onmouseenter = null;
            el.onmouseleave = null;
        });
    } else {
        marker.forEach((el, ind) => {
            el.onmouseenter = () => forActivate(el, ind);
            el.onmouseleave = () => forDisactive(el, ind);
            el.onclick = null;
        });
    }
}

function handleClick(e) {
    if (e.target.classList.contains('marker-item')) {
        marker.forEach((markerEl, markerInd) => {
            if (markerEl !== e.target) {
                forDisactive(markerEl, markerInd);
            }
        });

        if (!e.target.classList.contains('marker-animation_active')) {
            const ind = Array.from(marker).indexOf(e.target);
            forActivate(e.target, ind);
        } else {
            const ind = Array.from(marker).indexOf(e.target);
            forDisactive(e.target, ind);
        }
    } else {
        marker.forEach((markerEl, markerInd) => {
            if (markerEl !== e.target) {
                forDisactive(markerEl, markerInd);
            }
        });
    }
}


window.addEventListener('resize', () => {
    forPicturesChange();
    forPicturesSrc();
    mainFunc();
});

window.addEventListener('load', () => {
    forPicturesChange();
    forPicturesSrc();
    mainFunc();
});

