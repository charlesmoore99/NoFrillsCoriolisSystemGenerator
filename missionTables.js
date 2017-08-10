var seed = 1;

function randomDave() {
	var x = Math.sin(seed++) * 10000;
	return x - Math.floor(x);
}

var roll = function() {
	return Math.floor((randomDave() * 100000) % 6 + 1);
};

var complication = function(c, d){
	var that = this;
	
	this.complication = c;
	this.complicationDescription = d;

	this.print = function() {
		debug(String.format(cellTemplate, "Complication", that.complication));
		debug(String.format(cellTemplate, "Complication Description", that.complicationDescription));
	};
};

var mission = function(t, m, d, c, b, e) {
	var that = this;

	this.target = t;
	this.missionType = m;
	this.destination = d;
	this.numComplications = c;
	this.baseReward = b;
	this.extraReward = e;

	this.employer = "";
	this.reward = "";

	this.mission = "";
	this.description = "";

	this.location = "";
	this.locationDescription = "";

	this.complications = [];
	this.addComplication = function(comp) {
		that.complications.push(comp);
	};
	
	this.print = function() {
		debug(String.format(headerTemplate, "Mission: " + that.target));
		debug(String.format(cellTemplate, "Type", that.missionType));
		debug(String.format(cellTemplate, "Destination", that.destination));
		debug(String.format(cellTemplate, "Base Reward", that.baseReward));
		debug(String.format(cellTemplate, "Extra Reward", that.extraReward));
		debug(String.format(cellTemplate, "Employer", that.employer));
		debug(String.format(cellTemplate, "Reward", that.reward));
		debug(String.format(cellTemplate, "Mission", that.mission));
		debug(String.format(cellTemplate, "Mission Description", that.description));
		debug(String.format(cellTemplate, "Location", that.location));
		debug(String.format(cellTemplate, "location Description", that.locationDescription));
//		debug(String.format(cellTemplate, "# Complications", that.numComplications));
		$.each(that.complications, function(c,i){
			debug(String.format(cellTemplate, "Complication", this.complication));
			debug(String.format(cellTemplate, "Complication Description", this.complicationDescription));			
		});
	};
}

// Table 18
var missionType = function(target) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
	case "14":
	case "15":
		return new mission(target, "Routine", "Within System", 0, roll(), 0);
	case "16":
	case "21":
	case "22":
	case "23":
		return new mission(target, "Routine", "Within System", 1, roll() + 2, 0);
	case "24":
	case "25":
		return new mission(target, "Easy", "Within System", 0, roll() + roll(), 0);
	case "26":
	case "31":
		return new mission(target, "Easy", "Within System", 1, roll() + roll(), 1);
	case "32":
	case "33":
		return new mission(target, "Easy", "Within System", 1, roll() + roll() + 2, 1);
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
		return new mission(target, "Normal", "Within System", 1, roll() + roll()
				+ roll(), 0);
	case "44":
	case "45":
		return new mission(target, "Normal", "Nearby System", 1, roll() + roll()
				+ roll(), 0);
	case "46":
	case "51":
		return new mission(target, "Normal", "Nearby System", 1, roll() + roll()
				+ roll(), 1);
	case "52":
	case "53":
		return new mission(target, "Normal", "Nearby System", 1, roll() + roll()
				+ roll() + 2, 1);
	case "54":
		return new mission(target, "Normal", "Faraway System", 1, roll() + roll()
				+ roll() + 4, 0);
	case "55":
		return new mission(target, "Normal", "Faraway System", 1, roll() + roll()
				+ roll() + 4, 1);
	case "56":
	case "61":
		return new mission(target, "Difficult", "Within System", 2, roll() + roll()
				+ roll() + roll(), 1);
	case "62":
	case "63":
		return new mission(target, "Difficult", "Nearby System", 2, roll() + roll()
				+ roll() + roll() + 2, 0);
	case "64":
		return new mission(target, "Difficult", "Nearby System", 2, roll() + roll()
				+ roll() + roll() + 2, 1);
	case "65":
		return new mission(target, "Difficult", "Faraway System", 2, roll() + roll()
				+ roll() + roll() + roll(), 1);
	case "66":
		return new mission(target, "Difficult", "Faraway System", 3, roll() + roll()
				+ roll() + roll() + roll() + 4, 2);
	}
	;
}

