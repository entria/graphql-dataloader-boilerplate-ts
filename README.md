# GraphQL DataLoader Boilerplate

[![CircleCI](https://circleci.com/gh/entria/graphql-dataloader-boilerplate-ts/tree/master.svg?style=svg)](https://circleci.com/gh/entria/graphql-dataloader-boilerplate-ts/tree/master)
[![codecov](https://codecov.io/gh/entria/graphql-dataloader-boilerplate-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/entria/graphql-dataloader-boilerplate-ts)

Very simple boilerplate using GraphQL and DataLoader

## Blog Posts
* [How to implement viewerCanSee in  GraphQL](https://medium.com/@sibelius/how-to-implement-viewercansee-in-graphql-78cc48de7464#.d9vpk6fvx)
* [Testing a GraphQL Server using Jest](https://medium.com/@sibelius/testing-a-graphql-server-using-jest-4e00d0e4980e)

### Directory Structure

```
├── /data/                   # GraphQL generated schema
├── /repl/                   # Read-Eval-Print-Loop (REPL) configuration
├── /scripts/                # Generate GraphQL schema script
├── /src/                    # Source code of GraphQL Server
│   ├── /connection/         # Connections types (Relay)
│   ├── /interface/          # NodeInterface (Relay)
│   ├── /loader/             # Loaders of the models using DataLoader
│   ├── /model/              # Models definition (Mongoose, SQL, Google DataStore)
│   ├── /mutation/           # Mutations definition
├── /test/                   # Test helpers
```

## Command

#### Setup
```bash
yarn install
```
Note: If you do not have mongodb installed, please install it:
```bash
brew install mongodb
```
#### Develop
```bash
yarn start
```

#### Playground

There's a [GraphQL Playground](https://github.com/prisma/graphql-playground) provided on `http://localhost:5000/playground`.

### Test
```bash
yarn test
```

Or
```bash
yarn test:watch
```

#### Docker and docker-compose
No needs for installing dependencies or running `mongod` in another terminal window

```bash
docker-compose build && docker-compose up
```

Test
```bash
docker-compose -f docker-compose.test.yml build && docker-compose -f docker-compose.test.yml up
```

#### Production
```bash
# first compile the code
yarn build

# run graphql compiled server
yarn serve
```

### REPL server
```bash
yarn repl

awesome > const user = await M.User.find()
```

Yep, await syntax works on the repl, it is awesome, tks @princejwesley (https://gist.github.com/princejwesley/a66d514d86ea174270210561c44b71ba)

### Schema
Update your schema
```bash
yarn update-schema
```

Take a look on the [Schema](https://github.com/sibelius/graphql-dataloader-boilerplate/blob/master/data/schema.graphql)
