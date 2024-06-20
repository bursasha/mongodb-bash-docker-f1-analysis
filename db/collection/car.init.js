db = db.getSiblingDB("f1-2018-db");

db.createCollection("car");

db.runCommand({
	collMod: "car",
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["name", "team", "engine", "power", "weight"],

			properties: {
				name: { bsonType: "string", description: "Name should be string." },

				team: { bsonType: "string", description: "Team should be string." },

				engine: { bsonType: "string", description: "Engine should be string." },

				power: { bsonType: "int", minimum: 0, description: "Power is calculated in hp, should be a positive int." },

				weight: { bsonType: "int", minimum: 0, description: "Weight is calculated in kg, should be a positive int." }
			}
		}
	},

	validationAction: "error"
});

db.car.createIndex({"name": 1}, {unique: true});
