/**
 * A Grid is the model of the playfield containing hexes
 * @constructor
 */
HT.Grid = function(/*double*/ width, /*double*/ height) {
	
	this.Hexes = [];
	//setup a dictionary for use later for assigning the X or Y CoOrd (depending on Orientation)
	var HexagonsByXOrYCoOrd = {};

	var row = 0;
	var y = 0.0;
	while (y + HT.Hexagon.Static.HEIGHT <= height)
	{
		var col = 0;

		var offset = 0.0;
		if (row % 2 == 1)
		{
			offset = HT.Hexagon.Static.WIDTH / 2;
			col = 1;
		}
		
		var x = offset;
		while (x + HT.Hexagon.Static.WIDTH <= width)
		{
		    var hexId = col+","+row;
			var h = new HT.Hexagon(hexId, x, y);
			
			var pathCoOrd = col;
			h.PathCoOrdY = row;
			pathCoOrd = row;
			
			this.Hexes.push(h);
			
			if (!HexagonsByXOrYCoOrd[pathCoOrd])
				HexagonsByXOrYCoOrd[pathCoOrd] = [];
			HexagonsByXOrYCoOrd[pathCoOrd].push(h);

			col+=2;
			x += HT.Hexagon.Static.WIDTH;
		}
		row++;
		y += (HT.Hexagon.Static.HEIGHT - HT.Hexagon.Static.SIDE)/2 + HT.Hexagon.Static.SIDE;
	}

	//finally go through our list of hexagons by their x co-ordinate to assign the y co-ordinate
	for (var coOrd1 in HexagonsByXOrYCoOrd)
	{
		var hexagonsByXOrY = HexagonsByXOrYCoOrd[coOrd1];
		var coOrd2 = Math.floor(coOrd1 / 2) + (coOrd1 % 2);
		for (var i in hexagonsByXOrY)
		{
			var h = hexagonsByXOrY[i];//Hexagon
			if(HT.Hexagon.Static.ORIENTATION == HT.Hexagon.Orientation.Normal)
				h.PathCoOrdY = coOrd2++;
			else
				h.PathCoOrdX = coOrd2++;
		}
	}
};

/**
 * Returns a hex at a given point
 * @this {HT.Grid}
 * @return {HT.Hexagon}
 */
HT.Grid.prototype.GetHexAt = function(grid, /*HT.Point*/ p) {
	//find the hex that contains this point
    for (var eachHex in grid.Hexes)
	{
        if (grid.Hexes[eachHex].Contains(p))
		{
            return grid.Hexes[eachHex];
		}
	}

	return null;
};

/**
 * Returns a distance between two hexes
 * @this {HT.Grid}
 * @return {number}
 */
HT.Grid.prototype.GetHexDistance = function(/*Hexagon*/ h1, /*Hexagon*/ h2) {
	//a good explanation of this calc can be found here:
	//http://playtechs.blogspot.com/2007/04/hex-grids.html
	var deltaX = h1.PathCoOrdX - h2.PathCoOrdX;
	var deltaY = h1.PathCoOrdY - h2.PathCoOrdY;
	return ((Math.abs(deltaX) + Math.abs(deltaY) + Math.abs(deltaX - deltaY)) / 2);
};

/**
 * Returns a distance between two hexes
 * @this {HT.Grid}
 * @return {HT.Hexagon}
 */
HT.Grid.prototype.GetHexById = function(id) {
	for(var i in this.Hexes)
	{
		if(this.Hexes[i].Id == id)
		{
			return this.Hexes[i];
		}
	}
	return null;
};

/**
* Returns the nearest hex to a given point
* @this {HT.Grid}
* @param {HT.Point} p the test point 
* @return {HT.Hexagon}
*/
HT.Grid.prototype.GetNearestHex = function(/*Point*/ p) {

	var distance;
	var minDistance = Number.MAX_VALUE;
	var hx = null;

	// iterate through each hex in the grid
	for (var h in this.Hexes) {
		distance = this.Hexes[h].distanceFromMidPoint(p);

		if (distance < minDistance) // if this is the nearest thus far
		{
			minDistance = distance;
			hx = this.Hexes[h];
		}
	}

	return hx;
};