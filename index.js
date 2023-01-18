//la e de event, exactamente que significa y cm funciona, y vale para cualquier tipo de evento?

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing"); //target a que sirve y como funciona
}

const keys = Array.from(document.querySelectorAll(".key")); //esta linea que significa y como funciona?
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
