// Table 1
var planetSize = function(r) {
	switch (r) {
	case 1:
	case 2:
		return "<1,000km";
	case 3:
		return "2,000km";
	case 4:
		return "4,000km";
	case 5:
	case 6:
		return "7,000km";
	case 7:
	case 8:
		return "10,000km";
	case 9:
	case 10:
		return "12,500km";
	case 11:
		return "15,000km";
	case 12:
		return "20,000km";
	}
	;
}

//Table 1
var planetGravity = function(r) {
	switch (r) {
	case 2:
		return "~0G ";
	case 3:
		return "0.1G";
	case 4:
		return "0.2G";
	case 5:
	case 6:
		return "0.5G";
	case 7:
	case 8:
		return "0.7G";
	case 9:
	case 10:
		return "1.0G";
	case 11:
		return "1.3G";
	case 12:
		return "2G";
	};
}



//Table 2
var gasGiantSize = function(){
	var r = roll() + roll();
	switch (r) {
	case 2:
		return "40,000km";
	case 3:
		return "60,000km";
	case 4:
		return "100,000km";
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
		return "150,000km";
	case 10:
	case 11:
		return "200,000km";
	case 12:
		return "250,000km";
	};
}

//Table 3
var gasGiantColor = function(){
	var r = roll() + roll();
	switch (r) {
	case 2:
		return "White";
	case 3:
		return "Shimmering Grey";
	case 4:
	case 5:
	case 6:
		return "Sulphur Yellow";
	case 7:
	case 8:
	case 9:
		return "Red Orange";
	case 10:
		return "Emrald Green";
	case 11:
		return "Azure Blue";
	case 12:
		return "Black";
	};
}

//Table 4
var gasGiantTemperature = function(){
	return roll() + roll();
}

//Table 4
var gasGiantTemperatureString = function(r){
	switch (r) {
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
		return "-200C";
	case 7:
		return "0C";
	case 8:
	case 9:
		return "500C";
	case 10:
		return "1000C";
	case 11:
		return "2000C";
	case 12:
		return "3000C";
	};
}

//Table 5
var gasGiantCharacteristics = function(){
	var r = roll() + roll();
	switch (r) {
	case 2:
	case 3:
		return "Rings";
	case 4:
	case 5:
	case 6:
		return "Storms";
	case 7:
	case 8:
		return "Spot/Super storm";
	case 9:
	case 10:
		return "Warm/Cold hole";
	case 11:
		return "Gas Creatures";
	case 12:
		return "Artifact in orbit";
	};
}

//Table 6
var asteroidBeltSize = function(){
	var r = roll();
	switch(r) {
	case 1: return "< 10,000km wide";
	case 2:
	case 3: 
	case 4: return "1-2 AU wide";
	case 5: return "10 AU wide - light blocking";
	case 6: return "20 AU wide";
	}
};

//Table 7
var asteroidBeltComposition = function(){
	var r = roll();
	switch(r) {
	case 1: return "Dust/Ash";
	case 2: return "Ice";
	case 3: 
	case 4: 
	case 5: return "Gravel and ice";
	case 6: return "Debris - wreckage/planetary remains";
	}
};

//Table 8
var asteroidBeltCharacteristics = function(){
	var r = roll() + roll();
	switch(r) {
	case 2: return "Black as the Dark between the Stars.";
	case 3: return "Bright and always visible in the sky.";
	case 4: return "A large planet sits in the middle of the belt";
	case 5: 
	case 6:
	case 7:
	case 8: return "&nbsp;";
	case 9: return "At an odd angle from the rest of the plaetary courses";
	case 10: return "The belt is home to vaccuum beings";
	case 11: return "Belt size fluctuates over segments, like the tide.";
	case 12: return "Belt contains portal builder remains";
	}
};

//Table 9
var orbit = function() {
	var r =  roll() + roll();
	switch (r) {
	case 1:
		return "ALIENS"
	case 2:
		var o = [];
		var i = roll();
		var c = 0;
		for (c = 0; c < i; c++) {
			var oc = orbit();
			if (oc !== "")
				o.push(oc);
		}
		return o.join(", ");
	case 3:
		return "Forgotten Space Station";
	case 4:
		return "Satellites";
	case 5:
		return "Space Station";
	case 6:
	case 7:
	case 8:
		return "";
	case 9:
	case 10:
		return "Moon";
	case 11:
		return "Rings/Gravel-Belt";
	case 12:
		return "Orbital Asteroid Belt";
	};
}


// Table 10
var atmosphere = function(planet) {
	if (planet.size <= 3) {
		return smallAtmosphere();
	}
	var r =  roll() + roll();
	return r;
}		

//Table 10
var atmosphereString = function(r) {
	switch (r) {
	case 2:
		return "Toxic";
	case 3:
		return "Thin";
	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
		return "Breathable";
	case 9:
		return "Dense";
	case 10:
		return "Corosive, Toxic";
	case 11:
		return "Infiltrating Toxic";
	case 12:
		return "Special";
	};
}