// Table 19
var employerAgents = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.employer = "Judicator";
		break;
	case "14":
	case "15":
	case "16":
		m.employer = "Guard";
		break;
	case "21":
	case "22":
	case "23":
		m.employer = "Intelligence Agency";
		break;
	case "24":
	case "25":
	case "26":
	case "31":
	case "32":
	case "33":
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
		m.employer = "Patron";
		break;
	case "44":
	case "45":
	case "46":
		m.employer = "Factionary";
		break;
	case "51":
	case "52":
	case "53":
		m.employer = "Merchant";
		break;
	case "54":
	case "55":
	case "56":
		m.employer = "Diplomat";
		break;
	case "61":
	case "62":
	case "63":
		m.employer = "Military";
		break;
	case "64":
	case "65":
	case "66":
		m.employer = "Criminal";
		break;
	}
};

// Table 20
var rewardsAgents = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.reward = "New Contract";
		break;
	case "14":
	case "15":
	case "16":
		m.reward = "Favor";
		break;
	case "21":
	case "22":
	case "23":
	case "24":
	case "25":
	case "26":
	case "31":
	case "32":
	case "33":
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
	case "44":
	case "45":
	case "46":
		m.reward = "Birr";
		break;
	case "51":
	case "52":
	case "53":
	case "54":
	case "55":
	case "56":
		m.reward = "Gear";
		break;
	case "61":
	case "62":
	case "63":
		m.reward = "Ship Module";
		break;
	case "64":
	case "65":
	case "66":
		m.reward = "License";
		break;
	}
};

// Table 21
var missionAgents = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.mission = "Infiltration";
		m.description = "Undercover infiltration of a base, smaller group or outpost to obtain data, identify leaders or investigate the organization";
		break;
	case "14":
	case "15":
	case "16":
		m.mission = "Information gathering";
		m.description = "Gather information from tags, library databases, networks, old scrolls or a living person.";
		break;
	case "21":
	case "22":
	case "23":
	case "24":
	case "25":
	case "26":
		m.mission = "Espionage";
		m.description = "Classic espionage with secret meetings, shadowing, burglaries and undercover work.";
		break;
	case "31":
	case "32":
	case "33":
		m.mission = "Kidnapping";
		m.description = "Kidnap someone and deliver the person to the employer.";
		break;
	case "34":
	case "35":
	case "36":
		m.mission = "Couriers";
		m.description = "Make sure sensitive information, resources or goods are delivered safely from the employer to the receiver.";
		break;
	case "41":
	case "42":
	case "43":
		m.mission = "Protection";
		m.description = "Make sure a resource (information, person, object, ship) is safe from an attack or for a specified amount of time.";
		break;
	case "44":
	case "45":
	case "46":
		m.mission = "Manipulation";
		m.description = "Trick a person or organization into believing false information, or make them perform a certain action, or set a chain of events in motion.";
		break;
	case "51":
	case "52":
	case "53":
		m.mission = "Artifact collection";
		m.description = "Acquire an artifact, usually from an unknown, underground location.";
		break;
	case "54":
	case "55":
	case "56":
		m.mission = "Rescue operation";
		m.description = "Rescue a resource (usually a person or group) that is held captive or hostage. It could also be an object or a wrecked spaceship.";
		break;
	case "61":
	case "62":
	case "63":
		m.mission = "Surveillance";
		m.description = "Observe a resource (usually a person) for a specified amount of time.";
		break;
	case "64":
	case "65":
	case "66":
		m.mission = "Assassination";
		m.description = "Murder someone, sometimes so that it looks like an accident. Collateral damage is permitted.";
		break;
	}
};


