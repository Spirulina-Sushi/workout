require('../css/go.css');



    var test = $('#test').data("test");
    var exerciseArray = Object.keys(test);
    var positionArray = test;



var workOrRest = "work";
var setCount = exerciseArray.length;
var set = 0;
var restSeconds = document.getElementById("inputRest").innerHTML;
var workSeconds = document.getElementById("inputWork").innerHTML;
var time = workSeconds;
var totalSeconds = document.getElementById("inputTotal").innerHTML;
var timer;
var timerRunning = false;
var setOf = set + " of " + setCount;


updateScreenSeconds();
updateScreenFirstTime();

function startTimer(){
    if ( set === 0 ){ set++ }
    timerRunning = true;
    timer = setInterval(runTimer, 1000);
}

function runTimer() {
    totalSeconds--;
    time--;
    updateScreenSeconds();
    if ( ended(time) === "Yes" ){ restWorkSwitch(); }
}


function restWorkSwitch(){
    if ( ended(totalSeconds) === "Yes" ){ stopTimer(); }

    if( workOrRest === "work" ){
        workOrRest = "rest";
        time = restSeconds;
        updateScreenRoundsRest();
        if ( set === setCount ){
            stopTimer();
            document.getElementById("set").innerHTML = "You did it!!";
        }
    } else {
        workOrRest = "work";
        time = workSeconds;
        set++;
        updateScreenRoundsWork();
    }
}

function updateScreenSeconds(){
    document.getElementById("totalSeconds").innerHTML = numberDisplay( totalSeconds );
    document.getElementById("time").innerHTML = numberDisplay( time );
    document.getElementById("workOrRest").innerHTML = workOrRest;
    setOf = set + " of " + setCount;
    document.getElementById("set").innerHTML = setOf;
}

function updateScreenRoundsWork(){
    document.getElementById("timer").classList.add("work");
    document.getElementById("timer").classList.remove("rest");
    setOf = set + " of " + setCount;
    document.getElementById("set").innerHTML = setOf;
}

function updateScreenRoundsRest(){
    document.getElementById("timer").classList.add("rest");
    document.getElementById("timer").classList.remove("work");
    document.getElementById("currentExercise").innerHTML = exerciseArray[set];
    document.getElementById("nextExercise").innerHTML = exerciseArray[set + 1];
    // document.getElementById(exerciseArray[set] + 0).classList.add("alert alert-primary");
    // document.getElementById(exerciseArray[set] - 1).classList.remove("alert alert-primary");
}

function updateScreenFirstTime(){
    document.getElementById("inputRest").innerHTML = numberDisplay( document.getElementById("inputRest").innerHTML );
    document.getElementById("inputWork").innerHTML = numberDisplay( document.getElementById("inputWork").innerHTML );
    document.getElementById("inputTotal").innerHTML = numberDisplay( document.getElementById("inputTotal").innerHTML );
    document.getElementById("currentExercise").innerHTML = exerciseArray[0];
    document.getElementById("nextExercise").innerHTML = exerciseArray[1];
    document.getElementById("set").innerHTML = setOf;
}

function ended( time ){
    if ( time === 0 ){
        return "Yes";
    }
}

function numberDisplay( number ){
    var minutes = Math.floor( number / 60);
    var seconds = number - minutes * 60;
    if( minutes < 10 ){
        minutes = "0" + minutes
    }
    if ( seconds < 10 ){
        seconds = "0" + seconds
    }
    return minutes + ":" + seconds;
}

function stopTimer() {
    timerRunning = false;
    clearInterval(timer);
}

function startStop(){
    if ( timerRunning === false ){
        startTimer();
        document.getElementById("startStopBtn").innerHTML = "Stop";
    } else {
        stopTimer();
        document.getElementById("startStopBtn").innerHTML = "Start";
    }
}
// window.startStop = startStop();
document.getElementById("startStopBtn").onclick = function () { startStop(); };

function skip(){
    time = 1;
}
// window.skip = skip();
document.getElementById("skipBtn").onclick = function () { skip(); };