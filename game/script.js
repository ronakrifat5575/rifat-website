const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let slingshotX = canvas.width / 2;
let slingshotY = canvas.height - 50;
let rockX = slingshotX;
let rockY = slingshotY;
let rockVelocity = 0;
let isShooting = false;

function drawSlingshot() {
    ctx.fillStyle = "brown";
    ctx.fillRect(slingshotX - 10, slingshotY - 40, 20, 40);
}

function drawRock() {
    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.arc(rockX, rockY, 10, 0, Math.PI * 2);
    ctx.fill();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSlingshot();
    drawRock();

    if (isShooting) {
        rockY -= rockVelocity;
        rockVelocity -= 0.5;
        if (rockY < 0) {
            isShooting = false;
            rockX = slingshotX;
            rockY = slingshotY;
        }
    }
    requestAnimationFrame(update);
}

canvas.addEventListener("click", () => {
    if (!isShooting) {
        isShooting = true;
        rockVelocity = 10;
    }
});

update()
