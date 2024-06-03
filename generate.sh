#!/bin/bash

# Execute migration command inside the Docker container
docker exec -it api yarn run drizzle:generate
