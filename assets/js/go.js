require('../css/go.css');

var exerciseArray = [
    'Squat',
    'Kicks Thing',
    'Bicycle',
    'Crunch',
    'Jump',
    'Lunge'
];

workOrRest = "work";
var setCount = exerciseArray.length;
var set = 0;
var restSeconds = 10;
var workSeconds = 50;
var time = workSeconds;
var totalSeconds = ( restSeconds + workSeconds ) * setCount;
var timer;
var timerRunning = false;

updateScreen();
document.getElementById("currentExercise").innerHTML = exerciseArray[0];
var setOf = set + " of " + setCount;
document.getElementById("set").innerHTML = setOf;

function startTimer(){
    if ( set == 0 ){ set++ };
    timerRunning = true;
    timer = setInterval(runTimer, 1000);
}

function runTimer() {
    totalSeconds--;
    time--;
    updateScreen();
    if ( ended(time) == "Yes" ){ restWorkSwitch(); }
}

function tick(){

}

function restWorkSwitch(){
    if ( ended(totalSeconds) == "Yes" ){ stopTimer(); }

    if( workOrRest == "work" ){
        workOrRest = "rest";
        time = restSeconds;
        document.getElementById("workOrRest").classList.add("rest");
        document.getElementById("workOrRest").classList.remove("work");
        document.getElementById("currentExercise").innerHTML = exerciseArray[set];
        if ( set > setCount ){
            stopTimer();
            document.getElementById("set").innerHTML = "You did it!!";
        }
    } else {
        workOrRest = "work";
        time = workSeconds;
        set++;
        document.getElementById("workOrRest").classList.add("work");
        document.getElementById("workOrRest").classList.remove("rest");

        setOf = set + " of " + setCount;
        document.getElementById("set").innerHTML = setOf;


    }
}

function updateScreen(){
    document.getElementById("totalSeconds").innerHTML = numberDisplay( totalSeconds );
    document.getElementById("time").innerHTML = numberDisplay( time );
    document.getElementById("workOrRest").innerHTML = workOrRest;
    setOf = set + " of " + setCount;
    document.getElementById("set").innerHTML = setOf;
}

function ended( time ){
    if ( time == 0 ){
        return "Yes";
    }
}

function numberDisplay( number ){
    minutes = Math.floor( number / 60);
    seconds = number - minutes * 60;
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
    if ( timerRunning == false ){
        startTimer();
        document.getElementById("startStop").innerHTML = "Stop";
    } else {
        stopTimer();
        document.getElementById("startStop").innerHTML = "Start";
    }
}

function skip(){
    time = 1;
}

