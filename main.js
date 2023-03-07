const root = document.documentElement;

// Using this part we can change properties of fonts using random numbers

// root.addEventListener("mousemove", (e) => {
//   root.style.setProperty("--font-weight", Math.random() * 1000);
//   root.style.setProperty("--font-midlinet", Math.random() * 1000);
//   root.style.setProperty("--font-contrast", Math.random() * -1000);

//   root.style.setProperty("--font-weight-sec", Math.random() * 800);
// });

// Using this part we can change properties of fonts using mouse location on screen

function updateText(e) {
  multiplierWidth = e.offsetX / window.innerWidth;
  multiplierHeight = e.offsetY / window.innerHeight;

  randomWeight = multiplierWidth * 500;
  randomCont = multiplierHeight * 1000;
  randomMidl = multiplierHeight * -100;

  randomWeightSec = multiplierWidth * 800;

  root.style.setProperty("--font-weight", randomWeight);
  root.style.setProperty("--font-midlinet", randomCont);
  root.style.setProperty("--font-contrast", randomMidl);

  root.style.setProperty("--font-weight-sec", randomWeightSec);
}

window.addEventListener("mousemove", updateText);
