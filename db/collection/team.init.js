db = db.getSiblingDB("f1-2018-db");

db.createCollection("team");

db.runCommand({
	collMod: "team",
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["name", "nation", "headquarters_location", "management", "season_budget"],
            
			properties: {
				name: { bsonType: "string", description: "Name should be string." },

				nation: { bsonType: "string", description: "Nation should be string." },

				headquarters_location: {
					bsonType: "object",
					description: "Headquarters location should be object containing country string and city string.",
					required: ["country", "city"],
					properties: { 
						country: { bsonType: "string", description: "Country should be string." },
						city: { bsonType: "string", description: "City should be string." }
					}
				},
				
				management: {
					bsonType: "object",
					description: "Management should be object containing team director name string and technical director name string.",
					required: ["team_director", "technical_director"],
					properties: {
						team_director: { bsonType: "string", description: "Team director should be string." },
						technical_director: { bsonType: "string", description: "Technical director should be string." }
					}
				},

				season_budget: { bsonType: "int", minimum: 0, description: "The season budget is calculated in $, should be positive int." }
			}
		}
	},

	validationAction: "error"
});

db.team.createIndex({"name": 1}, {unique: true});
