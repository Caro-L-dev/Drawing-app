const colorCircle = document.querySelectorAll(".color-circle");

let penSize = 3;
let isDrawing;
let x;
let y;

var canvas = document.querySelector("canvas");
outline = canvas.getContext("2d");

canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  x = event.offsetX;
  y = event.offsetY;

  console.log(x, y);
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (event) => {
  draw(event.offsetX, event.offsetY);
});

outline.fillStyle = "hotpink";
outline.strokeStyle = outline.fillStyle;

function draw(x2, y2) {
  if (isDrawing) {
    outline.beginPath();
    outline.arc(x2, y2, penSize, 0, Math.PI * 2);
    outline.closePath();
    outline.fill();
    // Draw lines
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
};

function drawLine(x1, y1, x2, y2) {
  outline.beginPath();
  outline.moveTo(x1, y1);
  outline.lineTo(x2, y2);
  outline.strokeStyle = outline.fillStyle;
  outline.lineWith = penSize * 2;
  outline.stroke();
};


document.querySelector(".refresh").addEventListener('click', function () {
    outline.clearRect(0, 0, canvas.width, canvas.height);
});

const selectColor = (element) => {

    removeActiveCircleColor();
    outline.fillStyle = element.getAttribute("data-color");
    element.classList.add("active");
}

const removeActiveCircleColor = () => {
    colorCircle.forEach((circle) => {
        circle.classList.remove("active");
    });
}
