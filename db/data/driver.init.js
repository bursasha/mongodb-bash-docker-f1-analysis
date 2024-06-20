db = db.getSiblingDB("f1-2018-db");

db.driver.insertMany([
{"name":"Lewis Hamilton","birthdate":"1985-01-07","physique":{"height":174,"weight":68},"nationality":{"country":"United Kingdom","city":"Stevenage"},"team":"Mercedes-AMG Petronas F1 Team","championship_count":4},
{"name":"Sebastian Vettel","birthdate":"1987-07-03","physique":{"height":176,"weight":64},"nationality":{"country":"Germany","city":"Heppenheim"},"team":"Scuderia Ferrari","championship_count":4},
{"name":"Kimi Räikkönen","birthdate":"1979-10-17","physique":{"height":175,"weight":70},"nationality":{"country":"Finland","city":"Espoo"},"team":"Scuderia Ferrari","championship_count":1},
{"name":"Valtteri Bottas","birthdate":"1989-08-28","physique":{"height":173,"weight":70},"nationality":{"country":"Finland","city":"Nastola"},"team":"Mercedes-AMG Petronas F1 Team"},
{"name":"Daniel Ricciardo","birthdate":"1989-07-01","physique":{"height":178,"weight":66},"nationality":{"country":"Australia","city":"Perth"},"team":"Aston Martin Red Bull Racing"},
{"name":"Max Verstappen","birthdate":"1997-09-30","physique":{"height":180,"weight":67},"nationality":{"country":"Netherlands","city":"Hasselt"},"team":"Aston Martin Red Bull Racing"},
{"name":"Nico Hülkenberg","birthdate":"1987-08-19","physique":{"height":184,"weight":74},"nationality":{"country":"Germany","city":"Emmerich am Rhein"},"team":"Renault Sport F1 Team"},
{"name":"Carlos Sainz Jr.","birthdate":"1994-09-01","physique":{"height":178,"weight":72},"nationality":{"country":"Spain","city":"Madrid"},"team":"Renault Sport F1 Team"},
{"name":"Kevin Magnussen","birthdate":"1992-10-05","physique":{"height":182,"weight":68},"nationality":{"country":"Denmark","city":"Roskilde"},"team":"Haas F1 Team"},
{"name":"Romain Grosjean","birthdate":"1986-04-17","physique":{"height":180,"weight":71},"nationality":{"country":"France","city":"Geneva"},"team":"Haas F1 Team"},
{"name":"Pierre Gasly","birthdate":"1996-02-07","physique":{"height":177,"weight":68},"nationality":{"country":"France","city":"Rouen"},"team":"Scuderia Toro Rosso"},
{"name":"Brendon Hartley","birthdate":"1989-11-10","physique":{"height":184,"weight":73},"nationality":{"country":"New Zealand","city":"Palmerston North"},"team":"Scuderia Toro Rosso"},
{"name":"Stoffel Vandoorne","birthdate":"1992-03-26","physique":{"height":186,"weight":72},"nationality":{"country":"Belgium","city":"Kortrijk"},"team":"McLaren F1 Team"},
{"name":"Fernando Alonso","birthdate":"1981-07-29","physique":{"height":171,"weight":68},"nationality":{"country":"Spain","city":"Oviedo"},"team":"McLaren F1 Team","championship_count":2},
{"name":"Sergey Sirotkin","birthdate":"1995-08-27","physique":{"height":183,"weight":66},"nationality":{"country":"Russia","city":"Moscow"},"team":"Williams Martini Racing"},
{"name":"Lance Stroll","birthdate":"1998-10-29","physique":{"height":185,"weight":70},"nationality":{"country":"Canada","city":"Montreal"},"team":"Williams Martini Racing"},
{"name":"Esteban Ocon","birthdate":"1996-09-17","physique":{"height":186,"weight":70},"nationality":{"country":"France","city":"Evreux"},"team":"Sahara Force India F1 Team"},
{"name":"Sergio Pérez","birthdate":"1990-01-26","physique":{"height":176,"weight":63},"nationality":{"country":"Mexico","city":"Guadalajara"},"team":"Sahara Force India F1 Team"},
{"name":"Charles Leclerc","birthdate":"1997-10-16","physique":{"height":180,"weight":68},"nationality":{"country":"Monaco","city":"Monte Carlo"},"team":"Alfa Romeo Sauber F1 Team"},
{"name":"Marcus Ericsson","birthdate":"1990-09-02","physique":{"height":180,"weight":70},"nationality":{"country":"Sweden","city":"Kumla"},"team":"Alfa Romeo Sauber F1 Team"}
]);
