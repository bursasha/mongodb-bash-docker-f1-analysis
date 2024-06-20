db = db.getSiblingDB("f1-2018-db");

db.race.insertMany([
{"date":"2018-03-25","location":{"country":"Australia","city":"Melbourne","track":"Albert Park"},"weather":{"temperature":23,"rain":false},"lap_count":58,"fan_count":100000},
{"date":"2018-04-08","location":{"country":"Bahrain","city":"Sakhir","track":"Bahrain International Circuit"},"weather":{"temperature":26,"rain":false},"lap_count":57,"fan_count":95000},
{"date":"2018-04-15","location":{"country":"China","city":"Shanghai","track":"Shanghai International Circuit"},"weather":{"temperature":19,"rain":false},"lap_count":56,"fan_count":145000},
{"date":"2018-04-29","location":{"country":"Azerbaijan","city":"Baku","track":"Baku City Circuit"},"weather":{"temperature":17,"rain":false},"lap_count":51,"fan_count":75000},
{"date":"2018-05-13","location":{"country":"Spain","city":"Barcelona","track":"Circuit de Barcelona-Catalunya"},"weather":{"temperature":22,"rain":false},"lap_count":66,"fan_count":92000},
{"date":"2018-05-27","location":{"country":"Monaco","city":"Monte Carlo","track":"Circuit de Monaco"},"weather":{"temperature":22,"rain":false},"lap_count":78,"fan_count":37000},
{"date":"2018-06-10","location":{"country":"Canada","city":"Montreal","track":"Circuit Gilles-Villeneuve"},"weather":{"temperature":25,"rain":false},"lap_count":70,"fan_count":95000},
{"date":"2018-06-24","location":{"country":"France","city":"Le Castellet","track":"Circuit Paul Ricard"},"weather":{"temperature":27,"rain":false},"lap_count":53,"fan_count":65000},
{"date":"2018-07-01","location":{"country":"Austria","city":"Spielberg","track":"Red Bull Ring"},"weather":{"temperature":24,"rain":false},"lap_count":71,"fan_count":90000},
{"date":"2018-07-08","location":{"country":"United Kingdom","city":"Silverstone","track":"Silverstone Circuit"},"weather":{"temperature":24,"rain":false},"lap_count":52,"fan_count":140000},
{"date":"2018-07-22","location":{"country":"Germany","city":"Hockenheim","track":"Hockenheimring"},"weather":{"temperature":28,"rain":true},"lap_count":67,"fan_count":71000},
{"date":"2018-07-29","location":{"country":"Hungary","city":"Budapest","track":"Hungaroring"},"weather":{"temperature":31,"rain":true},"lap_count":70,"fan_count":79000},
{"date":"2018-08-26","location":{"country":"Belgium","city":"Spa","track":"Circuit de Spa-Francorchamps"},"weather":{"temperature":21,"rain":false},"lap_count":44,"fan_count":250000},
{"date":"2018-09-02","location":{"country":"Italy","city":"Monza","track":"Autodromo Nazionale Monza"},"weather":{"temperature":23,"rain":false},"lap_count":53,"fan_count":93000},
{"date":"2018-09-16","location":{"country":"Singapore","city":"Singapore","track":"Marina Bay Street Circuit"},"weather":{"temperature":31,"rain":true},"lap_count":61,"fan_count":263000},
{"date":"2018-09-30","location":{"country":"Russia","city":"Sochi","track":"Sochi Autodrom"},"weather":{"temperature":26,"rain":false},"lap_count":53,"fan_count":55000},
{"date":"2018-10-07","location":{"country":"Japan","city":"Suzuka","track":"Suzuka International Racing Course"},"weather":{"temperature":27,"rain":false},"lap_count":53,"fan_count":155000},
{"date":"2018-10-21","location":{"country":"United States","city":"Austin","track":"Circuit of the Americas"},"weather":{"temperature":19,"rain":true},"lap_count":56,"fan_count":263000},
{"date":"2018-10-28","location":{"country":"Mexico","city":"Mexico City","track":"Autódromo Hermanos Rodríguez"},"weather":{"temperature":18,"rain":false},"lap_count":71,"fan_count":135000},
{"date":"2018-11-11","location":{"country":"Brazil","city":"São Paulo","track":"Interlagos Circuit"},"weather":{"temperature":22,"rain":true},"lap_count":71,"fan_count":78000},
{"date":"2018-11-25","location":{"country":"United Arab Emirates","city":"Abu Dhabi","track":"Yas Marina Circuit"},"weather":{"temperature":28,"rain":false},"lap_count":55,"fan_count":60000}
]);
