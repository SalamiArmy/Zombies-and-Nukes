function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function writeMessage(canvas, message) {
    document.getElementById("ID").value = message;
}

function AddMouseHandler(canvas, grid) {
    canvas.addEventListener('mousedown', function (evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = grid.GetHexAt(grid, new HT.Point(mousePos.x, mousePos.y)).Id;
        writeMessage(canvas, message);
    }, false);
}