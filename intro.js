ghost.addEventListener("click", function () {
  alert("Boo!");
});

lightsOn.addEventListener("click", function () {
  //   console.log("lights turn on");
  document.getElementById("lightbulb").src = "lightbulb_on.webp";
  //   document.getElementById("lightsOn").innerHTML = "Turn off the lights!";
  document.getElementById("lightsOn").style.display = "none";
  document.getElementById("lightsOff").style.display = "initial";
  document.body.classList.toggle("lightMode");
  //   document.body.style.background = "white";
  //   document.body.style.color = "black";
});

lightsOff.addEventListener("click", function () {
  document.getElementById("lightbulb").src = "lightbulb_off.webp";
  document.getElementById("lightsOn").style.display = "initial";
  document.getElementById("lightsOff").style.display = "none";
  document.body.classList.toggle("lightMode");
  //   document.body.style.background = "black";
  //   document.body.style.color = "white";
});
