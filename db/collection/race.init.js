db = db.getSiblingDB("f1-2018-db");

db.createCollection("race");

db.runCommand({
	collMod: "race",
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["date", "location", "weather", "lap_count", "fan_count"],

			properties: {
				date: { bsonType: "string", description: "Date should be a date string formatted as 2023-12-12 (Y-M-D)." },

				location: {
					bsonType: "object",
					description: "Location should be object containing country string, city string, and track string.",
					required: ["country", "city", "track"],
					properties: {
						country: { bsonType: "string", description: "Country should be string." },
						city: { bsonType: "string", description: "City should be string." },
						track: { bsonType: "string", description: "Track should be string." }
					}
				},

				weather: {
					bsonType: "object",
					description: "Weather should be object containing temperature int and rain bool.",
					required: ["temperature", "rain"],
					properties: {
						temperature: { bsonType: "int", description: "Temperature is calculated in ˚C, should be int." },
						rain: { bsonType: "bool",  description: "Rain should be bool." }
					}
				},

				lap_count: { bsonType: "int", minimum: 1, description: "Lap count should be a positive int." },

				fan_count: { bsonType: "int", minimum: 0, description: "Fan count should be a positive int." }
			}
		}
	},

	validationAction: "error"
});
