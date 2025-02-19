const sun = document.getElementById("sun");

sun.onclick = function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    sun.src = "./mode/moon.png";
  } else {
    sun.src = "./mode/sun-3.png";
  }
};