//Table 22
var locationAgents = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.location = "Underground hideout";
		m.locationDescription = "A bunker, catacombs or caves";
		break;
	case "14":
	case "15":
	case "16":
		m.location = "Hostile forest/jungles/desert";
		m.locationDescription = "Inhospitable planet side wilderness. Usually far from cities or settlements.";
		break;
	case "21":
	case "22":
	case "23":
	case "24":
	case "25":
	case "26":
		m.location = "Bazaar";
		m.locationDescription = "A bazaar or market in a city or settlement";
		break;
	case "31":
	case "32":
	case "33":
		m.location = "Spaceport";
		m.locationDescription = "Spaceport on a space station or planet";
		break;
	case "34":
	case "35":
	case "36":
		m.location = "Asteroid/Moon";
		m.locationDescription = "The surface of an asteroid or a smaller moon. Vacuum or dangerous atmosphere";
		break;
	case "41":
	case "42":
	case "43":
		m.location = "Space station";
		m.locationDescription = "On a small space station, anything from an oxygen oasis to a trade or service station";
		break;
	case "44":
	case "45":
	case "46":
		m.location = "Ruins";
		m.locationDescription = "Firstcome or Portal Builder ruins ";
		break;
	case "51":
	case "52":
	case "53":
		m.location = "Colony";
		m.locationDescription = "A small colony, usually no bigger than a small, sparsely populated village. Far from other settlements.";
		break;
	case "54":
	case "55":
	case "56":
		m.location = "Portal station";
		m.locationDescription = "A portal station next to a sun";
		break;
	case "61":
	case "62":
	case "63":
		m.location = "Spaceship";
		m.locationDescription = "Onboard a spaceship during voyage or docking";
		break;
	case "64":
	case "65":
	case "66":
		m.location = "Outpost";
		m.locationDescription = "A small outpost, usually planet side. An outpost is commonly just a single building with a specific function and only a few inhabitants. For example sensor station, dam control station, courier post or someother communications station";
		break;
	}
};

//Table 23
var complicationAgents = function() {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		return new complication( "Third party","Another patron or a person with a similar background as the employer is after the same thing. Could offer the group higher payment or that they will use the information/resource for a different purpose when the mission is completed.");
	case "14":
	case "15":
	case "16":
	case "21":
	case "22":
	case "23":
		return new complication( "Accompanying employer", "The employer wants to come along for the mission, or send an observer or agent along.");
		break;
	case "24":
	case "25":
	case "26":
	case "31":
	case "32":
	case "33":
		return new complication( "Double agent", "A person the PCs encounter is a double agent for another organization with a conflicting agenda.");
		break;
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
		return new complication( "Bad intel", "A piece of information about the mission turns out to be false, either intentionally or by mistake.");
		break;
	case "44":
	case "45":
	case "46":
	case "51":
	case "52":
	case "53":
		return new complication( "Unexpected Reinforcements", "The group's opponent receive backup in the form of reinforcements, more advanced computer systems or some other form of extra assistance.");
		break;
	case "54":
	case "55":
	case "56":
	case "61":
	case "62":
	case "63":
		return new complication( "Scapegoats", "The employer wants the mission to go badly and for the PCs to take the fall for something.");
		break;
	case "64":
	case "65":
	case "66":
		return new complication( "Intelligence agency involvement","An intelligence agency, possibly factionary, with many resources has the same or opposite goals as the PCs");
		break;
	}
};





// Table 24
var employerMercenaries = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.employer = "Fleet captain";
		break;
	case "14":
	case "15":
	case "16":
		m.employer = "Military officer";
		break;
	case "21":
	case "22":
	case "23":
		m.employer = "Legion company";
		break;
	case "24":
	case "25":
	case "26":
	case "31":
	case "32":
	case "33":
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
		m.employer = "Patron";
		break;
	case "44":
	case "45":
	case "46":
		m.employer = "Factionary";
		break;
	case "51":
	case "52":
	case "53":
		m.employer = "Arms dealer";
		break;
	case "54":
	case "55":
	case "56":
		m.employer = "Mercenary";
		break;
	case "61":
	case "62":
	case "63":
		m.employer = "War verteran";
		break;
	case "64":
	case "65":
	case "66":
		m.employer = "Smuggler";
		break;
	}
};

// Table 25
var rewardsMercenaries = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
	case "14":
	case "15":
	case "16":
		m.reward = "Faction Protection";
		break;
	case "21":
	case "22":
	case "23":
		m.reward = "Ship module";
		break;
	case "24":
	case "25":
	case "26":
	case "31":
	case "32":
	case "33":
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
	case "44":
	case "45":
	case "46":
		m.reward = "Birr";
		break;
	case "51":
	case "52":
	case "53":
	case "54":
	case "55":
	case "56":
		m.reward = "Gear";
		break;
	case "61":
	case "62":
	case "63":
		m.reward = "Cybernetics/Bionics";
		break;
	case "64":
	case "65":
	case "66":
		m.reward = "Medal of Honor";
		break;
	}
};

