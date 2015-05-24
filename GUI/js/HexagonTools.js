var HT = HT || {};
/**
 * A Point is simply x and y coordinates
 * @constructor
 */
HT.Point = function(x, y) {
	this.X = x;
	this.Y = y;
};

/**
 * A Rectangle is x and y origin and width and height
 * @constructor
 */
HT.Rectangle = function(x, y, width, height) {
	this.X = x;
	this.Y = y;
	this.Width = width;
	this.Height = height;
};

/**
 * A Line is x and y start and x and y end
 * @constructor
 */
HT.Line = function(x1, y1, x2, y2) {
	this.X1 = x1;
	this.Y1 = y1;
	this.X2 = x2;
	this.Y2 = y2;
};

/**
 * A Hexagon is a 6 sided polygon, our hexes don't have to be symmetrical, i.e. ratio of width to height could be 4 to 3
 * @constructor
 */
HT.Hexagon = function(id, x, y) {
	this.Points = [];//Polygon Base
	var x1 = null;
	var y1 = null;
	if(HT.Hexagon.Static.ORIENTATION == HT.Hexagon.Orientation.Normal) {
		x1 = (HT.Hexagon.Static.WIDTH - HT.Hexagon.Static.SIDE)/2;
		y1 = (HT.Hexagon.Static.HEIGHT / 2);
		this.Points.push(new HT.Point(x1 + x, y));
		this.Points.push(new HT.Point(x1 + HT.Hexagon.Static.SIDE + x, y));
		this.Points.push(new HT.Point(HT.Hexagon.Static.WIDTH + x, y1 + y));
		this.Points.push(new HT.Point(x1 + HT.Hexagon.Static.SIDE + x, HT.Hexagon.Static.HEIGHT + y));
		this.Points.push(new HT.Point(x1 + x, HT.Hexagon.Static.HEIGHT + y));
		this.Points.push(new HT.Point(x, y1 + y));
	}
	else {
		x1 = (HT.Hexagon.Static.WIDTH / 2);
		y1 = (HT.Hexagon.Static.HEIGHT - HT.Hexagon.Static.SIDE)/2;
		this.Points.push(new HT.Point(x1 + x, y));
		this.Points.push(new HT.Point(HT.Hexagon.Static.WIDTH + x, y1 + y));
		this.Points.push(new HT.Point(HT.Hexagon.Static.WIDTH + x, y1 + HT.Hexagon.Static.SIDE + y));
		this.Points.push(new HT.Point(x1 + x, HT.Hexagon.Static.HEIGHT + y));
		this.Points.push(new HT.Point(x, y1 + HT.Hexagon.Static.SIDE + y));
		this.Points.push(new HT.Point(x, y1 + y));
	}
	
	this.Id = id;
	
	this.x = x;
	this.y = y;
	this.x1 = x1;
	this.y1 = y1;
	
	this.TopLeftPoint = new HT.Point(this.x, this.y);
	this.BottomRightPoint = new HT.Point(this.x + HT.Hexagon.Static.WIDTH, this.y + HT.Hexagon.Static.HEIGHT);
	this.MidPoint = new HT.Point(this.x + (HT.Hexagon.Static.WIDTH / 2), this.y + (HT.Hexagon.Static.HEIGHT / 2));
	
	this.P1 = new HT.Point(x + x1, y + y1);
	
	this.selected = false;
};
	
/**
 * draws this Hexagon to the canvas
 * @this {HT.Hexagon}
 */
