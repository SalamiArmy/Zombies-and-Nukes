
function findHexWithWidthAndHeight()
{
	var width = parseFloat(50);
	var height = parseFloat(43.30127018922194);	
	
	//solve quadratic
	var a = -3.0;
	var b = (-2.0 * width);
	var c = (Math.pow(width, 2)) + (Math.pow(height, 2));
	
	var z = (-b - Math.sqrt(Math.pow(b,2)-(4.0*a*c)))/(2.0*a);
	
	var x = "[[PlayerX]]";
	var y = "[[PlayerY]]";
	
	var contentDiv = document.getElementById("hexStatus");

	contentDiv.innerHTML = "Values for Hex: <br /><b>Width:</b> " + width + "<br /><b>Height: </b>" + height +
		"<br /><b>Side Length, z:</b> " + z + "<br /><b>[[PlayerName]]<br/><b>x:</b> " + x + "<br /><b>y:</b> " + y;
	
	HT.Hexagon.Static.WIDTH = width;
	HT.Hexagon.Static.HEIGHT = height;
	HT.Hexagon.Static.SIDE = z;
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
}

function getHexGridZR()
{
	findHexWithSideLengthZAndRatio();
	drawHexGrid();
}

function getHexGridWH()
{
	findHexWithWidthAndHeight();
	drawHexGrid();
}

function changeOrientation()
{
	if(document.getElementById("hexOrientationNormal").checked)
	{
		HT.Hexagon.Static.ORIENTATION = HT.Hexagon.Orientation.Normal;
	}
	else
	{
		HT.Hexagon.Static.ORIENTATION = HT.Hexagon.Orientation.Rotated;
	}
	drawHexGrid();
}

function debugHexZR()
{
	findHexWithSideLengthZAndRatio();
	addHexToCanvasAndDraw(20, 20);
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