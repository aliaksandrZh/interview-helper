## Run

`docker compose up`

## Migrations

Generate migrations `bash generate.sh`

Apply migrations `bash migrate.sh`

## Swagger

Swagger `localhost:8888/api`

JSON version: `localhost:8888/api-json`

## Debugger

In VScode run the `interview-helper api` configuration.

Set breakpoints.

## Dependecies

To add a package use `bash isntall-dep.sh`

## Errors

### It's a known issue, will be fixed soon

If you see the errors in your IDE `Cannot find a module` run `yarn` on your host machine.

Be aware of `your node_modules !== app node_modules`. The `app node_modules` are inside the docker.