HT.Hexagon.prototype.draw = function(ctx) {

	if(!this.selected)
		ctx.strokeStyle = "grey";
	else
		ctx.strokeStyle = "black";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(this.Points[0].X, this.Points[0].Y);
	for(var i = 1; i < this.Points.length; i++)
	{
		var p = this.Points[i];
		ctx.lineTo(p.X, p.Y);
	}
	ctx.closePath();
	ctx.stroke();
	
	if(this.PathCoOrdX !== null && this.PathCoOrdY !== null && typeof(this.PathCoOrdX) != "undefined" && typeof(this.PathCoOrdY) != "undefined")
	{
		//draw co-ordinates for debugging
		ctx.fillStyle = "black"
		ctx.font = "bolder 8pt Trebuchet MS,Tahoma,Verdana,Arial,sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = 'middle';
		//var textWidth = ctx.measureText(this.Planet.BoundingHex.Id);
		if(this.PathCoOrdX==10 && this.PathCoOrdY==11)
		{
			ctx.fillText("(YOU)", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 22
		if(this.PathCoOrdX==20 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(20).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(19).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(18).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(17).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(16).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(15).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(14).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(13).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(12).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(11).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(10).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(9).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(8).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(7).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(6).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(5).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(4).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(3).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(2).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==22)
		{
			ctx.fillText("[[HTMLMapData(1).Row22]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 21
		if(this.PathCoOrdX==20 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(20).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(19).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(18).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(17).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(16).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(15).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(14).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(13).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(12).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(11).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(10).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(9).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(8).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(7).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(6).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(5).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(4).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(3).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(2).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==21)
		{
			ctx.fillText("[[HTMLMapData(1).Row21]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 20
		if(this.PathCoOrdX==20 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(20).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(19).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(18).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(17).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(16).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(15).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(14).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(13).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(12).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(11).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(10).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(9).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(8).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(7).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(6).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(5).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(4).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(3).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(2).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==20)
		{
			ctx.fillText("[[HTMLMapData(1).Row20]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 19
		if(this.PathCoOrdX==20 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(20).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(19).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(18).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(17).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(16).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(15).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(14).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(13).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(12).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(11).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(10).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(9).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(8).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(7).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(6).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(5).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(4).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(3).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(2).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==19)
		{
			ctx.fillText("[[HTMLMapData(1).Row19]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 18
		if(this.PathCoOrdX==20 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(20).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(19).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(18).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(17).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(16).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(15).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(14).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(13).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(12).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(11).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(10).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(9).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(8).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(7).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(6).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(5).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(4).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(3).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(2).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==18)
		{
			ctx.fillText("[[HTMLMapData(1).Row18]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 17
		if(this.PathCoOrdX==20 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(20).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(19).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(18).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(17).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(16).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(15).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(14).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(13).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(12).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(11).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(10).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(9).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(8).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(7).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(6).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(5).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(4).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(3).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(2).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==17)
		{
			ctx.fillText("[[HTMLMapData(1).Row17]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 16
		if(this.PathCoOrdX==20 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(20).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(19).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(18).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(17).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(16).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(15).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(14).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(13).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(12).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(11).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(10).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(9).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(8).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(7).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(6).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(5).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(4).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(3).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(2).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==16)
		{
			ctx.fillText("[[HTMLMapData(1).Row16]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 15
		if(this.PathCoOrdX==20 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(20).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(19).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(18).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(17).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(16).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(15).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(14).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(13).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(12).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(11).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(10).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(9).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(8).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(7).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(6).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(5).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(4).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(3).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(2).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==15)
		{
			ctx.fillText("[[HTMLMapData(1).Row15]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 14
		if(this.PathCoOrdX==20 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(20).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(19).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(18).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(17).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(16).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(15).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(14).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(13).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(12).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(11).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(10).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(9).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(8).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(7).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(6).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(5).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(4).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(3).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(2).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==14)
		{
			ctx.fillText("[[HTMLMapData(1).Row14]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 13
		if(this.PathCoOrdX==20 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(20).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(19).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(18).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(17).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(16).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(15).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(14).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(13).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(12).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(11).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(10).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(9).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(8).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(7).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(6).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(5).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(4).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(3).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(2).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==13)
		{
			ctx.fillText("[[HTMLMapData(1).Row13]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 12
		if(this.PathCoOrdX==20 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(20).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(19).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(18).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(17).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(16).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(15).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(14).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(13).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(12).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(11).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(10).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(9).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(8).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(7).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(6).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(5).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(4).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(3).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(2).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==12)
		{
			ctx.fillText("[[HTMLMapData(1).Row12]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 11
		if(this.PathCoOrdX==20 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(20).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(19).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(18).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(17).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(16).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(15).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(14).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(13).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(12).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(11).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(10).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(9).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(8).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(7).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(6).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(5).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(4).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(3).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(2).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==11)
		{
			ctx.fillText("[[HTMLMapData(1).Row11]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 10
		if(this.PathCoOrdX==20 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(20).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(19).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(18).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(17).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(16).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(15).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(14).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(13).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(12).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(11).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(10).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(9).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(8).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(7).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(6).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(5).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(4).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(3).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(2).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==10)
		{
			ctx.fillText("[[HTMLMapData(1).Row10]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 9
		if(this.PathCoOrdX==20 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(20).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(19).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(18).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(17).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(16).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(15).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(14).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(13).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(12).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(11).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(10).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(9).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(8).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(7).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(6).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(5).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(4).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(3).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(2).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==9)
		{
			ctx.fillText("[[HTMLMapData(1).Row9]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 8
		if(this.PathCoOrdX==20 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(20).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(19).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(18).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(17).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(16).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(15).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(14).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(13).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(12).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(11).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(10).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(9).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(8).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(7).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(6).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(5).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(4).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(3).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(2).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==8)
		{
			ctx.fillText("[[HTMLMapData(1).Row8]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 7
		if(this.PathCoOrdX==20 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(20).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(19).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(18).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(17).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(16).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(15).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(14).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(13).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(12).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(11).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(10).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(9).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(8).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(7).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(6).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(5).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(4).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(3).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(2).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==7)
		{
			ctx.fillText("[[HTMLMapData(1).Row7]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 6
		if(this.PathCoOrdX==20 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(20).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(19).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(18).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(17).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(16).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(15).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(14).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(13).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(12).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(11).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(10).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(9).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(8).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(7).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(6).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(5).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(4).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(3).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(2).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==6)
		{
			ctx.fillText("[[HTMLMapData(1).Row6]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 5
		if(this.PathCoOrdX==20 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(20).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(19).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(18).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(17).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(16).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(15).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(14).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(13).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(12).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(11).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(10).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(9).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(8).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(7).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(6).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(5).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(4).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(3).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(2).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==5)
		{
			ctx.fillText("[[HTMLMapData(1).Row5]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 4
		if(this.PathCoOrdX==20 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(20).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(19).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(18).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(17).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(16).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(15).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(14).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(13).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(12).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(11).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(10).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(9).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(8).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(7).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(6).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(5).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(4).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(3).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(2).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==4)
		{
			ctx.fillText("[[HTMLMapData(1).Row4]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 3
		if(this.PathCoOrdX==20 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(20).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(19).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(18).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(17).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(16).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(15).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(14).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(13).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(12).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(11).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(10).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(9).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(8).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(7).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(6).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(5).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(4).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(3).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(2).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==3)
		{
			ctx.fillText("[[HTMLMapData(1).Row3]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 2
		if(this.PathCoOrdX==20 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(20).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(19).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(18).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(17).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(16).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(15).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(14).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(13).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(12).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(11).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(10).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(9).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(8).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(7).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(6).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(5).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(4).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(3).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(2).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==2)
		{
			ctx.fillText("[[HTMLMapData(1).Row2]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
//Row 1
		if(this.PathCoOrdX==20 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(20).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==19 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(19).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==18 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(18).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==17 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(17).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==16 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(16).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==15 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(15).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==14 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(14).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==13 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(13).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==12 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(12).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==11 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(11).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==10 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(10).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==9 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(9).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==8 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(8).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==7 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(7).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==6 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(6).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==5 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(5).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==4 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(4).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==3 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(3).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==2 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(2).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
		if(this.PathCoOrdX==1 && this.PathCoOrdY==1)
		{
			ctx.fillText("[[HTMLMapData(1).Row1]]", this.MidPoint.X, this.MidPoint.Y + 10);
		}
	}
	
	if(HT.Hexagon.Static.DRAWSTATS)
	{
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		//draw our x1, y1, and z
		ctx.beginPath();
		ctx.moveTo(this.P1.X, this.y);
		ctx.lineTo(this.P1.X, this.P1.Y);
		ctx.lineTo(this.x, this.P1.Y);
		ctx.closePath();
		ctx.stroke();
		
		ctx.fillStyle = "black"
		ctx.font = "bolder 8pt Trebuchet MS,Tahoma,Verdana,Arial,sans-serif";
		ctx.textAlign = "left";
		ctx.textBaseline = 'middle';
		//var textWidth = ctx.measureText(this.Planet.BoundingHex.Id);
		ctx.fillText("z", this.x + this.x1/2 - 8, this.y + this.y1/2);
		ctx.fillText("x", this.x + this.x1/2, this.P1.Y + 10);
		ctx.fillText("y", this.P1.X + 2, this.y + this.y1/2);
		ctx.fillText("z = " + HT.Hexagon.Static.SIDE, this.P1.X, this.P1.Y + this.y1 + 10);
		ctx.fillText("(" + this.x1.toFixed(2) + "," + this.y1.toFixed(2) + ")", this.P1.X, this.P1.Y + 10);
	}
};

/**
 * Returns true if the x,y coordinates are inside this hexagon
 * @this {HT.Hexagon}
 * @return {boolean}
 */
HT.Hexagon.prototype.isInBounds = function(x, y) {
	return this.Contains(new HT.Point(x, y));
};
	

/**
 * Returns true if the point is inside this hexagon, it is a quick contains
 * @this {HT.Hexagon}
 * @param {HT.Point} p the test point
 * @return {boolean}
 */
HT.Hexagon.prototype.isInHexBounds = function(/*Point*/ p) {
	if(this.TopLeftPoint.X < p.X && this.TopLeftPoint.Y < p.Y &&
	   p.X < this.BottomRightPoint.X && p.Y < this.BottomRightPoint.Y)
		return true;
	return false;
};

//grabbed from:
//http://www.developingfor.net/c-20/testing-to-see-if-a-point-is-within-a-polygon.html
//and
//http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html#The%20C%20Code
/**
 * Returns true if the point is inside this hexagon, it first uses the quick isInHexBounds contains, then check the boundaries
 * @this {HT.Hexagon}
 * @param {HT.Point} p the test point
 * @return {boolean}
 */
HT.Hexagon.prototype.Contains = function(/*Point*/ p) {
	var isIn = false;
	if (this.isInHexBounds(p))
	{
		//turn our absolute point into a relative point for comparing with the polygon's points
		//var pRel = new HT.Point(p.X - this.x, p.Y - this.y);
		var i, j = 0;
		for (i = 0, j = this.Points.length - 1; i < this.Points.length; j = i++)
		{
			var iP = this.Points[i];
			var jP = this.Points[j];
			if (
				(
				 ((iP.Y <= p.Y) && (p.Y < jP.Y)) ||
				 ((jP.Y <= p.Y) && (p.Y < iP.Y))
				//((iP.Y > p.Y) != (jP.Y > p.Y))
				) &&
				(p.X < (jP.X - iP.X) * (p.Y - iP.Y) / (jP.Y - iP.Y) + iP.X)
			   )
			{
				isIn = !isIn;
			}
		}
	}
	return isIn;
};

/**
* Returns absolute distance in pixels from the mid point of this hex to the given point
* Provided by: Ian (Disqus user: boingy)
* @this {HT.Hexagon}
* @param {HT.Point} p the test point
* @return {number} the distance in pixels
*/
HT.Hexagon.prototype.distanceFromMidPoint = function(/*Point*/ p) {
	// Pythagoras' Theorem: Square of hypotenuse = sum of squares of other two sides
	var deltaX = this.MidPoint.X - p.X;
	var deltaY = this.MidPoint.Y - p.Y;

	// squaring so don't need to worry about square-rooting a negative number 
	return Math.sqrt( (deltaX * deltaX) + (deltaY * deltaY) );
};

HT.Hexagon.Orientation = {
	Normal: 0,
	Rotated: 1
};

HT.Hexagon.Static = {HEIGHT:91.14378277661477
					, WIDTH:91.14378277661477
					, SIDE:50.0
					, ORIENTATION:HT.Hexagon.Orientation.Normal
					, DRAWSTATS: false};//hexagons will have 25 unit sides for now


