
var planetRoll = function() {
	return roll() + roll();
}

var planet = function(size) {
	var planet = {};

	planet.name = "Planet"

	// Size
	planet.size = size;

	// Orbit
	planet.orbit = orbit();
	if (planet.orbit === "") {
		planet.orbit = "Empty Space";
	}

	// Atmosphere
	planet.atmosphere = atmosphere(planet);

	// Temerarure
	planet.temperature = temperature(planet);

	// Geosphere
	planet.geosphere = geosphere(planet);

	// Population
	planet.population = population(planet);

	// Space port
	planet.spaceport = spaceport(planet);

	// Hooks
	planet.hooks = hooks();

	// Factions
	planet.factions = factions();

	return planet;
};

var printPlanet = function(p) {
	debug(String.format(headerTemplate, p.name));
	debug(String.format(cellTemplate, "Size", planetSize(p.size)));
	debug(String.format(cellTemplate, "Gravity", planetGravity(p.size)));
	debug(String.format(cellTemplate, "Orbit", p.orbit));
	debug(String.format(cellTemplate, "Atmosphere",
			atmosphereString(p.atmosphere)));
	debug(String.format(cellTemplate, "Temperature",
			temperatureString(p.temperature)));
	debug(String
			.format(cellTemplate, "Geosphere", geosphereString(p.geosphere)));
	debug(String.format(cellTemplate, "Population",
			populationString(p.population)));
	debug(String.format(cellTemplate, "Space Port",
			spaceportString(p.spaceport)));
	debug(String.format(cellTemplate, "Hooks", p.hooks));
	debug(String.format(cellTemplate, "Factions", p.factions));
}

var gasGiant = function() {
	var gg = {};

	gg.name = "Gas Giant";
	gg.size = gasGiantSize();
	gg.color = gasGiantColor();
	gg.temperature = gasGiantTemperature();
	gg.characteristics = gasGiantCharacteristics();
	gg.population = roll();
	gg.spaceport = spaceport(gg);
	gg.hooks = hooks();
	gg.factions = factions();
	gg.moons = [];
	var numMoons = roll() + roll() + roll();
	var c = 0;
	for (c = 0; c < numMoons; c++) {
		var moon = planet(roll());
		moon.name = "Moon " + (c + 1);
		gg.moons.push(moon);
	}
	;

	return gg;
};

var printGasGiant = function(p) {
	debug(String.format(headerTemplate, p.name));
	debug(String.format(cellTemplate, "Size", gasGiantSize(p.size)));
	debug(String.format(cellTemplate, "Color", p.color));
	debug(String.format(cellTemplate, "Temperature",
			gasGiantTemperatureString(p.temperature)));
	debug(String.format(cellTemplate, "Characteristics", p.characteristics));
	debug(String.format(cellTemplate, "Population",
			populationString(p.population)));
	debug(String.format(cellTemplate, "Space Port",
			spaceportString(p.spaceport)));
	debug(String.format(cellTemplate, "Hooks", p.hooks));
	debug(String.format(cellTemplate, "Factions", p.factions));
	debug(sepTemplate);

	$.each(p.moons, function(i, m) {
		debug(sepTemplate);
		printPlanet(m);
		debug(sepTemplate);
	});

	debug("----------");
};

var asteroidBelt = function() {
	var ab = {};

	ab.name = "Asteroid Belt";
	ab.size = asteroidBeltSize();
	ab.characteristics = asteroidBeltCharacteristics();
	ab.color = gasGiantColor();
	ab.composition = asteroidBeltComposition();
	var pop = roll();
	if (pop > 3) {
		pop = pop - 3;
	}
	ab.population = pop;
	ab.spaceport = spaceport(ab);
	ab.hooks = hooks();
	ab.factions = factions();
	return ab;
};

var printAsteroidBelt = function(p) {
	debug(String.format(headerTemplate, p.name));
	debug(String.format(cellTemplate, "Size", p.size));
	debug(String.format(cellTemplate, "Color", p.color));
	debug(String.format(cellTemplate, "Comopsition", p.composition));
	debug(String.format(cellTemplate, "Characteristics", p.characteristics));
	debug(String.format(cellTemplate, "Population",
			populationString(p.population)));
	debug(String.format(cellTemplate, "Space Port",
			spaceportString(p.spaceport)));
	debug(String.format(cellTemplate, "Hooks", p.hooks));
	debug(String.format(cellTemplate, "Factions", p.factions));
};
