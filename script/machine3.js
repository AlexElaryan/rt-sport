document.addEventListener('DOMContentLoaded', () => {

    let obj = {
        first: ['Высота силовой рамы и опций для верхней и нижней тяги от 210 до 240 см, на ваш выбор', 'img/gym3/fitnes-1_converted.webp'],
        second: ['Горячекатанный профиль с толщиной стенки 2 или 3 мм, на ваш выбор – рамы тренажеров выдерживают заявленную производителем нагрузку до 450 кг',
            'img/gym3/fitnes-2_converted.webp'],
        third: ['Полимерно-порошковое покрытие рам с возможностью персонализации цвета – цвет рамы тренажера можно выбрать',
            'img/gym3/fitnes-0_converted.webp'],
        forth: [`Дооснащение силовой рамы различными опциями  
       <div> 
        <p>– верхняя и нижняя тяга</p>
        <p>– машина Смита </p>
        <p>– брусья </p>
        <p>– тяга Т-грифа </p>
        <p>– дополнительные подвесы для хранения дисков </p>
        <p>– дополнительные кронштейны и страхователи для штанги</p>
        <p> – стакан для хранения грифа на раме </p>
        </div>`,
            'img/gym3/fitnes-0_converted.webp'],
        fifth: [`Дооснащение силовой рамы различными опциями  
       <div> 
        <p>– верхняя и нижняя тяга</p>
        <p>– машина Смита </p>
        <p>– брусья </p>
        <p>– тяга Т-грифа </p>
        <p>– дополнительные подвесы для хранения дисков </p>
        <p>– дополнительные кронштейны и страхователи для штанги</p>
        <p> – стакан для хранения грифа на раме </p>
        </div>`,
            'img/gym3/fitnes-0_converted.webp'],
        sixth: ['Все сварные соединения выполнены «вкруг» - гарантия на раму тренажера – 10 лет',
            'img/gym3/fitnes-0_converted.webp'],
        seventh: ['Промокод на скидку – ПРОМОКОД',
            'img/gym3/fitnes-0_converted.webp'],
        eight: ['Страхователи и кронштейны для штанги с быстрой и легкой фиксацией на любой высоте. В местах контакта страхователей и кронштейнов с грифом установлены накладки из нержавеющей стали',
            'img/gym3/fitnes-0_converted.webp'],
        nineth: ['Страхователи и кронштейны для штанги с быстрой и легкой фиксацией на любой высоте. В местах контакта страхователей и кронштейнов с грифом установлены накладки из нержавеющей стали',
            'img/gym3/fitnes-3_converted.webp'],
        ten: ['Адаптеры для хранения дисков в комплекте с силовой рамой (можно приобрести дополнительные комплекты адаптеров для хранения)',
            'img/gym3/fitnes-4_converted.webp'],
        eleven: [`Хромированные направляющие на опций
        <div>    
            <p>– машина Смита</p>
            <p>– верхняя и нижняя тяга на грузоблоке </p>
        </div>
        `,
            'img/gym3/fitnes-5_converted.webp'],
        tuelve: ['Стальные плиты грузоблока весом 5 кг, с полиамидными втулками для плавного и бесшумного скольжения',
            'img/gym3/fitnes-6_converted.webp'],
        threeteen: ['Специальный трос для тренажеров с допустимой нагрузкой на разрыв 1000 кг и полиамидные ролики 100 мм на подшипниках',
            'img/gym3/fitnes-7_converted.webp'],
        forteen: ['Все узлы вращения и качения на закрытых подшипниках российского производства',
            'img/gym3/fitnes-8_converted.webp'],
        fifteen: ['Чехлы из качественного заменителя кожи российского производства – цвет мягких элементов можно выбрать ',
            'img/gym3/fitnes-9_converted.webp'],
        sixteen: ['К опциям для верхней и нижней тяги рукоятки поставляются в комплекте',
            'img/gym3/fitnes-10_converted.webp'],
        seventeen: ['Упоры для ног, для комфортного выполнения верхней и нижней тяги',
            'img/gym3/fitnes-11_converted.webp'],
        eighteen: ['Силовые рамы произведены и сертифицированы по ГОСТ-Р',
            'img/gym3/fitnes-0_converted.webp'],
    };

    let resultObj = { ...obj };
    
    let forVectors = {
        desktop: ['img/vector2/Vector1.png', 'img/vector2/Vector2.png', 'img/vector2/Vector3.png', 'img/vector2/Vector4.png', 'img/vector2/Vector5.png', 'img/vector2/Vector6.png', 'img/vector2/Vector7.png', 'img/vector2/Vector8.png', 'img/vector2/Vector9.png', 'img/vector2/Vector10.png', 'img/vector2/Vector11.png', 'img/vector2/Vector12.png', 'img/vector2/Vector13.png', 'img/vector2/Vector14.png', 'img/vector2/Vector15.png', 'img/vector2/Vector16.png', 'img/vector2/Vector17.png', 'img/vector2/Vector18.png',],
        laptop: ['img/vector2/Vector01.png', 'img/vector2/Vector02.png', 'img/vector2/Vector03.png', 'img/vector2/Vector04.png', 'img/vector2/Vector05.png', 'img/vector2/Vector06.png', 'img/vector2/Vector07.png', 'img/vector2/Vector08.png', 'img/vector2/Vector09.png', 'img/vector2/Vector010.png', 'img/vector2/Vector011.png', 'img/vector2/Vector012.png', 'img/vector2/Vector013.png', 'img/vector2/Vector014.png', 'img/vector2/Vector015.png', 'img/vector2/Vector016.png', 'img/vector2/Vector017.png', 'img/vector2/Vector018.png',],
        mobile: ['img/vector2/Vector001.png', 'img/vector2/Vector002.png', 'img/vector2/Vector003.png', 'img/vector2/Vector004.png', 'img/vector2/Vector005.png', 'img/vector2/Vector006.png', 'img/vector2/Vector007.png', 'img/vector2/Vector008.png', 'img/vector2/Vector009.png', 'img/vector2/Vector0010.png', 'img/vector2/Vector0011.png', 'img/vector2/Vector0012.png', 'img/vector2/Vector0013.png', 'img/vector2/Vector0014.png', 'img/vector2/Vector0015.png', 'img/vector2/Vector0016.png', 'img/vector2/Vector0017.png', 'img/vector2/Vector0018.png',]
    };

    
    let forGymDesktopPictures = {
        desktop: [
            'img/gym3/fitnes-1_converted.webp',
            'img/gym3/fitnes-2_converted.webp',
            'img/gym3/fitnes-0_converted.webp',
            'img/gym3/fitnes-0_converted.webp',
            'img/gym3/fitnes-0_converted.webp',
            'img/gym3/fitnes-0_converted.webp',
            'img/gym3/fitnes-0_converted.webp',
            'img/gym3/fitnes-0_converted.webp',
            'img/gym3/fitnes-3_converted.webp',
            'img/gym3/fitnes-4_converted.webp',
            'img/gym3/fitnes-5_converted.webp',
            'img/gym3/fitnes-6_converted.webp',
            'img/gym3/fitnes-7_converted.webp',
            'img/gym3/fitnes-8_converted.webp',
            'img/gym3/fitnes-9_converted.webp',
            'img/gym3/fitnes-10_converted.webp',
            'img/gym3/fitnes-11_converted.webp',
            'img/gym3/fitnes-0_converted.webp',
        ],

        laptop: [
            'img/gym3/fitnes-01_converted.webp',
            'img/gym3/fitnes-02_converted.webp',
            'img/gym3/fitnes-00_converted.webp',
            'img/gym3/fitnes-00_converted.webp',
            'img/gym3/fitnes-00_converted.webp',
            'img/gym3/fitnes-00_converted.webp',
            'img/gym3/fitnes-00_converted.webp',
            'img/gym3/fitnes-00_converted.webp',
            'img/gym3/fitnes-03_converted.webp',
            'img/gym3/fitnes-04_converted.webp',
            'img/gym3/fitnes-05_converted.webp',
            'img/gym3/fitnes-06_converted.webp',
            'img/gym3/fitnes-07_converted.webp',
            'img/gym3/fitnes-08_converted.webp',
            'img/gym3/fitnes-09_converted.webp',
            'img/gym3/fitnes-010_converted.webp',
            'img/gym3/fitnes-011_converted.webp',
            'img/gym3/fitnes-00_converted.webp'
        ],

        mobile: [
            'img/gym3/fitnes-001_converted.webp',
            'img/gym3/fitnes-002_converted.webp',
            'img/gym3/fitnes-000_converted.webp',
            'img/gym3/fitnes-000_converted.webp',
            'img/gym3/fitnes-000_converted.webp',
            'img/gym3/fitnes-000_converted.webp',
            'img/gym3/fitnes-000_converted.webp',
            'img/gym3/fitnes-000_converted.webp',
            'img/gym3/fitnes-003_converted.webp',
            'img/gym3/fitnes-004_converted.webp',
            'img/gym3/fitnes-005_converted.webp',
            'img/gym3/fitnes-006_converted.webp',
            'img/gym3/fitnes-007_converted.webp',
            'img/gym3/fitnes-008_converted.webp',
            'img/gym3/fitnes-009_converted.webp',
            'img/gym3/fitnes-0010_converted.webp',
            'img/gym3/fitnes-0011_converted.webp',
            'img/gym3/fitnes-000_converted.webp'
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
