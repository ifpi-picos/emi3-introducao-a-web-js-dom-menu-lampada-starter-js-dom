// Menu mobile

// Imagem 1
const imagem1 = document.getElementById("lampada-01");
imagem1.addEventListener("click", function () {
  console.log(imagem1.src);
  if (imagem1.src.endsWith("lampada.jpg")) {
    imagem1.src = "img/lampada-on.jpg";
  } else {
    imagem1.src = "img/lampada.jpg";
  }
});

// Imagem 2
const imagem2 = document.getElementById("lampada-02");
imagem2.addEventListener("mouseover", function () {
  imagem2.src = "img/lampada-on.jpg";
});
const imagem = document.getElementById("lampada-02");
imagem2.addEventListener("mouseout", function () {
  imagem2.src = "img/lampada.jpg";
});
var btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};
