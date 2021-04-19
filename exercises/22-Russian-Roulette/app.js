var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    //if (...) return ("You're dead!");
    //else return ("Keep playing!");
    if (spinnerPosition() != bulletPosition) {
        return("Keep playing");
    } else{
        return("You're dead!");
    }
}

console.log(fireGun(spinChamber));