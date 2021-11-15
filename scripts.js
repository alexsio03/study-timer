function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}   

function setTime(min, sec) {
    if (min < 10) {
        document.getElementById('safeTimerDisplay').innerHTML="0"+min+":0"+sec;
    }
    else {
        document.getElementById('safeTimerDisplay').innerHTML=min+":0"+sec;
    }
}

function stopTimer(min, sec) {
    var min = min;
    var sec = sec;
    window.location.reload()
    if (min < 10) {
        document.getElementById('safeTimerDisplay').innerHTML="0"+min+":0"+sec;
    }
    else {
        document.getElementById('safeTimerDisplay').innerHTML=min+":0"+sec;
    }
}

var timer
var bell = new Audio('bell.mp3');
document.getElementById('Button').addEventListener('click', e => {
    
    console.log(e.target.firstChild.data);
    data = e.target.firstChild.data
    if(data === "Start") {
        document.getElementById('Button').innerHTML="Stop";
        document.getElementById('safeTimerDisplay').contentEditable="false";
        var sec = 00;
        var min = document.getElementById('safeTimerDisplay').innerHTML.slice(0, 2);
        timer = setInterval(function(){
            if (sec===00) {
                min--;
                sec = 59;
            }
            if (min < 10 && sec < 10) {
                document.getElementById('safeTimerDisplay').innerHTML="0"+min+":0"+sec;
            }
            else if (min < 10) {
                document.getElementById('safeTimerDisplay').innerHTML="0"+min+":"+sec;
            }
            else if (sec < 10) {
                document.getElementById('safeTimerDisplay').innerHTML=min+":0"+sec;
            }
            else {
                document.getElementById('safeTimerDisplay').innerHTML=min+":"+sec;
            }
            sec--;
            if (min < 0) {
                document.getElementById('safeTimerDisplay').innerHTML="00:00";
                document.getElementById('Button').innerHTML="Start";
                document.getElementById('safeTimerDisplay').contentEditable="true";
                bell.play();
                bell.play();
                alert("Time is up! Let's keep going! :)")
                clearInterval(timer);
            }
        }, 1000);
    }
    if (data === "Stop") {
        document.getElementById('Button').innerHTML="Start";
        document.getElementById('safeTimerDisplay').contentEditable="true";
        clearInterval(timer)
    }
});