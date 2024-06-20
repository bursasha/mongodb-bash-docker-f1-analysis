#!/bin/bash

INIT_FILE=/server-script/shard1-replica-set.init.js

###

docker-compose up -d

echo -e "\n *** Starting Shard1 servers replica set initialization... *** \n"

###

until docker exec shard1-serverA bash -c "mongosh --quiet --port 27018 < $INIT_FILE > /dev/null 2>&1"
	do
		sleep 2
	done

###

echo -e "\n *** Successfully created Shard1 replica set. *** \n"
