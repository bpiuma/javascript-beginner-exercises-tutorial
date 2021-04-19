function getColor(selection)
{
    switch (selection) {
		case 'rojo':
            return true;
        case 'verde':
            return true;
        case 'azul':
            return true;
	    default:
            return false;  //returns false because the user picked an unavailable color             
	}
}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
    console.log('We are sorry, that color is not available');