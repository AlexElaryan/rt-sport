document.addEventListener('DOMContentLoaded', () => {
    let obj = {
        first: ['Горячекатанный профиль с толщиной стенки 3 мм – рамы тренажеров выдерживают заявленную производителем нагрузку', 'img/gym1/fitnes-1.png'],
        second: ['Стальные плиты грузоблока весом 5 кг, с полиамидными втулками для плавного и бесшумного скольжения', 'img/gym1/fitnes-2.png'],
        third: ['Защитные панели на рамах грузоблоков', 'img/gym1/fitnes-3.png'],
        forth: ['Специальный трос для тренажеров с допустимой нагрузкой на разрыв 1000 кг и полиамидные ролики 100 мм на подшипниках', 'img/gym1/fitnes-4.png'],
        fifth: ['Все узлы вращения и качения на закрытых подшипниках российского производства', 'img/gym1/fitnes-0.png'],
        sixth: ['Грузоблочные тренажеры произведены и сертифицированы по ГОСТ-Р', 'img/gym1/fitnes-0.png'],
        seventh: ['Полимерно-порошковое покрытие рам с возможностью персонализации цвета – цвет рамы тренажера можно выбрать', 'img/gym1/fitnes-0.png'],
        eight: ['Чехлы из качественного заменителя кожи российского производства – цвет мягких элементов можно выбрать ', 'img/gym1/fitnes-5.png'],
        nineth: ['Все сварные соединения выполнены «вкруг» - гарантия на раму тренажера – 10 лет', 'img/gym1/fitnes-0.png'],
        ten: ['Промокод на скидку - ПРОМОКОД', 'img/gym1/fitnes-0.png'],
        eleven: ['Резиновые рукояти на местах хватов', 'img/gym1/fitnes-6.png'],
        tuelve: ['Хромированные направляющие грузоблока', 'img/gym1/fitnes-7.png'],
        thrteen: ['Качественная пластиковая фурнитура российского производства', 'img/gym1/fitnes-0.png'],
    };

    let resultObj = { ...obj };

    let forVectors = {
        desktop: ['img/vector/Vector1.png', 'img/vector/Vector2.png', 'img/vector/Vector3.png', 'img/vector/Vector4.png', 'img/vector/Vector5.png', 'img/vector/Vector6.png', 'img/vector/Vector7.png', 'img/vector/Vector8.png', 'img/vector/Vector9.png', 'img/vector/Vector10.png', 'img/vector/Vector11.png', 'img/vector/Vector12.png', 'img/vector/Vector13.png'],
        laptop: ['img/vector/Vector01.png', 'img/vector/Vector02.png', 'img/vector/Vector03.png', 'img/vector/Vector04.png', 'img/vector/Vector05.png', 'img/vector/Vector06.png', 'img/vector/Vector07.png', 'img/vector/Vector08.png', 'img/vector/Vector09.png', 'img/vector/Vector010.png', 'img/vector/Vector011.png', 'img/vector/Vector012.png', 'img/vector/Vector013.png'],
        mobile: ['img/vector/Vector001.png', 'img/vector/Vector002.png', 'img/vector/Vector003.png', 'img/vector/Vector004.png', 'img/vector/Vector005.png', 'img/vector/Vector006.png', 'img/vector/Vector007.png', 'img/vector/Vector008.png', 'img/vector/Vector009.png', 'img/vector/Vector0010.png', 'img/vector/Vector0011.png', 'img/vector/Vector0012.png', 'img/vector/Vector0013.png']
    };

    let forGymDesktopPictures = {
        desktop: [
            'img/gym1/fitnes-1.png',
            'img/gym1/fitnes-2.png',
            'img/gym1/fitnes-3.png',
            'img/gym1/fitnes-4.png',
            'img/gym1/fitnes-0.png',
            'img/gym1/fitnes-0.png',
            'img/gym1/fitnes-0.png',
            'img/gym1/fitnes-5.png',
            'img/gym1/fitnes-0.png',
            'img/gym1/fitnes-0.png',
            'img/gym1/fitnes-6.png',
            'img/gym1/fitnes-7.png',
            'img/gym1/fitnes-0.png'],

        laptop: [
            'img/gym1/fitnes-01.png',
            'img/gym1/fitnes-02.png',
            'img/gym1/fitnes-03.png',
            'img/gym1/fitnes-04.png',
            'img/gym1/fitnes-00.png',
            'img/gym1/fitnes-00.png',
            'img/gym1/fitnes-00.png',
            'img/gym1/fitnes-05.png',
            'img/gym1/fitnes-00.png',
            'img/gym1/fitnes-00.png',
            'img/gym1/fitnes-06.png',
            'img/gym1/fitnes-07.png',
            'img/gym1/fitnes-00.png'],

        mobile: [
            'img/gym1/fitnes-001.png',
            'img/gym1/fitnes-002.png',
            'img/gym1/fitnes-003.png',
            'img/gym1/fitnes-004.png',
            'img/gym1/fitnes-000.png',
            'img/gym1/fitnes-000.png',
            'img/gym1/fitnes-000.png',
            'img/gym1/fitnes-005.png',
            'img/gym1/fitnes-000.png',
            'img/gym1/fitnes-000.png',
            'img/gym1/fitnes-006.png',
            'img/gym1/fitnes-007.png',
            'img/gym1/fitnes-000.png'],
    };

    let objKeys = Object.keys(obj);

    let marker = document.querySelectorAll('.marker-item');
    let mainLInfo = document.querySelector('.main_left-info');
    let info = document.querySelector('.info_block');
    let infoText = document.querySelector('.info_block > p');
    let gymPicture = document.querySelector('.gym_picture > img');
    let line = document.querySelectorAll('.line');
    let vectors = document.querySelectorAll('.line > img');
    let pictures = document.querySelectorAll('.pictures');

    function forPicturesChange() {
        if (window.innerWidth <= 1200) {
            vectors.forEach((el, ind) => (el.src = forVectors.mobile[ind]));
            objKeys.forEach((key, ind) => (resultObj[key][1] = forGymDesktopPictures.mobile[ind]));
            // gymPicture.src = 'img/gym1/fitnes-000.png';
            pictures.forEach(el => {
                el.style.display = 'none';
            })
            pictures[0].src = 'img/gym1/fitnes-000.png';
            pictures[0].style.display = 'block';

        } else if (window.innerWidth <= 1400) {
            vectors.forEach((el, ind) => (el.src = forVectors.laptop[ind]));
            objKeys.forEach((key, ind) => (resultObj[key][1] = forGymDesktopPictures.laptop[ind]));
            // gymPicture.src = 'img/gym1/fitnes-00.png';
            pictures.forEach(el => {
                el.style.display = 'none';
            })
            pictures[0].src = 'img/gym1/fitnes-00.png';
            pictures[0].style.display = 'block';

        } else {
            vectors.forEach((el, ind) => (el.src = forVectors.desktop[ind]));
            objKeys.forEach((key, ind) => (resultObj[key][1] = forGymDesktopPictures.desktop[ind]));
            // gymPicture.src = 'img/gym1/fitnes-0.png';
            pictures.forEach(el => {
                el.style.display = 'none';
            })
            pictures[0].src = 'img/gym1/fitnes-0.png';
            pictures[0].style.display = 'block';

        }
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
                    // gymPicture.src = resultObj[objKeys[ind]][1];
                    pictures[ind + 1].src = resultObj[objKeys[ind]][1];
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
            // gymPicture.src = 'img/gym1/fitnes-000.png';
            pictures.forEach(el => {
                el.style.display = 'none';
            })
            pictures[0].src = 'img/gym1/fitnes-000.png';
            pictures[0].style.display = 'block';

        } else if (window.innerWidth <= 1400) {
            // gymPicture.src = 'img/gym1/fitnes-00.png';
            pictures.forEach(el => {
                el.style.display = 'none';
            })
            pictures[0].src = 'img/gym1/fitnes-00.png';
            pictures[0].style.display = 'block';

        } else {
            // gymPicture.src = 'img/gym1/fitnes-0.png';
            pictures.forEach(el => {
                el.style.display = 'none';
            })
            pictures[0].src = 'img/gym1/fitnes-0.png';
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
        mainFunc();
    });

    window.addEventListener('load', () => {
        forPicturesChange();
        mainFunc();
    });

});
