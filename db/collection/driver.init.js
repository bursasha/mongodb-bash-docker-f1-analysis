db = db.getSiblingDB("f1-2018-db");

db.createCollection("driver");

db.runCommand({
	collMod: "driver",
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["name", "birthdate", "physique", "nationality", "team"],

			properties: {
				name: { bsonType: "string", description: "Name should be string." },

				birthdate: { bsonType: "string", description: "Birthdate should be a date string formatted as 2023-12-12 (Y-M-D)." },

				physique: {
					bsonType: "object",
					description: "Physique should be object containing height int and weight int.",
					required: ["height", "weight"],
					properties: {
						height: { bsonType: "int",  minimum: 0, description: "Height should be a positive int." },
						weight: { bsonType: "int", minimum: 0, description: "Weight should be a positive int." }
					}
				},

				nationality: {
					bsonType: "object",
					description: "Nationality should be object containing country string and city string.",
					required: ["country", "city"],
					properties: {
						country: { bsonType: "string", description: "Country should be string." },
						city: { bsonType: "string", description: "City should be string." }
					}
				},

				team: { bsonType: "string", description: "Team should be string." },

				championship_count: { bsonType: "int", minimum: 1, description: "Championship count should be a positive int." }
			}
		}
	},

	validationAction: "error"
});

db.driver.createIndex({"name": 1}, {unique: true});
