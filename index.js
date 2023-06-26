var drums = document.querySelectorAll(".drum");
for (var i = 0; i<drums.length; i++){
    drums[i].addEventListener("click", handleClick);
}

function handleClick(){

    // this represents the html object which called the function 
    var buttonInnerHtmL = this.innerHTML; 
    playSound(buttonInnerHtmL);
    buttonAnimation(buttonInnerHtmL);
    
}
function playSound(character){
    switch(character){
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break; 
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break; 
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break; 
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break; 
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break; 
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break; 
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break; 
    }
}

document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentkey){
    var drumBtn = document.querySelector("." + currentkey);
    // now animate the drum 
    drumBtn.classList.add("pressed");
    setTimeout(function(){
        drumBtn.classList.remove("pressed");
    }, 100);
}