'use strict';

exports.addId = (obj) => {
	var i = 0;

	obj.forEach(element => {
		element.id = ++i;
	});

// La misma instruccion pero con un ciclo for
//	for(i = 0; i < obj.length; i++) {
//		obj[i].id = i
//	}

	return obj;
}