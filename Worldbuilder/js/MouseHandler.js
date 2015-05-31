function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function SelectNewHex(canvas, message) {
    document.getElementById("HexData").value = "[[HexData]]";
    document.getElementById("SessionCoord").value = message;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost:3142/services/Zombies%20and%20Nukes/World%20Builder/World%20Builder%20Core/Update%20Session.json?SessionName=" + document.getElementById("SessionName").innerText + "&SessionCoord=" + document.getElementById("SessionCoord").value + "&OffSet=" + document.getElementById("OffSet").value);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("HexData").value = xmlhttp.responseText;
        }
    }
    xmlhttp.send();
}

function AddMouseHandler(canvas, grid) {
    canvas.addEventListener('mousedown', function (evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = grid.GetHexAt(grid, new HT.Point(mousePos.x, mousePos.y)).Id;
        SelectNewHex(canvas, message);
    }, false);
}