// Table 26
var missionMercenaries = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.mission = "Reconnaissance";
		m.description = "Scout out an area, a location or the surroundings of a building. Remain unnoticed and report back to the employer";
		break;
	case "14":
	case "15":
	case "16":
		m.mission = "Assault";
		m.description = "Attack and hold a location. Prisoners may be taken.";
		break;
	case "21":
	case "22":
	case "23":
	case "24":
	case "25":
	case "26":
		m.mission = "Defend place or area ";
		m.description = "Defend a location or patrol an area; prevent the enemy from seizing it.";
		break;
	case "31":
	case "32":
	case "33":
		m.mission = "Reinforce location";
		m.description = "Support or reinforce a position under attack, repel the enemy.";
		break;
	case "34":
	case "35":
	case "36":
		m.mission = "Seek and destroy";
		m.description = "Find a person, group or location and destroy it. Could be civilians, enemy combatants or vehicles/spaceships.";
		break;
	case "41":
	case "42":
	case "43":
		m.mission = "Protect resource";
		m.description = "Protect a resource. It could be information, a person, an object or a ship. Protect it from an attack or guard it for a specified amount of time.";
		break;
	case "44":
	case "45":
	case "46":
		m.mission = "Locate resource";
		m.description = "Locate a person, group or object and either retrieve it or notify the employer of its location.";
		break;
	case "51":
	case "52":
	case "53":
		m.mission = "Rescue operation";
		m.description = "Rescue a group, squadron or spaceship from an attack, imprisonment, or some other peril";
		break;
	case "54":
	case "55":
	case "56":
		m.mission = "Raid";
		m.description = "Plan and execute a raid on a person, group, convoy or vehicle. The goal is usually to destroy or delay the target.";
		break;
	case "61":
	case "62":
	case "63":
		m.mission = "Investigation";
		m.description = "Locate something important, for example nuclear warheads, antimatter bombs or bionic weapons. The PCs could be accompanied by an agent, a weapons expert or some other officer.";
		break;
	case "64":
	case "65":
	case "66":
		m.mission = "Incursion";
		m.description = "Go behind enemy lines or breach a fortress or garrison to secure a resource that could be a person, information or an object.";
		break;
	}
};


//Table 27
var locationMercenaries = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.location = "Underground bunker";
		m.locationDescription = "A bunker, catacombs or caves";
		break;
	case "14":
	case "15":
	case "16":
		m.location = "Hostile forest/jungles/desert";
		m.locationDescription = "Inhospitable planet side wilderness. Usually far from cities or settlements.";
		break;
	case "21":
	case "22":
	case "23":
	case "24":
	case "25":
	case "26":
		m.location = "Trenches";
		m.locationDescription = "A trench on a deadlocked frontline. Mine fields, underground tunnels and other soldiers in despair.";
		break;
	case "31":
	case "32":
	case "33":
		m.location = "Spaceport";
		m.locationDescription = "Spaceport on a space station or planet";
		break;
	case "34":
	case "35":
	case "36":
		m.location = "Asteroid/Moon";
		m.locationDescription = "The surface of an asteroid or a smaller moon. Vacuum or dangerous atmosphere";
		break;
	case "41":
	case "42":
	case "43":
		m.location = "Combat station";
		m.locationDescription = "A fortified space station with weapon systems, or some other battle installation such as a larger garrison, hangars or docks.";
		break;
	case "44":
	case "45":
	case "46":
		m.location = "War zone ";
		m.locationDescription = "A larger area where open war is raging. Could be a burned-out city or a wilderness full of fighting combatants.";
		break;
	case "51":
	case "52":
	case "53":
		m.location = "Fortification";
		m.locationDescription = "A fortification could be a wall, modern fort, castle, artillery position, rocket silo or mine field.";
		break;
	case "54":
	case "55":
	case "56":
		m.location = "Space station";
		m.locationDescription = "On a small space station, anything from an oxygen oasis to a trade or service station";
		break;
	case "61":
	case "62":
	case "63":
		m.location = "Spaceship";
		m.locationDescription = "Onboard a spaceship during voyage or docking";
		break;
	case "64":
	case "65":
	case "66":
		m.location = "Outpost";
		m.locationDescription = "A small outpost, usually planet side. An outpost is commonly just a single building with a specific function and only a few inhabitants. For example sensor station, dam control station, courier post or someother communications station";
		break;
	}
};

