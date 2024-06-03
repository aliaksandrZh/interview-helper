## Run

Run the command for starting the project `docker compose up`

## Migrations

Generate migrations `bash generate.sh`

Apply migrations `bash migrate.sh`

## Errors

### It's a know issue, will be fixed soon

If you see the errors in your IDE `Cannot find a module` run `yarn`.

Be aware of `your node_modules !== app node_modules`. The `app node_modules` are inside the docker.
