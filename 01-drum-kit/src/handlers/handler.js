export function removeTransition(e) { //for css
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

export function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

// // export {playSound};

// export const playSound = (e) =>{
//   console.log(e)
// }

// module.exports {playSound};