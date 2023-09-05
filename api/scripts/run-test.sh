#!/bin/sh

#==============================================================================
# File: run-test.sh
# Author: Pedro Henrique Nieto da Silva
# Date: 05 set 2023
# Brief: Test run script.
#==============================================================================

if [ -z "$BASEDIR" ]
then
    BASEDIR=$(pwd)
fi

case "$1" in
        up)
                echo "Up Daemon ..."
                # DUID=$(id -u) DGID=$DOCKER_GROUP_ID  docker-compose --env-file=$BASEDIR/docker/test-local.env -f $(pwd)/docker/docker-compose-test.yml down -v;
                # DUID=$(id -u) DGID=$(id -g) docker-compose --env-file=$BASEDIR/docker/test-local.env -f $BASEDIR/docker/docker-compose-test.yml up \
                # --abort-on-container-exit  --exit-code-from devices-service-test;
                DUID=$(id -u) DGID=$(id -g) docker-compose -f $BASEDIR/docker/docker-compose-test.yml up
                ;;

        upd)
                echo "Up Daemon ..."
                DUID=$(id -u) DGID=$(id -g) docker-compose --env-file=$BASEDIR/docker/test-local.env -f $BASEDIR/docker/docker-compose-test.yml up -d;
                ;;     

        shell)
                echo "Up ..."
                DUID=$(id -u) DGID=$(id -g) docker-compose -f $BASEDIR/docker/docker-compose-test.yml run devices-service-test
                ;;
                
        down)
                echo "Down ..."
                DUID=$(id -u) DGID=$(id -g) docker-compose -f $BASEDIR/docker/docker-compose-test.yml down -v --remove-orphans
                ;;


        *)
                echo $"Usage: $0 {upd|up|shell|down|restart|logs}"
                RETVAL=2
esac
exit $RETVAL
