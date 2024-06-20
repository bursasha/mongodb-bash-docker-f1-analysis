db = db.getSiblingDB("f1-2018-db");

db.createCollection("raceResult");

db.runCommand({
	collMod: "raceResult",
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["track", "driver", "position", "score"],

			properties: {
				track: { bsonType: "string", description: "Track should be string." },

				driver: { bsonType: "string", description: "Driver should be string." },

				position: {
					bsonType: "object",
					description: "Position should be object containing start and finish position int.",
					required: ["start_position", "finish_position"],
					properties: {
						start_position: { bsonType: "int", minimum: 1, maximum: 20, description: "Start position should be int in range 1-20." },
						finish_position: { bsonType: "int", minimum: 1, maximum: 20, description: "Finish position should be int in range 1-20." }
					}
				},

				score: { bsonType: "int", description: "Score should be int." },

				race_record: { bsonType: "bool", description: "Race record should be bool." }
			}
		}
	},

	validationAction: "error"
});

sh.shardCollection("f1-2018-db.raceResult", {"track": "hashed"});
