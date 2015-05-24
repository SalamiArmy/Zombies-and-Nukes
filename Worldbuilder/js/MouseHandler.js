function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function SelectNewHex(canvas, message) {
    xmlhttp.open("GET", "http://localhost:3142/Services/")
    document.getElementById("ID").value = message;
}

function AddMouseHandler(canvas, grid) {
    canvas.addEventListener('mousedown', function (evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = grid.GetHexAt(grid, new HT.Point(mousePos.x, mousePos.y)).Id;
        SelectNewHex(canvas, message);
    }, false);
}