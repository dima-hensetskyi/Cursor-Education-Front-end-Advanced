function playSound(e) {
    const code = e.keyCode? e.keyCode : this.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add(`playing`);
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove(`playing`)
}

const keys = document.querySelectorAll(".key");

keys.forEach(function (key) {
    key.addEventListener('click', playSound);  
})
window.addEventListener("keydown", playSound);
keys.forEach(key => key.addEventListener("transitionend", removeTransition));