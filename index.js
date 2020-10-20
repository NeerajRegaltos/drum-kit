var len = document.querySelectorAll(".drum").length;
//This is for Click 
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var ki = this.textContent;
        makeSound(ki);
        animation(ki);

    });
}
//This is for Keys of Keyboard
document.addEventListener("keypress", function (event) {
    var ki = event.key;
    makeSound(ki);
    animation(ki);
});

//Common function for both the events to reduce the length and follow the DRY.
function makeSound(ki) {
    switch (ki) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(ki);

    }
}



function animation(ki) {
    var active = document.querySelector("." + ki);
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100);
}
