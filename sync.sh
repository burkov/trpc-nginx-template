#!/usr/bin/env bash

set -e

SERVER_IP=4.4.4.4

rsync -av --progress . ${SERVER_IP}:application
