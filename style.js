let hr = document.getElementById('hour');
let min = document.getElementById('min');
let ses = document.getElementById('ses');

function time(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let rotationHour = 30*hh+ mm/2;
    let rotationMin = 6*mm;
    let rotationSes = 6*ss;

    hr.style.transform = `rotate(${rotationHour}deg)`;
    min.style.transform = `rotate(${rotationMin}deg)`;
    ses.style.transform = `rotate(${rotationSes}deg)`;

}

setInterval(time, 1000);