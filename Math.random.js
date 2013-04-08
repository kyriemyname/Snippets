var Mr = function( coefficient, handlerType ) { // Sets the short name. I use this one many times, that's why the name is short
	coefficient = coefficient || 1;
	var result = Math.random()*coefficient;
	switch (handlerType) {
		case 'int': result = result >> 0; break;
		case 'round': result = Math.round(result); break
		case 'ceil': result = Math.ceil(result); break;
	}
	return result;
}