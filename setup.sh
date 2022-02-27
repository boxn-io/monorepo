#! /usr/bin/env bash

echo "Setting user password"
sudo passwd $(whoami)

echo "Starting up database"
sudo su postgres -c "./_setupdb.sh $(whoami)"

echo "Installing yarn deps"
yarn

echo "builing source code"
yarn tsc -b
