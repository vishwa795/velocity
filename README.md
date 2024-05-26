# Velocity App

## Tech Stack Used

 - NodeJS
 - Typescript
 - Prisma
 - MySQL

## Pre requisites

 1. Docker

## Steps to start Development

 1. Clone the repo into your local filesystem.
 2. Navigate to the folder containing the project and execute the command `code velocity` to open the project in vscode.
 3. In VSCode, press `CMD+Shift+P`(MacOS) / `Ctrl+Shift+P` in Windows. Search for `Reopen in container` and click on that option.
 4. Your app should reopen in the container and you should be able to access your app at `http://localhost:3000`

### Steps to run the docker container manually

 1. Navigate to the folder containing the project and execute the command `docker-compose -f .devcontainer/docker-compose.yml`
 2. For the first time, you will have to manually set up yarn and install all dependencies. For that, get inside the container running the app. run the command `yarn` and then run `yarn migrate`.
 3. Your app should be good to be run now.

## Steps to run SQL Migations in Local
1. Get inside the docker container where your app is running.
2. Once your changes in schema.prisma file is done, execute the command `yarn migrate`
3. This command will request you the migration name, enter the name and voila, your migration would be applied.