//Table 28
var complicationMercenaries = function() {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
	case "14":
	case "15":
	case "16":
		return new complication( "Bad intel", "A piece of information about the mission turns out to be false, either intentionally or by mistake.");
	case "21":
	case "22":
	case "23":
		return new complication( "Super cargo", "Someone they must protect during the mission accompanies the group. It could be an observer, a civilian or an agent.");
	case "24":
	case "25":
	case "26":
	case "31":
	case "32":
	case "33":
		return new complication( "Gear problem", "The group has gear problems. It could be anything from weapons to vehicles or spaceships.");
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
		return new complication( "Underestimated resistance", "The resistance or the attackers are stronger than expected.");
		break;
	case "44":
	case "45":
	case "46":
	case "51":
	case "52":
	case "53":
		return new complication( "Captured employer", "The group's employer is captured during the mission. Fitting if the employer is an officer in the group's company.");
		break;
	case "54":
	case "55":
	case "56":
	case "61":
	case "62":
	case "63":
		return new complication( "New offensive", "A new offensive has just been initiated when the group is about to carry out their mission, either by the enemies or by the PCs' side in the conflict");
		break;
	case "64":
	case "65":
	case "66":
		return new complication( "Bombardments","The area where the mission takes place is being bombed. It could be air raids, torpedo attacks or rebel forces detonating mines and homemade explosives.");
		break;
	}
};


//Table 29
var employerExplorers = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.employer = "Archaeologist";
		break;
	case "14":
	case "15":
	case "16":
		m.employer = "Scientist";
		break;
	case "21":
	case "22":
	case "23":
		m.employer = "Artifact merchant";
		break;
	case "24":
	case "25":
	case "26":
	case "31":
	case "32":
	case "33":
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
		m.employer = "Patron";
		break;
	case "44":
	case "45":
	case "46":
		m.employer = "Factionary";
		break;
	case "51":
	case "52":
	case "53":
		m.employer = "Correspondent";
		break;
	case "54":
	case "55":
	case "56":
		m.employer = "Prospector";
		break;
	case "61":
	case "62":
	case "63":
		m.employer = "Wealthy collector";
		break;
	case "64":
	case "65":
	case "66":
		m.employer = "Criminal";
		break;
	}
};

// Table 30
var rewardsExplorers = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.reward = "Expedition of their own";
		break;
	case "14":
	case "15":
	case "16":
		m.reward = "Ship module";
		break;
	case "21":
	case "22":
	case "23":
		m.reward = "Vehicle";
		break;
	case "24":
	case "25":
	case "26":
	case "31":
	case "32":
	case "33":
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
	case "44":
	case "45":
	case "46":
		m.reward = "New knowledge";
		break;
	case "51":
	case "52":
	case "53":
	case "54":
	case "55":
	case "56":
		m.reward = "Birr";
		break;
	case "61":
	case "62":
	case "63":
		m.reward = "Gear";
		break;
	case "64":
	case "65":
	case "66":
		m.reward = "Artifact";
		break;
	}
};

// Table 31
var missionExplorers = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.mission = "Excavation";
		m.description = "Perform an excavation, start a dig site or help in an already started excavation.";
		break;
	case "14":
	case "15":
	case "16":
		m.mission = "Collection";
		m.description = "Collect smaller archaeological finds, artifacts, information, scrolls or something similar. Could be from a dig site or some other location.";
		break;
	case "21":
	case "22":
	case "23":
	case "24":
	case "25":
	case "26":
		m.mission = "Survey";
		m.description = "Map a location or an area for the employer. Report back with sensor maps and other collected data.";
		break;
	case "31":
	case "32":
	case "33":
		m.mission = "Secure outpost ";
		m.description = "Protect a smaller colony such as a dig site, Bulletin station, sensor station or radio beacon from an attack or from nature's wrath for a specified amount of time";
		break;
	case "34":
	case "35":
	case "36":
		m.mission = "Assist colony ";
		m.description = "Assist a smaller colony with gear, information or expert knowledge about exo use, medicurgy, construction or something else.";
		break;
	case "41":
	case "42":
	case "43":
		m.mission = "Artifact hunt ";
		m.description = "Find an artifact. The location and sometimes the function are unknown. Clues must be tracked down before departure";
		break;
	case "44":
	case "45":
	case "46":
		m.mission = "Investigation";
		m.description = "Locate something important, for example lost ruins, a dig site or a surveyed location. The PCs could be accompanied by an external expert such as an archaeologist, correspondent or diplomat.";
		break;
	case "51":
	case "52":
	case "53":
		m.mission = "Find information ";
		m.description = "Find a specific piece of information for the employer. Sometimes, the group does not know the intended use of the information.";
		break;
	case "54":
	case "55":
	case "56":
		m.mission = "Prospecting";
		m.description = "Command a prospecting expedition or secure a claim somewhere. It could be mining, asteroid harvesting, logging or gas or dust trawling.";
		break;
	case "61":
	case "62":
	case "63":
		m.mission = "Rescue expedition ";
		m.description = "Rescue a group, colony, archaeological expedition or correspondents from an attack or some other peril. Sometimes, the group does not know what has happened to the victims.";
		break;
	case "64":
	case "65":
	case "66":
		m.mission = "Big game hunt";
		m.description = "Command or join in an expedition hunting a monster or some other creature.";
		break;
	}
};


