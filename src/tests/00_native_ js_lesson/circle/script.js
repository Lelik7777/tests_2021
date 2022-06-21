const go = () => {
  showCircle()(150, 150, 100, (div) => {
    div.classList.add("message-ball");
    div.append("hello,world");
  });
};

function showCircle(x, y, radius, callback) {
  let div = document.createElement("div");
  div.className = "circle";
  div.style.height = 0;
  div.style.width = 0;
  div.style.top = y + "px";
  div.style.left = x + "px";
  document.body.append(div);
  setTimeout(() => {
    div.style.height = radius * 2 + "px";
    div.style.width = radius * 2 + "px";
    div.addEventListener("transitionend", function handler() {
      div.removeEventListener("transitionend", handler);
      callback(div);
    });
  }, 0);
}
