db = db.getSiblingDB("f1-2018-db");

db.team.insertMany([
{"name":"Mercedes-AMG Petronas F1 Team","nation":"Germany","headquarters_location":{"country":"United Kingdom","city":"Brackley"},"management":{"team_director":"Toto Wolff","technical_director":"James Allison"},"season_budget":400000000},
{"name":"Scuderia Ferrari","nation":"Italy","headquarters_location":{"country":"Italy","city":"Maranello"},"management":{"team_director":"Maurizio Arrivabene","technical_director":"Mattia Binotto"},"season_budget":410000000},
{"name":"Aston Martin Red Bull Racing","nation":"Austria","headquarters_location":{"country":"United Kingdom","city":"Milton Keynes"},"management":{"team_director":"Christian Horner","technical_director":"Adrian Newey"},"season_budget":310000000},
{"name":"Williams Martini Racing","nation":"United Kingdom","headquarters_location":{"country":"United Kingdom","city":"Grove"},"management":{"team_director":"Claire Williams","technical_director":"Paddy Lowe"},"season_budget":150000000},
{"name":"Renault Sport F1 Team","nation":"France","headquarters_location":{"country":"United Kingdom","city":"Enstone"},"management":{"team_director":"Cyril Abiteboul","technical_director":"Bob Bell"},"season_budget":190000000},
{"name":"Scuderia Toro Rosso","nation":"Italy","headquarters_location":{"country":"Italy","city":"Faenza"},"management":{"team_director":"Franz Tost","technical_director":"Jody Egginton"},"season_budget":150000000},
{"name":"Sahara Force India F1 Team","nation":"India","headquarters_location":{"country":"United Kingdom","city":"Silverstone"},"management":{"team_director":"Otmar Szafnauer","technical_director":"Andrew Green"},"season_budget":120000000},
{"name":"McLaren F1 Team","nation":"United Kingdom","headquarters_location":{"country":"United Kingdom","city":"Woking"},"management":{"team_director":"Zak Brown","technical_director":"Tim Goss"},"season_budget":220000000},
{"name":"Alfa Romeo Sauber F1 Team","nation":"Switzerland","headquarters_location":{"country":"Switzerland","city":"Hinwil"},"management":{"team_director":"Frédéric Vasseur","technical_director":"Simone Resta"},"season_budget":135000000},
{"name":"Haas F1 Team","nation":"United States","headquarters_location":{"country":"United States","city":"Kannapolis"},"management":{"team_director":"Günther Steiner","technical_director":"Rob Taylor"},"season_budget":130000000}
]);
