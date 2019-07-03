#!/bin/bash

docker-compose up -d

curl localhost:9000/api/users/chungchiehlun

docker-compose down

