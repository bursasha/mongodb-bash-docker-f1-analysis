db = db.getSiblingDB("f1-2018-db");

db.car.insertMany([
{"name":"Mercedes W09 EQ Power+","team":"Mercedes-AMG Petronas F1 Team","engine":"Mercedes M09 EQ Power+","power":1000,"weight":733},
{"name":"Ferrari SF71H","team":"Scuderia Ferrari","engine":"Ferrari 062 EVO","power":970,"weight":733},
{"name":"Red Bull Racing RB14","engine":"Renault R.E. 18","team":"Aston Martin Red Bull Racing","power":900,"weight":733},
{"name":"Williams FW41","team":"Williams Martini Racing","engine":"Mercedes M09 EQ Power+","power":935,"weight":740},
{"name":"Renault R.S.18","team":"Renault Sport F1 Team","engine":"Renault R.E. 18","power":940,"weight":737},
{"name":"Toro Rosso STR13","team":"Scuderia Toro Rosso","engine":"Honda RA618H","power":930,"weight":735},
{"name":"Haas VF-18","team":"Haas F1 Team","engine":"Ferrari 062 EVO","power":965,"weight":735},
{"name":"McLaren MCL33","team":"McLaren F1 Team","engine":"Renault R.E. 18","power":945,"weight":738},
{"name":"Alfa Romeo Sauber C37","team":"Alfa Romeo Sauber F1 Team","engine":"Ferrari 062 EVO","power":960,"weight":736},
{"name":"Force India VJM11","team":"Sahara Force India F1 Team","engine":"Mercedes M09 EQ Power+","power":955,"weight":732}
]);
