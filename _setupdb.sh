#! /usr/bin/env bash

pg_ctlcluster 14 main status
createuser $1
createdb boxndb -O $1

IFS= read -s  -p Password: pwd

psql -c "alter user $1 with password '$pwd'"