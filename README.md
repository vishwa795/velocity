# Velocity App

## Tech Stack Used

- NodeJS
- Typescript
- Prisma
- MySQL

## Pre requisites

1.  Docker
2.  VSCode

## Steps to start Development

### Steps tp run using vscode devcontainer extension.

1.  Clone the repo into your local filesystem.
2.  Navigate to the folder containing the project and execute the command `code velocity` to open the project in vscode.
3.  In VSCode, press `CMD+Shift+P`(MacOS) / `Ctrl+Shift+P` in Windows. Search for `Reopen in container` and click on that option.
4.  Your app should reopen in the container and you should be able to access your app at `http://localhost:3000`

### Steps to run the docker container manually

1.  Navigate to the folder containing the project and execute the command `docker-compose -f .devcontainer/docker-compose.yml`
2.  For the first time, you will have to manually set up yarn and install all dependencies. For that, get inside the container running the app. run the command `yarn` and then run `yarn migrate`.
3.  Your app should be good to be run now.

## Steps to run SQL Migations in Local

1. Get inside the docker container where your app is running.
2. Once your changes in schema.prisma file is done, execute the command `yarn migrate`
3. This command will request you the migration name, enter the name and voila, your migration would be applied.

# API Overview

## Create Product API

- Route: /v1/products
- Method: POST
- Description: This API would create a new product. You can even pass a new supplier in the body, incase you have a new supplier.
- Fields Expected in Body:

  1. name: Name of the Product. Expected type - String.
  2. stk_qty: Quantity of Stock for the product. Expected type - Number.
  3. supplier_id: ID of the supplier if the supplier already exists. Expected Type - String.
  4. images: List of images of the product to be showcased. Expected Type - Array of String.
  5. price: Price of the product. Expected Type - Number.
  6. new_supplier: If the product has a new supplier, this field can be used to create a new supplier as well. The fields required would be:
     1. name - Name of the supplier.
     2. email - Email of the supplier.
     3. mobile - Mobile of the supplier.

## Get Product API

- Route: /v1/products/:id
- Method: GET
- Description: Get Product by ID. Requires ID in the route to get the product information.

## Update Product API

- Route: /v1/products/:id
- Method: PATCH
- Description: This API would update the product. Requires ID in the route.
- Fields Expected in Body:

  1. name: Name of the Product. Expected type - String.
  2. stk_qty: Quantity of Stock for the product. Expected type - Number.
  3. supplier_id: ID of the supplier if the supplier already exists. Expected Type - String.
  4. images: List of images of the product to be showcased. Expected Type - Array of String.
  5. price: Price of the product. Expected Type - Number.

## Delete Product API

- Route: /v1/products/:id
- Method: DELETE
- Description: This API would delete the product. Requires ID in the route.