//Table 10
var smallAtmosphere = function() {
	var r =  roll();
	switch (r) {
	case 1:
	case 2:
		return 2;
	case 3:
	case 4:
	case 5:
	case 6:
		return 3;
	};
}

//Table 11
var temperature = function( planet ) {
	var mod = 0
	if (planet.atmosphere === 9){
		mod  = 1;
	} else if (planet.atmosphere === 10) {
		mod = 6;
	} else if (planet.atmosphere === 11) {
		mod = 6;
	}
	var r =  roll() + roll() + mod; 
	return r;
}

//Table 11
var temperatureString = function( r ) {
	switch (r) {
	case 2:
		return "Frozen";
	case 3:
	case 4:
		return "Cold";
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
		return "Temperate";
	case 10:
	case 11:
		return "Hot";
	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
		return "Burning";
	};
}

//Table 12
var geosphere = function( planet ) {
	var mod = 0
	if (planet.atmosphere === 3){
		mod = -4;
	} else if (planet.atmosphere === 9) {
		mod = -4;
	} else if (planet.atmosphere === 10) {
		mod = -4;
	} else if (planet.atmosphere === 11) {
		mod = -4;
	}
	
	if (planet.temperature === 10 || planet.temperature === 11) {
		mod = mod + -2;
	} else if (planet.temperature > 11) {
		mod = mod + -4;
	}

	var r =  roll() + roll() + mod;
	return r;
}

//Table 12
var geosphereString = function( r ) {
	if (r <= 2 ) {
		return "Desert World";
	}

	switch (r) {
	case 3:
	case 4:
		return "Arid World";
	case 5:
		return "Wet World";
	case 6:
	case 7:
	case 8:
	case 9:
		return "Earth-like World";
	case 10:
		return "Island World";
	case 11:
		return "Ocean World";
	case 12:
		return "Water World";
	};
};

//Table 13
var population = function( planet ) {
	var mod = 0
	if (planet.size <= 3){
		mod = -4;
	}
	var r =  roll() + roll() + mod;
	return r;
};

var populationString = function( r ) {
	if (r <= 2) {
		return "Uninhabited";
	}

	switch (r) {
	case 3:
		return "Abandoned Outpost";
	case 4:
		return "Outpost";
	case 5:
		return "A few hundred";
	case 6:
	case 7:
		return "A few thousand";
	case 8:
	case 9:
		return "Tens of thousands";
	case 10:
	case 11:
		return "Hundreds of thousands";
	case 12:
		return "Milions";
	};
};

//Table 14
var spaceport = function( planet ) {
	var mod = 0
	if (planet.population <= 3){
		mod = -8;
	} else if (planet.population <= 5){
		mod = -6;
	} else if (planet.population <= 7){
		mod = -4;
	} else if (planet.population <= 9){
		mod = 0;
	} else if (planet.population <= 11){
		mod = +1;
	} else {
		mod = +4;
	}
	var r =  roll() + roll() + mod;
	return r;
};
var spaceportString = function( r ) {
	if (r <= 3) {
		return "Primitive Facilities (service -3)";
	}

	switch (r) {
	case 4:
	case 5:
		return "Simple space port (service -3)";
	case 6:
	case 7:
	case 8:
		return "Ordinary space port";
	case 9:
	case 10:
		return "Busy space port";
	case 11:
		return "Trade clouster (service +1)";
	};
	return "Metropolis (service +1)";
};

//Table 15
var ruin = function() {
	var type = roll();
	switch (type) {
		<!-- case 1: return "Ruin: Portal Builder ruins"; -->
		<!-- case 2: return "Ruin: First-come ruins"; -->
		<!-- case 3: return "Ruin: Earlier colonization"; -->
		<!-- case 4: return "Ruin: Abandoned city"; -->
		<!-- case 5: return "Ruin: Crashed ship"; -->
		<!-- case 6: return "Ruin: Unknown ruins"; -->
		case 1: return "Portal Builder ruins";
		case 2: return "First-come ruins";
		case 3: return "Earlier colonization";
		case 4: return "Abandoned city";
		case 5: return "Crashed ship";
		case 6: return "Unknown ruins";
	};
}

var weather = function() {
	var type = roll();
	switch (type) {
		<!-- case 1: return "Weather: Titanic storms"; -->
		<!-- case 2: return "Weather: Flooding"; -->
		<!-- case 3: return "Weather: Extreme Rain"; -->
		<!-- case 4: return "Weather: Firestorms"; -->
		<!-- case 5: return "Weather: Volcanic eruptions"; -->
		<!-- case 6: return "Weather: High seismic activity"; -->
		case 1: return "Titanic storms";
		case 2: return "Flooding";
		case 3: return "Extreme Rain";
		case 4: return "Firestorms";
		case 5: return "Volcanic eruptions";
		case 6: return "High seismic activity";
	};
}

