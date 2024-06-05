#!/bin/bash

trap 'mysqldump -h "$MYSQL_HOST" -u "$MYSQL_USER" -p"$MYSQL_ROOT_PASSWORD" "$MYSQL_DATABASE" > /backup/backup_$(date +%Y%m%d_%H%M%S).sql' EXIT

# Start whatever process you need
tail -f /dev/null