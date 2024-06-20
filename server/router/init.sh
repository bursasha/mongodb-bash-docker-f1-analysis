#!/bin/bash

INIT_FILE1=/server-script/shard1-sharding.init.js
INIT_FILE2=/server-script/auth.init.js

###

docker-compose up -d

echo -e "\n *** Starting Router servers initialization... *** \n"

###

until docker exec mongos bash -c "mongosh --quiet --port 27017 < $INIT_FILE1 > /dev/null 2>&1"
	do
		sleep 2
	done

###

echo -e "\n *** Successfully connected shards. *** \n"

###

until docker exec mongos bash -c "mongosh --quiet --port 27017 < $INIT_FILE2 > /dev/null 2>&1"
	do
		sleep 2
	done

###

echo -e "\n *** Successfully created admin. *** \n"
