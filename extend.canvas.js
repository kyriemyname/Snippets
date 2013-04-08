// — — —
// Each of those function is returning canvas context
// That makes possible to use the code like:
// 	ctx.color('red').fr( 5, 10 ).color('rgba(0,0,0,0.5)').fr( 3, 3, 5, 5 )
// instead of:
// 	ctx.fillStyle = 'red';
// 	ctx.fillRect( 5, 10, 1, 1 );
// 	ctx.fillStyle = 'rgba(0,0,0,0.5)';
// 	ctx.fillRect( 3, 3, 5, 5 );
// — — —
 
CanvasRenderingContext2D.prototype.fr = function( x, y, w, h ) {
	w = w || 1; h = h || 1;
	this.fillRect( x, y, w, h );
	return this;
}
CanvasRenderingContext2D.prototype.color = function( input ) {
	input = input || 'black';
	this.fillStyle = input;
	return this;
}