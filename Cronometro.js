let horas = 0
let minutos = 0 
let segundos = 0
let mms = 0

var tempo = 1
var cron;

function start(){
    cron = setInterval(() => {timer(); } ,tempo)

}

function pause(){
    clearInterval(cron)
}

function stop(){
    clearInterval(cron)
    horas = 0
    minutos = 0 
    segundos = 0
    mms = 0

}

function timer(){
    mms++;
    if (mms >= 1000){
        mms = 0
        segundos++
        if(segundos >= 60){
            segundos = 0
            minutos++
            if(minutos >= 60){
                minutos = 0
                horas++
            }        
        }
    }
    var format = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos) + ':' + (mms < 10 ? '0' + mms : mms)
    document.getElementById('Contador').innerHTML = format

}