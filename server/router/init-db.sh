#!/bin/bash

DB_NAME=f1-2018-db
DB_COLLECTION_DIR=/db/collection
DB_DATA_DIR=/db/data
ROOT_USERNAME=root
ROOT_PASSWORD=root

###

echo -e "\n *** Starting $DB_NAME initialization script... *** \n"

docker exec mongos bash -c "
	mongosh --quiet --port 27017 --authenticationDatabase admin -u $ROOT_USERNAME -p $ROOT_PASSWORD --eval 'use $DB_NAME; sh.enableSharding('$DB_NAME');' > /dev/null 2>&1
"

##

echo -e "\n *** Creating collections inside $DB_NAME... *** \n"

docker exec mongos bash -c "
	for collectionFile in $DB_COLLECTION_DIR/*.init.js; 
	do
		mongosh --quiet --port 27017 --authenticationDatabase admin -u $ROOT_USERNAME -p $ROOT_PASSWORD < \$collectionFile > /dev/null 2>&1
	done
"

echo -e "\n *** Successfully created all database collections. *** \n"

###

echo -e "\n *** Importing data into collections... *** \n"

docker exec mongos bash -c "
	for dataFile in $DB_DATA_DIR/*.init.js; 
	do
		mongosh --quiet --port 27017 --authenticationDatabase admin -u $ROOT_USERNAME -p $ROOT_PASSWORD < \$dataFile > /dev/null 2>&1
	done
"

echo -e "\n *** $DB_NAME initialization finished! *** \n"
