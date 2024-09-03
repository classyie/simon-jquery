var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    let randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $(`#${buttonColours[randomNumber]}`).fadeOut(100).fadeIn(100);
    audio = new Audio(`sounds\\${buttonColours[randomNumber]}.mp3`);
    audio.play();
}


function handleButton(){
    
}