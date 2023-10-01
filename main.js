function veMeCon(ctx) {
    // Mẹ
    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, Math.PI * 2, false);
    ctx.moveTo(200, 250);
    ctx.lineTo(200, 350);
    ctx.moveTo(200, 250);
    ctx.lineTo(150, 300);
    ctx.moveTo(200, 250);
    ctx.lineTo(250, 300);
    ctx.moveTo(200, 350);
    ctx.lineTo(150, 400);
    ctx.moveTo(200, 350);
    ctx.lineTo(250, 400);
    ctx.stroke();

    ctx.font = '30px Arial';
    ctx.fillText('Mẹ', 170, 140);

    // Con Gái
    ctx.beginPath();
    ctx.arc(400, 250, 40, 0, Math.PI * 2, false);
    ctx.moveTo(400, 290);
    ctx.lineTo(400, 360);
    ctx.moveTo(400, 290);
    ctx.lineTo(360, 330);
    ctx.moveTo(400, 290);
    ctx.lineTo(440, 330);
    ctx.moveTo(400, 360);
    ctx.lineTo(360, 390);
    ctx.moveTo(400, 360);
    ctx.lineTo(440, 390);
    ctx.stroke();

    ctx.font = '30px Arial';
    ctx.fillText('Liên', 360, 190);
}

function veConGa(x, y, ctx) {
    // Cơ thể gà
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2, false);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.stroke();

    // Đầu gà
    ctx.beginPath();
    ctx.arc(x, y - 35, 15, 0, Math.PI * 2, false);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.stroke();

    // Mắt gà bên trái
    ctx.beginPath();
    ctx.arc(x - 7, y - 38, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "black";
    ctx.fill();

    // Mắt gà bên phải
    ctx.beginPath();
    ctx.arc(x + 7, y - 38, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "black";
    ctx.fill();

    // Mỏ gà
    ctx.beginPath();
    ctx.moveTo(x - 5, y - 32);
    ctx.lineTo(x + 5, y - 32);
    ctx.lineTo(x, y - 25);
    ctx.closePath();
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.stroke();

    // Mào trên đầu
    ctx.beginPath();
    ctx.moveTo(x - 5, y - 50);
    ctx.lineTo(x, y - 58);
    ctx.lineTo(x + 5, y - 50);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.stroke();

    // Chân gà trái
    ctx.beginPath();
    ctx.moveTo(x - 10, y + 25);
    ctx.lineTo(x - 10, y + 35);
    ctx.stroke();

    // Chân gà phải
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 25);
    ctx.lineTo(x + 10, y + 35);
    ctx.stroke();

    // Ghi chữ "gà" lên đầu
    ctx.font = '15px Arial';
    ctx.fillStyle = "black";
    ctx.fillText('gà', x - 10, y - 60);
}

window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    veMeCon(ctx);

    // Vẽ con gà ở các vị trí khác nhau
    veConGa(50, 400, ctx);
    veConGa(120, 400, ctx);
    veConGa(190, 400, ctx);
}
