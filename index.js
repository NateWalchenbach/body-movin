const element = document.getElementById("bm");

let animation = lottie.loadAnimation({
  container: element,
  renderer: "svg",
  loop: false,
  autoplay: {
    play: function (event) {
      event.addEventListener("view", () => {});
    },
  },
  path: "data.json",
});
