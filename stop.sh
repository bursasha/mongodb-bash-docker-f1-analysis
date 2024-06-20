#!/bin/bash

echo -e "\n *** Stopping Config servers... *** \n"

cd server/config
docker-compose down

echo -e "\n *** Config servers stopped. *** \n"

###

echo -e "\n *** Stopping Shard1 servers... *** \n"

cd ../shard1
docker-compose down

echo -e "\n *** Shard1 servers stopped. *** \n"

###

echo -e "\n *** Stopping Router servers... *** \n"

cd ../router
docker-compose down

echo -e "\n *** Router servers stopped. *** \n"

###

echo -e "\n *** Removing internal server secret key... *** \n"

cd ..
rm -f ./mongo.key

echo -e "\n *** mongo.key removed. *** \n"

###

cd ../../../
docker network rm server-network > /dev/null 2>&1

echo -e "\n *** Server stopping finished successfully! *** \n"
