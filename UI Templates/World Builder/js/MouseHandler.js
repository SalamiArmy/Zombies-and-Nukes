function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function writeMessage(canvas, message) {
    document.getElementById("ID").value = message;
    //var context = canvas.getContext('2d');
    //context.clearRect(0, 0, 75, 75);
    //context.font = '18pt Calibri';
    //context.fillStyle = 'black';
    //context.fillText(message, 10, 25);
}

function AddMouseHandler(canvas, grid) {
    canvas.addEventListener('mousedown', function (evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = grid.GetHexAt(grid, new HT.Point(mousePos.x, mousePos.y)).Id;
        writeMessage(canvas, message);
    }, false);
}