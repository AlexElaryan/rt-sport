let obj = {
    first: ['Горячекатанный профиль с толщиной стенки 3 мм – рамы тренажеров выдерживают заявленную производителем нагрузку', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры 2.png'],
    second: ['Стальные плиты грузоблока весом 5 кг, с полиамидными втулками для плавного и бесшумного скольжения', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры 3.png'],
    third: ['Защитные панели на рамах грузоблоков', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры 4.png'],
    forth: ['Специальный трос для тренажеров с допустимой нагрузкой на разрыв 1000 кг и полиамидные ролики 100 мм на подшипниках', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры 5.png'],
    fifth: ['Все узлы вращения и качения на закрытых подшипниках российского производства', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры.png'],
    sixth: ['Грузоблочные тренажеры произведены и сертифицированы по ГОСТ-Р', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры.png'],
    seventh: ['Полимерно-порошковое покрытие рам с возможностью персонализации цвета – цвет рамы тренажера можно выбрать', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры.png'],
    eight: ['Чехлы из качественного заменителя кожи российского производства – цвет мягких элементов можно выбрать ', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры 6.png'],
    nineth: ['Все сварные соединения выполнены «вкруг» - гарантия на раму тренажера – 10 лет', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры.png'],
    ten: ['Промокод на скидку - ПРОМОКОД', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры.png'],
    eleven: ['Резиновые рукояти на местах хватов', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры 7.png'],
    tuelve: ['Хромированные направляющие грузоблока', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры 8.png'],
    thrteen: ['Качественная пластиковая фурнитура российского производства', 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры.png'],
};
let objKeys = Object.keys(obj);
console.log(objKeys);


let marker = document.querySelectorAll('.marker');
let info = document.querySelector('.info_block');
let infoText = document.querySelector('.info_block > p');
let gymPicture = document.querySelector('.gym_picture > img');
let line = document.querySelectorAll('.line');


marker.forEach((el, ind) => {
    el.onmouseenter = () => {
        el.children[1].classList.add('marker-animation_active');
        if (el !== marker[marker.length - 1]) {
            line[ind].classList.add('line_active_right');
            if (objKeys[ind]) {
                info.classList.add('info_block_active');
                infoText.textContent = obj[objKeys[ind]][0];

                if (obj[objKeys[ind]][1]) {
                    gymPicture.src = obj[objKeys[ind]][1];
                }
            }
        }
    }
    
    el.onmouseleave = () => {
        el.children[1].classList.remove('marker-animation_active');
        info.classList.remove('info_block_active');
        if (el !== marker[marker.length - 1]) {
            line[ind].classList.remove('line_active_right');
            gymPicture.src = 'img/ПК/Грузоблачные тренажеры/Грузоблочные тренажеры.png';
        }
    }
})