//Table 32
var locationExplorers = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.location = "Underground catacombs";
		m.locationDescription = "Catacombs, tombs or underground ruins.";
		break;
	case "14":
	case "15":
	case "16":
		m.location = "Hostile forest/jungles/desert";
		m.locationDescription = "Inhospitable planet side wilderness. Usually far from cities or settlements.";
		break;
	case "21":
	case "22":
	case "23":
	case "24":
	case "25":
	case "26":
		m.location = "Library";
		m.locationDescription = "A library or database hub. Could contain anything from scrolls to memory tags and djinn memories";
		break;
	case "31":
	case "32":
	case "33":
		m.location = "Moon";
		m.locationDescription = "The surface of a moon. Usually vacuum or dangerous atmosphere. Planet-like moons count as wilderness (above).";
		break;
	case "34":
	case "35":
	case "36":
		m.location = "Asteroid belt";
		m.locationDescription = "An asteroid belt or a debris or gas cloud.";
		break;
	case "41":
	case "42":
	case "43":
		m.location = "Ruins";
		m.locationDescription = "Ruins, either Firstcome, unknown or created by a conflict.";
		break;
	case "44":
	case "45":
	case "46":
		m.location = "Portal Builder remains";
		m.locationDescription = "Portal Builder remains. Usually mystical but sometimes intact or functioning.";
		break;
	case "51":
	case "52":
	case "53":
		m.location = "Lost colony";
		m.locationDescription = "A colony that lost contact with the Horizon several segments or cycles ago.";
		break;
	case "54":
	case "55":
	case "56":
		m.location = "Space station";
		m.locationDescription = "On a small space station, anything from an oxygen oasis to a trade or service station. Could be abandoned or destroyed.";
		break;
	case "61":
	case "62":
	case "63":
		m.location = "Spaceship";
		m.locationDescription = "Onboard a spaceship during voyage or docking";
		break;
	case "64":
	case "65":
	case "66":
		m.location = "One of the wonders of the Horizon";
		m.locationDescription = "A large size artifact, like artificial moons or micro suns. The GM is free to decide its exact nature.";
		break;
	}
};

//Table 33
var complicationExplorers = function() {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
	case "14":
	case "15":
	case "16":
		return new complication( "Bad intel", "A piece of information about the mission turns out to be false, either intentionally or by mistake.");
	case "21":
	case "22":
	case "23":
	case "24":
	case "25":
	case "26":
		return new complication( "Nature's wrath", "The expedition is subjected to nature's wrath. It could be anything from ion storms, bad weather and meteorite showers to landslides or flash floods.");
	case "31":
	case "32":
	case "33":
		return new complication( "Corsairs", "Corsairs attack the expedition.");
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
		return new complication( "Rival expedition", "A competing party has the same goal as the expedition and tries to get there first or stop the PCs. They have roughly the same gear as the PCs.");
		break;
	case "44":
	case "45":
	case "46":
	case "51":
	case "52":
	case "53":
		return new complication( "Blockade", "The destination is under blockade. It could be anything from tolls or anti-smuggling measures to factionary war.");
		break;
	case "54":
	case "55":
	case "56":
	case "61":
	case "62":
	case "63":
		return new complication( "Quarantine", "The destination is placed under quarantine. It could be because of a contagion, a mind meme, dangerous technology or something else.");
		break;
	case "64":
	case "65":
	case "66":
		return new complication( "Intelligence agency","The expedition's goals interfere with the work of an intelligence agency. Intelligence agencies usually have a lot of resources and few scruples.");
		break;
	}
};




































