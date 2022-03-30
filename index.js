const lottie = require("./lottie");

element = document.getElementById("bm");

let animation = lottie.loadAnimation({
  container: element,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "data.json",
});
