const imageNumber = 5;
imgNameArray = [
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
];
var imageBoxNameArray = [];

function randomGenerate(number) {
  var randomTempArray = [];
  var i = 0;
  while (i < number) {
    var rand = Math.floor(Math.random() * number);
    if (randomTempArray.indexOf(rand) == -1) {
      randomTempArray.push(rand);
      i++;
    }
  }
  return randomTempArray;
}

function createImage() {
  var i = 0;
  var mainBox = document.getElementById("mainbox");

  randomIndexArray.forEach((index) => {
    var img = document.createElement("img");
    img.setAttribute("src", "./img" + imgNameArray[index]);
    img.setAttribute("draggable", "true");
    img.setAttribute("ondragstart", "drag(event)");
    img.setAttribute("id", "drag" + i);
    i++;
    mainBox.appendChild(img);
  });
}

function createImageBox(m) {
  imageBoxNameArray = randomGenerate(m);
  var i = 0;
  var secondBox = document.getElementById("secondbox");
  imageBoxNameArray.forEach((index) => {
    var box_img = document.createElement("div");
    box_img.setAttribute("ondrop", "drop(event)");
    box_img.setAttribute("ondragover", "allowDrop(event)");
    box_img.setAttribute("id", "div" + i);
    box_img.classList.add("box-img");
    box_img.innerText = imageBoxNameArray[i];
    i++;

    secondBox.appendChild(box_img);
  });
}

function startGame() {
  randomIndexArray = randomGenerate(imageNumber);
  createImage();
  createImageBox(5);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
