
function findHexWithWidthAndHeight()
{
    HT.Hexagon.Static.WIDTH = parseFloat(86.60254037844388);
    HT.Hexagon.Static.HEIGHT = parseFloat(100.0);	
	
    var y = HT.Hexagon.Static.HEIGHT / 2.0;
	
	//solve quadratic
	var a = -3.0;
	var b = (-2.0 * HT.Hexagon.Static.WIDTH);
	var c = (Math.pow(HT.Hexagon.Static.WIDTH, 2)) + (Math.pow(HT.Hexagon.Static.HEIGHT, 2));
	
	HT.Hexagon.Static.SIDE = (-b - Math.sqrt(Math.pow(b, 2) - (4.0 * a * c))) / (2.0 * a);
	
	var x = (HT.Hexagon.Static.WIDTH - HT.Hexagon.Static.SIDE) / 2.0;	
}

function drawHexGrid()
{
	var grid = new HT.Grid(800, 600);
	var canvas = document.getElementById("hexCanvas");
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 800, 600);
	for(var h in grid.Hexes)
	{
		grid.Hexes[h].draw(ctx);
	}
	AddMouseHandler(canvas, grid);
}

function getHexGridAndAddMouseHandler()
{
	HT.Hexagon.Static.ORIENTATION = HT.Hexagon.Orientation.Rotated;
	findHexWithWidthAndHeight();
	drawHexGrid();
}

function debugHexWH()
{
	findHexWithWidthAndHeight();
	addHexToCanvasAndDraw(20, 20);
}

function addHexToCanvasAndDraw(x, y)
{
	HT.Hexagon.Static.DRAWSTATS = true;
	var hex = new HT.Hexagon(null, x, y);
	
	var canvas = document.getElementById("hexCanvas");
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 800, 600);
	hex.draw(ctx);
}