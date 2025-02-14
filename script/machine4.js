document.addEventListener('DOMContentLoaded', () => {

    let obj = {
        first: ['Горячекатанный профиль с толщиной стенки 3 мм – рамы тренажеров выдерживают заявленную производителем нагрузку', 'img/gym4/fitnes-1_converted.webp'],
        second: [`Горячекатанный стальной профиль с толщиной стенки:
            <div>
        <p>– 2 мм – для регулируемых и горизонтальных скамеек</p>
        <p>– 3 мм - для стационарных жимовых скамеек со стойками под штангу</p>
        </div>`,
            'img/gym4/fitnes-2_converted.webp'],
        third: ['Тренажеры произведены и сертифицированы по ГОСТ-Р',
            'img/gym4/fitnes-0_converted.webp'],
        forth: [`Тренажеры произведены и сертифицированы по ГОСТ-Р`,
            'img/gym4/fitnes-0_converted.webp'],
        fifth: [`  
       <div> 
        <p>Чехлы из качественного заменителя кожи российского производства – цвет мягких элементов можно выбрать. </p> 
        <p>Наполнитель подушек – долговечный вспененный материал, устойчивый к деформации. </p>
        <p>Основание подушки – березовая многослойная фанера 15 мм </p>
        </div>`,
            'img/gym4/fitnes-3_converted.webp'],
        sixth: ['Полимерно-порошковое покрытие рам с возможностью персонализации цвета – цвет рамы тренажера можно выбрать',
            'img/gym4/fitnes-0_converted.webp'],
        seventh: ['Полимерно-порошковое покрытие рам с возможностью персонализации цвета – цвет рамы тренажера можно выбрать',
            'img/gym4/fitnes-0_converted.webp'],
        eight: ['Все сварные соединения выполнены «вкруг» - гарантия на раму тренажера – 10 лет',
            'img/gym4/fitnes-0_converted.webp'],
        nineth: ['Все сварные соединения выполнены «вкруг» - гарантия на раму тренажера – 10 лет',
            'img/gym4/fitnes-0_converted.webp'],
        ten: ['Промокод на скидку – ПРОМОКОД',
            'img/gym4/fitnes-0_converted.webp'],
        eleven: [`Качественная пластиковая фурнитура российского производства
        `,
            'img/gym4/fitnes-4_converted.webp'],
        tuelve: ['Адаптеры для хранения дисков нужного диаметра – на ваш выбор 25, 30 или 50 мм',
            'img/gym4/fitnes-5_converted.webp'],
        threeteen: ['Цельносварная рамка основания спинки и сиденья с надежным механизмом регулировки угла наклона',
            'img/gym4/fitnes-6_converted.webp'],
        forteen: ['Удобная рукоятка для перемещения регулируемых скамеек по помещению',
            'img/gym4/fitnes-7_converted.webp'],
        fifteen: ['Надежные шарнирные соединения для максимальной нагрузки (не болтовые соединения, а шарниры. В зависимости от модели на скамьи устанавливается подшипниковый узел), все люфты сведены к минимуму.',
            'img/gym4/fitnes-0_converted.webp'],
        sixteen: ['Накладки из нержавеющей стали на местах контакта грифа с рамой ',
            'img/gym4/fitnes-8_converted.webp'],
        seventeen: ['Кронштейны для грифа из стали толщиной 6 мм',
            'img/gym4/fitnes-9_converted.webp'],
        eighteen: ['Повышенная жесткость конструкции исключает раскачивания под большим весом',
            'img/gym4/fitnes-10_converted.webp'],
        nineteen: ['Подпружиненные фиксаторы для легкой и быстрой фиксации выбранного положения',
            'img/gym4/fitnes-11_converted.webp'],
        tuenty: ['Прорезиненные опоры для исключения повреждения напольных покрытий и предотвращения скольжения скамьи во время выполнения упражнений.',
            'img/gym4/fitnes-0_converted.webp'],
    };

    let resultObj = { ...obj };

    let forVectors = {
        desktop: ['img/vector3/Vector1.png', 'img/vector3/Vector2.png', 'img/vector3/Vector3.png', 'img/vector3/Vector4.png', 'img/vector3/Vector5.png', 'img/vector3/Vector6.png', 'img/vector3/Vector7.png', 'img/vector3/Vector8.png', 'img/vector3/Vector9.png', 'img/vector3/Vector10.png', 'img/vector3/Vector11.png', 'img/vector3/Vector12.png', 'img/vector3/Vector13.png', 'img/vector3/Vector14.png', 'img/vector3/Vector15.png', 'img/vector3/Vector16.png', 'img/vector3/Vector17.png', 'img/vector3/Vector18.png', 'img/vector3/Vector19.png', 'img/vector3/Vector20.png',],
        laptop: ['img/vector3/Vector01.png', 'img/vector3/Vector02.png', 'img/vector3/Vector03.png', 'img/vector3/Vector04.png', 'img/vector3/Vector05.png', 'img/vector3/Vector06.png', 'img/vector3/Vector07.png', 'img/vector3/Vector08.png', 'img/vector3/Vector09.png', 'img/vector3/Vector010.png', 'img/vector3/Vector011.png', 'img/vector3/Vector012.png', 'img/vector3/Vector013.png', 'img/vector3/Vector014.png', 'img/vector3/Vector015.png', 'img/vector3/Vector016.png', 'img/vector3/Vector017.png', 'img/vector3/Vector018.png', 'img/vector3/Vector019.png', 'img/vector3/Vector020.png',],
        mobile: ['img/vector3/Vector001.png', 'img/vector3/Vector002.png', 'img/vector3/Vector003.png', 'img/vector3/Vector004.png', 'img/vector3/Vector005.png', 'img/vector3/Vector006.png', 'img/vector3/Vector007.png', 'img/vector3/Vector008.png', 'img/vector3/Vector009.png', 'img/vector3/Vector0010.png', 'img/vector3/Vector0011.png', 'img/vector3/Vector0012.png', 'img/vector3/Vector0013.png', 'img/vector3/Vector0014.png', 'img/vector3/Vector0015.png', 'img/vector3/Vector0016.png', 'img/vector3/Vector0017.png', 'img/vector3/Vector0018.png', 'img/vector3/Vector0019.png', 'img/vector3/Vector0020.png',]
    };


    let forGymDesktopPictures = {
        desktop: [
            'img/gym4/fitnes-1_converted.webp',
            'img/gym4/fitnes-2_converted.webp',
            'img/gym4/fitnes-0_converted.webp',
            'img/gym4/fitnes-0_converted.webp',
            'img/gym4/fitnes-3_converted.webp',
            'img/gym4/fitnes-0_converted.webp',
            'img/gym4/fitnes-0_converted.webp',
            'img/gym4/fitnes-0_converted.webp',
            'img/gym4/fitnes-0_converted.webp',
            'img/gym4/fitnes-0_converted.webp',
            'img/gym4/fitnes-4_converted.webp',
            'img/gym4/fitnes-5_converted.webp',
            'img/gym4/fitnes-6_converted.webp',
            'img/gym4/fitnes-7_converted.webp',
            'img/gym4/fitnes-0_converted.webp',
            'img/gym4/fitnes-8_converted.webp',
            'img/gym4/fitnes-9_converted.webp',
            'img/gym4/fitnes-10_converted.webp',
            'img/gym4/fitnes-11_converted.webp',
            'img/gym4/fitnes-0_converted.webp',
        ],

        laptop: [
            'img/gym4/fitnes-01_converted.webp',
            'img/gym4/fitnes-02_converted.webp',
            'img/gym4/fitnes-00_converted.webp',
            'img/gym4/fitnes-00_converted.webp',
            'img/gym4/fitnes-03_converted.webp',
            'img/gym4/fitnes-00_converted.webp',
            'img/gym4/fitnes-00_converted.webp',
            'img/gym4/fitnes-00_converted.webp',
            'img/gym4/fitnes-00_converted.webp',
            'img/gym4/fitnes-00_converted.webp',
            'img/gym4/fitnes-04_converted.webp',
            'img/gym4/fitnes-05_converted.webp',
            'img/gym4/fitnes-06_converted.webp',
            'img/gym4/fitnes-07_converted.webp',
            'img/gym4/fitnes-00_converted.webp',
            'img/gym4/fitnes-08_converted.webp',
            'img/gym4/fitnes-09_converted.webp',
            'img/gym4/fitnes-010_converted.webp',
            'img/gym4/fitnes-011_converted.webp',
            'img/gym4/fitnes-00_converted.webp',
        ],

        mobile: [
            'img/gym4/fitnes-001_converted.webp',
            'img/gym4/fitnes-002_converted.webp',
            'img/gym4/fitnes-000_converted.webp',
            'img/gym4/fitnes-000_converted.webp',
            'img/gym4/fitnes-003_converted.webp',
            'img/gym4/fitnes-000_converted.webp',
            'img/gym4/fitnes-000_converted.webp',
            'img/gym4/fitnes-000_converted.webp',
            'img/gym4/fitnes-000_converted.webp',
            'img/gym4/fitnes-000_converted.webp',
            'img/gym4/fitnes-004_converted.webp',
            'img/gym4/fitnes-005_converted.webp',
            'img/gym4/fitnes-006_converted.webp',
            'img/gym4/fitnes-007_converted.webp',
            'img/gym4/fitnes-000_converted.webp',
            'img/gym4/fitnes-008_converted.webp',
            'img/gym4/fitnes-009_converted.webp',
            'img/gym4/fitnes-0010_converted.webp',
            'img/gym4/fitnes-0011_converted.webp',
            'img/gym4/fitnes-000_converted.webp',
        ],
    };

    let objKeys = Object.keys(obj);

    let marker = document.querySelectorAll('.marker-item');
    let mainLInfo = document.querySelector('.main_left-info');
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
        pictures[0].src = resultObj.third[1];
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
                infoText.innerHTML = resultObj[objKeys[ind]][0];

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

});