var inhabitants = function() {
	var type = roll();
	switch (type) {
		<!-- case 1: return "Inhabitants: Cult"; -->
		<!-- case 2: return "Inhabitants: Primitice first-comes"; -->
		<!-- case 3: return "Inhabitants: Colonists"; -->
		<!-- case 4: return "Inhabitants: Rebels"; -->
		<!-- case 5: return "Inhabitants: Soldiers"; -->
		<!-- case 6: return "Inhabitants: Scientists"; -->
		case 1: return "Cult";
		case 2: return "Primitice first-comes";
		case 3: return "Colonists";
		case 4: return "Rebels";
		case 5: return "Soldiers";
		case 6: return "Scientists";
	};
}

var threats = function() {
	var type = roll();
	switch (type) {
		<!-- case 1: return "Threat: Corsairs"; -->
		<!-- case 2: return "Threat: Rebellious Mercenaries"; -->
		<!-- case 3: return "Threat: Factionary clashes"; -->
		<!-- case 4: return "Threat: Lawlessness"; -->
		<!-- case 5: return "Threat: The Dark Between the Stars"; -->
		<!-- case 6: return "Threat: Dangerous creatures"; -->
		case 1: return "Corsairs";
		case 2: return "Rebellious Mercenaries";
		case 3: return "Factionary clashes";
		case 4: return "Lawlessness";
		case 5: return "The Dark Between the Stars";
		case 6: return "Dangerous creatures";
	};
}

var politics = function() {
	var type = roll();
	switch (type) {
		<!-- case 1: return "Politics: Dictatorship"; -->
		<!-- case 2: return "Politics: Emirate"; -->
		<!-- case 3: return "Politics: Police state"; -->
		<!-- case 4: return "Politics: Popular rule"; -->
		<!-- case 5: return "Politics: Iconocracy"; -->
		<!-- case 6: return "Politics: Extreme patriarchy/matriarchy"; -->
		case 1: return "Dictatorship";
		case 2: return "Emirate";
		case 3: return "Police state";
		case 4: return "Popular rule";
		case 5: return "Iconocracy";
		case 6: return "Extreme patriarchy/matriarchy";
	};
}

var events = function() {
	var type = roll();
	switch (type) {
		<!-- case 1: return "Event: War"; -->
		<!-- case 2: return "Event: Natural Disaster"; -->
		<!-- case 3: return "Event: Epidemic"; -->
		<!-- case 4: return "Event: Occupation"; -->
		<!-- case 5: return "Event: Pilgrimage"; -->
		<!-- case 6: return "Event: Apocalypse"; -->
		case 1: return "War";
		case 2: return "Natural Disaster";
		case 3: return "Epidemic";
		case 4: return "Occupation";
		case 5: return "Pilgrimage";
		case 6: return "Apocalypse";
	};
}


var randomHook = function() {
	var type = roll();
	switch (type) {
		case 1: return ruin();
		case 2: return weather();
		case 3: return inhabitants();
		case 4: return threats();
		case 5: return politics();
		case 6: return events();
	};
}

var hooks = function() {
	var numHooks = roll();
	var c = 0;
	var h = [];
	for (c = 0 ; c < numHooks; c++) {
		h.push(randomHook());
	}
	return h.join("; ");
};


var uniqueFactions = function( numFacs ) {
	var facs = new Set();
	var f = [];
	var c = 0;
	while (c < numFacs) {
		var cf = randomFaction();
		if (!facs.has(cf)){
			facs.add(cf);
			f.push(cf);
			c++;
		}
	}
	return f;
}



//Table 16
var factions = function() {
	var numFac = roll();
	var facs = [];		
	switch(numFac) {
	case 1: 
		return "Dominant : " + randomFaction();
	case 2: 
		facs = uniqueFactions(2);		
		return "Coexisting : " + facs[0] + " and " + facs[1];
	case 3: 
		facs = uniqueFactions(2);		
		return "Competing (evenly matched) : " + facs[0] + " and " + facs[1];
	case 4: 
		facs = uniqueFactions(2);		
		return "Dominant : " + facs[0] + "; Weak: " + facs[1];
	case 5: 
		facs = uniqueFactions(3);		
		return "Competing (evenly matched): " + facs[0] + " and " + facs[1] + " and " + facs[2];
	case 6: 
		var n = roll();
		if (n === 1) {
			n = n + roll();
		}
		var facs = uniqueFactions(n);
		var f = []
		var c;
		for (c = 0; c < facs.length; c++) {
			f.push(facs[c] + "(" + roll() + ")") ;
		}
		return "Competing (with relative strength score): " + f.join("; " ) ;
	}
}


//Table 17
var randomFaction = function(){
	var r = roll() + roll();
	switch (r) {
	case 2 : return "Syndicate";
	case 3 : return "Legion";
	case 4 : return "Free League";
	case 5 : return "Zenithian Hegemony";
	case 6 : 
	case 7 : return "Consortium";
	case 8 : return "Church of the Icons";
	case 9 : return "Ahlam's Temple";
	case 10 : return "Nomad Federation";
	case 11 : return "Order of the Pariah";
	case 12 : return "Draconites";
	}
}

