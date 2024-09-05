var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var start = false;
var level = 0;
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $(`#${buttonColours[randomNumber]}`).fadeOut(100).fadeIn(100);
    audio = new Audio(`sounds\\${buttonColours[randomNumber]}.mp3`);
    audio.play();
    animatePress(randomChosenColor);
    level++;

    $("#level-title").text(`Level ${level}`);
    userClickedPattern = [];
}


$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success");

        if (gamePattern.length == userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {
        wrongSound = new Audio("sounds\\wrong.mp3");
        wrongSound.play();
        console.log("wrong");
        $("body").addClass('game-over');
        setTimeout(()=>{
            $("body").removeClass('game-over');
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    start = false;
}

function playSound(name) {
    audio = new Audio(`sounds\\${name}.mp3`);
    audio.play();
}

function animatePress(currentColour) {
    $(`#${currentColour}`).addClass('pressed');
    setTimeout(function () {
        $(`#${currentColour}`).removeClass('pressed');
    }, 100);
}


$(document).keypress(function () {
    if (!start) {
        nextSequence();
        start = true;
    }
});

