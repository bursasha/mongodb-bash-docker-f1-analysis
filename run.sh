#!/bin/bash

echo -e "\n *** Starting servers initialization... *** \n"

###

echo -e "\n *** Creating common network for server communication... *** \n"

docker network create server-network

echo -e "\n *** Internal server-network created. *** \n"

###

echo -e "\n *** Creating internal server secret key... *** \n"

cd ./server
openssl rand -base64 756 > mongo.key
chmod 600 mongo.key

echo -e "\n *** Created mongo.key. *** \n"

###

echo -e "\n *** Starting Config servers... *** \n"

cd ./config
./init.sh

echo -e "\n *** Config servers started. *** \n"

###

sleep 2

###

echo -e "\n *** Starting Shard1 servers... *** \n"

cd ../shard1
./init.sh

echo -e "\n *** Shard1 servers started. *** \n"

###

sleep 2

###

echo -e "\n *** Starting Router servers... *** \n"

cd ../router
./init.sh
./init-db.sh

echo -e "\n *** Router servers started. *** \n"

###

cd ../../../
echo -e "\n *** Initialization finished successfully! *** \n"
