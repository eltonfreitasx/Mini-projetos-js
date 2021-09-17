const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function BrokenVerify() {
    return lamp.src.indexOf ('quebrada') > -1
}

const lampOn = () => {
    if (!BrokenVerify ()) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff(){
    if (!BrokenVerify ()) {
        lamp.src = './img/desligada.jpg'
    }
}

function brokenLamp () {
    lamp.src = './img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

lamp.addEventListener ('mouseover', lampOn)//passando mouse por cima liga
lamp.addEventListener ('mouseleave', lampOff)//tirando o mouse desliga

lamp.addEventListener('dblclick',brokenLamp)