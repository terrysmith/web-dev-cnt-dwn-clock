const incrementup = document.getElementById('countup_btn');
const incrementdwn = document.getElementById('countdwn_btn');

const hrmin = document.getElementById('hrmn_chk');
const rangeCounter = document.getElementById('slide_ranger');
const timerdisplay = document.getElementById('timer-digits');
const timerunits = document.getElementById('timer-units');
const pwron = document.getElementById('pwr_btn');
const timerimage = document.getElementById('clock-image');

let timeStart = 0;
let remainingTime = 0;

pwron.addEventListener('click', ()=>{
     if (pwron.value == "OFF") {
        powerOn();
        startCountDownTimer(rangeCounter.value);
      } else {
       
        powerOff();
      }
     
  });

  incrementup.addEventListener("click", incrementTimerUp);

  incrementdwn.addEventListener("click", decrementTimerDwn);

  rangeCounter.addEventListener('input',  ()=> {
    clearInterval(remainingTime);
    let rangeValue = String(rangeCounter.value).padStart(2, '0')
    timerdisplay.textContent = rangeValue  + ":00";
    if (pwron.value == "ON") {
    startCountDownTimer(rangeCounter.value);
    }
    }, false);
 
  
//increment by hour or minutes.
  function incrementTimerUp() {
    clearInterval(timeStart);
    startCountDownTimer(remainingTime + 60);
  }

  function decrementTimerDwn() {
      clearInterval(timeStart);
      if(timeStart > 1) {
         console.log(remainingTime)
        startCountDownTimer(remainingTime - 1) ; 
      }

  }

  function powerOn(){
    pwron.value = "ON";
    pwron.getElementsByTagName('div')[0].setAttribute('class', 'pwr-circle-on');
    timerdisplay.setAttribute('class', 'digits-on');
    timerunits.setAttribute('class', 'units-on');
    timerimage.setAttribute('class', 'clock-image-on');
  }

  function powerOff() {
        pwron.value = "OFF";
        timerdisplay.textContent = "00:00";
        pwron.getElementsByTagName('div')[0].setAttribute('class', 'pwr-circle-off');
        timerdisplay.setAttribute('class', 'digits-off');
        timerunits.setAttribute('class', 'units-off');
        timerimage.setAttribute('class', 'clock-image-off');     
        clearInterval(remainingTime);
  }

  function startCountDownTimer(initStartTime){
       timeStart = initStartTime * 60;
       remainingTime = setInterval(function() {
       let minutes = Math.floor(timeStart/60);
       let seconds = Math.floor(timeStart % 60);
       timeStart--;
        timerdisplay.textContent =String(minutes).padStart(2, '0') +":"+String(seconds).padStart(2, '0');
        if(timeStart <=0){
          clearInterval(remainingTime);
          timerdisplay.textContent = "00:00";
        }            
    },1000);
  }




 