//Table 38
var employerFreeTraders = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.employer = "Outpost Rep";
		break;
	case "14":
	case "15":
	case "16":
		m.employer = "Merchant";
		break;
	case "21":
	case "22":
	case "23":
		m.employer = "Colonist";
		break;
	case "24":
	case "25":
	case "26":
	case "31":
	case "32":
	case "33":
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
		m.employer = "Patron";
		break;
	case "44":
	case "45":
	case "46":
		m.employer = "Trading house";
		break;
	case "51":
	case "52":
	case "53":
		m.employer = "Military officer";
		break;
	case "54":
	case "55":
	case "56":
		m.employer = "Criminal";
		break;
	case "61":
	case "62":
	case "63":
		m.employer = "Factionary";
		break;
	case "64":
	case "65":
	case "66":
		m.employer = "Privileged";
		break;
	}
};

// Table 39
var rewardsFreeTraders = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.reward = "Discount on new cargo";
		break;
	case "14":
	case "15":
	case "16":
		m.reward = "New contract";
		break;
	case "21":
	case "22":
	case "23":
	case "24":
	case "25":
	case "26":
	case "31":
	case "32":
	case "33":
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
	case "44":
	case "45":
	case "46":
		m.reward = "Birr";
		break;
	case "51":
	case "52":
	case "53":
		m.reward = "Ship module/feature";
		break;
	case "54":
	case "55":
	case "56":
		m.reward = "Faction contact";
		break;
	case "61":
	case "62":
	case "63":
		m.reward = "Extra debt cancellation";
		break;
	case "64":
	case "65":
	case "66":
		m.reward = "Artifact";
		break;
	}
};

// Table 40
var missionFreeTraders = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
		m.mission = "Ore";
		m.description = "Bauxite (aluminum), lead glance, gold-quartz, cassiterite (tin), malachite (copper), magnetite (iron), platinum-bearing sand, sphalerite (zinc)";
		break;
	case "13":
		m.mission = "Minerals";
		m.description = "Pure minerals, salt";
		break;
	case "14":
		m.mission = "Metals";
		m.description = "Bars of metal";
		break;
	case "15":
	case "16":
		m.mission = "Nobel gasses";
		m.description = "Argon, helium, neon, krypton, radon, xenon";
		break;
	case "21":
		m.mission = "Timber";
		m.description = "Pine, jacaranda, mahogany, oak";
		break;
	case "22":
		m.mission = "Ice";
		m.description = "Water ice or rare frozen solution";
		break;
	case "23":
		m.mission = "Chemicals";
		m.description = "Industrial chemicals";
		break;
	case "24":
		m.mission = "Fertilizer";
		m.description = "Natural (droppings) or synthetic";
		break;
	case "25":
	case "26":
		m.mission = "Textiles";
		m.description = "Fabrics (wool, velvet, silk) or clothing";
		break;
	case "31":
	case "32":
		m.mission = "Foodstuffs";
		m.description = "Base foods such as chickpeas, soybeans and other legumes, grains (corn, barley, rice, wheat) or refined versions thereof (such as couscous) or vegetables such as aubergine, spinach, zucchini, cucumber or tomato";
		break;
	case "33":
		m.mission = "Spices";
		m.description = "Jasmine, cinnamon, cloves, cumin, mint, basil, oregano, rose water, saffron";
		break;
	case "34":
		m.mission = "Delicacies";
		m.description = "Apricots, bananas, baklava, dates, coconut, almonds, marzipan, nuts (pecans, pistachios, walnuts), raisins, oysters, caviar, testicles, ants";
		break;
	case "35":
	case "36":
		m.mission = "Mechanical goods";
		m.description = "Vaccines, medicines, m- and t-doses, surgical gear for bionics or cybernetics";
		break;
	case "41":
		m.mission = "Religious paraphernalia";
		m.description = "Altars, prayer towers, dismantled chapels, icons, reliquaries, religious art, talismans, relics, scrolls";
		break;
	case "42":
	case "43":
		m.mission = "Spare parts";
		m.description = "Different makes and types, for exos, vehicles, cybernetics, medical technology, prospecting gear, drones, weapons, armor, spaceships or colony life support systems";
		break;
	case "44":
	case "45":
		m.mission = "Ship parts";
		m.description = "Modules, features, parts for/from dismantled ships";
		break;
	case "46":
		m.mission = "Exos";
		m.description = "Exo shells, loader exos, diver exos, carrier exos etc. Stacked effective use of cargo space.";
		break;
	case "51":
		m.mission = "Drones";
		m.description = "Parts or ready-to-use automatic systems";
		break;
	case "52":
		m.mission = "Vehicles";
		m.description = "Disassembled";
		break;
	case "53":
	case "54":
		m.mission = "Weapons";
		m.description = "Choose from the Gear chapter";
		break;
	case "55":
	case "56":
		m.mission = "Body armor";
		m.description = "Choose from the Gear chapter";
		break;
	case "61":
	case "62":
		m.mission = "Surival gear";
		m.description = "Basic gear for survival or for a specific environment";
		break;
	case "63":
		m.mission = "Animal feed";
		m.description = "Alfalfa, tailored animal or livestock feed, synthetic fodder";
		break;
	case "64":
	case "65":
		m.mission = "Livestock/animals";
		m.description = "Work animals or pets, usually alive if loaded in a primitive environment or in stasis if from ordinary or advanced environments";
		break;
	case "66":
		m.mission = "Semi-intelligences";
		m.description = "Ekilibri or nekatra are the most common, the former as plantation workers or pets, the latter as guards, soldiers or gladiators";
		break;
	}
};


