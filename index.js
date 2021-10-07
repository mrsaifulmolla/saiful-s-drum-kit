let number = document.querySelectorAll(".drum");
for (let index = 0; index < number.length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {

        let buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonanimation(buttonInnerHtml);
    })
}
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonanimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            let audio = new Audio('sounds/crash.mp3');
            audio.play();

            break;
        case "a":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();

            break;
        case "s":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            let snare2 = new Audio('sounds/tom-2.mp3');
            snare2.play();
            break;
        case "k":
            let snare3 = new Audio('sounds/tom-3.mp3');
            snare3.play();
            break;
        case "l":
            let snare4 = new Audio('sounds/tom-4.mp3');
            snare4.play();
            break;

        default: console.log(buttonInnerHtml);

    }
}
function buttonanimation(currentkey) {
    let activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    },100);
}
