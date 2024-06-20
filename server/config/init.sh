#!/bin/bash

INIT_FILE=/server-script/config-replica-set.init.js

###

echo -e "\n *** Starting Config servers replica set initialization... *** \n"

docker-compose up -d

###

until docker exec config-serverA bash -c "mongosh --quiet --port 27019 < $INIT_FILE > /dev/null 2>&1"
	do
		sleep 2
	done


###

echo -e "\n *** Successfully created Config replica set. *** \n"

