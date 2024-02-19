const hoursNumber = document.querySelector('.hours');
const minutesNumber = document.querySelector('.minutes');
const min = document.querySelector('.m');
const sec = document.querySelector('.s');
const hour = document.querySelector('.h');


function clock() {
    let time = new Date();

    let second = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;

    min.style = `transform: rotate(${minutes}deg); transition: 0.5s`;
    sec.style = `transform: rotate(${second}deg); transition: 0.5s`;
    hour.style = `transform: rotate(${hours}deg); transition: 0.5s`;

    hoursNumber.innerHTML = time.getHours();
    minutesNumber.innerHTML = time.getMinutes();

    setTimeout(() => clock(), 1000);
}

clock();

//  tab satrt

const tabsItem = document.querySelectorAll('.tabsItem');
const tabsContentItem = document.querySelectorAll('.tabsContentItem ');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let x = 0; x < tabsItem.length; x++) {
            tabsItem[x].classList.remove('active');
            tabsContentItem[x].classList.remove('active');
        }

        tabsItem[i].classList.add('active');
        tabsContentItem[i].classList.add('active');
    })
}

const stopwatch__btn = document.querySelector('.stopwatch__btn');
const tabsLink__span = document.querySelector('.tabsLink__span');

const stopwatch__seconds = document.querySelector('.stopwatch__seconds');
const stopwatch__minutes = document.querySelector('.stopwatch__minutes');
const stopwatch__hours = document.querySelector('.stopwatch__hours');
const stopwatch__mil = document.querySelector('.stopwatch__mil');

stopwatch__btn.addEventListener('click', function () {

    if (stopwatch__btn.innerHTML == 'start') {
        stopwatch__btn.innerHTML = 'stop';
        tabsLink__span.classList.add('active');
        let i = 0;
        
        stopWatch(stopwatch__btn, i);
    } else if (stopwatch__btn.innerHTML == 'stop') {
        stopwatch__btn.innerHTML = 'clear';
        tabsLink__span.classList.remove('active');
        tabsLink__span.classList.add('active_clear');
    } else {
        stopwatch__btn.innerHTML = 'start';
        tabsLink__span.classList.remove('active_clear');
        
        stopwatch__seconds.innerHTML = 0;
        stopwatch__minutes.innerHTML = 0;
        stopwatch__hours.innerHTML = 0;
        stopwatch__mil.innerHTML = 0;
    }
})


function stopWatch(stopwatch__btn, i) {
    if (stopwatch__btn.innerHTML == 'stop') {

        if (i == 5) {
            i = 0;
            stopwatch__mil.innerHTML = i

            if (stopwatch__seconds.innerHTML == 5) {
                stopwatch__seconds.innerHTML = 0;
            } 
            else {
                stopwatch__seconds.innerHTML++;
            }
        } 
        else {
            i++;
            stopwatch__mil.innerHTML = i;
        }


        setTimeout(() => stopWatch(stopwatch__btn, i), 100);
    }


}