//Table 41
var locationFreeTraders = function(m) {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		m.location = "Coordinates";
		m.locationDescription = "Coordinates for an area or secret base.";
		break;
	case "14":
	case "15":
	case "16":
		m.location = "Hostile forest/jungles/desert";
		m.locationDescription = "Inhospitable planet side wilderness. Usually far from cities or settlements.";
		break;
	case "21":
	case "22":
	case "23":
	case "24":
	case "25":
	case "26":
		m.location = "Bazaar";
		m.locationDescription = "A bazaar or market in a city or settlement";
		break;
	case "31":
	case "32":
	case "33":
		m.location = "Spaceport";
		m.locationDescription = "Spaceport on a space station or planet";
		break;
	case "34":
	case "35":
	case "36":
		m.location = "Asteroid/Moon";
		m.locationDescription = "The surface of an asteroid or a smaller moon. Vacuum or dangerous atmosphere";
		break;
	case "41":
	case "42":
	case "43":
		m.location = "Space station";
		m.locationDescription = "On a small space station, anything from an oxygen oasis to a trade or service station";
		break;
	case "44":
	case "45":
	case "46":
		m.location = "Soulk";
		m.locationDescription = "A larger souk where trading partners meet. Usually in a larger city or station, sometimes seasonal";
		break;
	case "51":
	case "52":
	case "53":
		m.location = "Colony";
		m.locationDescription = "A small colony, usually no bigger than a small, sparsely populated village. Far from other settlements.";
		break;
	case "54":
	case "55":
	case "56":
		m.location = "Portal station";
		m.locationDescription = "A portal station next to a sun";
		break;
	case "61":
	case "62":
	case "63":
		m.location = "Spaceship";
		m.locationDescription = "Onboard a spaceship during voyage or docking";
		break;
	case "64":
	case "65":
	case "66":
		m.location = "Outpost";
		m.locationDescription = "A small outpost, usually planet side. An outpost is commonly just a single building with a specific function and only a few inhabitants. For example sensor station, dam control station, courier post or someother communications station";
		break;
	}
};

//Table 23
var complicationFreeTraders = function() {
	var r = "" + roll() + roll();
	switch (r) {
	case "11":
	case "12":
	case "13":
		return new complication( "Embargo/Quarantine","The destination is placed under quarantine or an embargo.");
	case "14":
	case "15":
	case "16":
		return new complication( "Customs inspection","A tolling vessel or some other customs ship approaches and demands to be allowed to board.");
	case "21":
	case "22":
	case "23":
	case "24":
	case "25":
	case "26":
		return new complication( "Corrupt customs officer","A customs officer demands to be bribed to allow the PCs through or will make sure their cargo gets tangled up in bureaucracy.");
	case "31":
	case "32":
	case "33":
		return new complication( "Corsairs","Corsairs or pirates attack the group's work site or ship.");
	case "34":
	case "35":
	case "36":
	case "41":
	case "42":
	case "43":
		return new complication( "Break-down","Some form of breakdown occurs onboard, during either loading or unloading.");
	case "44":
	case "45":
	case "46":
	case "51":
	case "52":
	case "53":
		return new complication( "Lost","The group strays from their planned route and is lost on a planet or in space.");
	case "54":
	case "55":
	case "56":
		return new complication( "Tracky merchant","The PCs encounter a merchant who hinders them from selling at a profit or tricks them in some other way.");
	case "61":
	case "62":
	case "63":
	case "64":
	case "65":
	case "66":
		return new complication( "Saturated market","The market at the destination recently received a big shipment of goods similar to the PCs' and the prices have dropped.");
	}
};