#! /usr/bin/env bash

echo "Setting user password"
sudo passwd $(whoami)

echo "Starting up database"
sudo su postgres -c "./_setupdb.sh $(whoami)"