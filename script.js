let obj = {
    first: ['Горячекатанный профиль с толщиной стенки 3 мм – рамы тренажеров выдерживают заявленную производителем нагрузку', 'img/gym1.png'],
    second: ['Стальные плиты грузоблока весом 5 кг, с полиамидными втулками для плавного и бесшумного скольжения', 'img/gym2.png'],
};
let objKeys = Object.keys(obj);
console.log(objKeys);


let marker = document.querySelectorAll('.marker');
let info = document.querySelector('.info_block');
let infoText = document.querySelector('.info_block > p');
let gymPicture = document.querySelector('.gym_picture > img');
let line = document.querySelectorAll('.line svg');


marker.forEach((el, ind) => {
    el.onmouseenter = () => {
        el.children[2].classList.add('marker-animation_active');
        if (el !== marker[marker.length - 1]) {
            line[ind].classList.add('line_active_right');
            if (objKeys[ind]) {
                info.classList.add('info_block_active');       
                infoText.textContent = obj[objKeys[ind]][0];
                
                if (obj[objKeys[ind]][1]){
                    gymPicture.src = obj[objKeys[ind]][1];
                    console.log(obj[objKeys[ind]][1]);
                }
            }
        }
    }
    el.onmouseleave = () => {
        el.children[2].classList.remove('marker-animation_active');
        info.classList.remove('info_block_active');
        gymPicture.src = 'img/gym.png';
        line[ind].classList.remove('line_active_right');

    }
})