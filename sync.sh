#!/usr/bin/env bash

set -e

SERVER_IP=4.4.4.4


yarn build:client

rsync -av --progress . ${SERVER_IP}:application
