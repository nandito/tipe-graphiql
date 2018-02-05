# GraphiQL for Tipe

This is a React app with [GraphiQL](https://github.com/graphql/graphiql) IDE to browse [Tipe](https://tipe.io/)'s schema and try out GraphQL queries.
Check out [my blog post](https://nandito.info/2018/02/05/set-up-graphiql-ide-for-tipe/) for more details.

## Install

1. Clone this project:
  ```bash
  $ git clone https://github.com/nandito/tipe-graphiql.git
  ```

2. Install dependencies:
  ```bash
  $ cd tipe-graphiql
  $ yarn install # or npm install
  ```

3. Set up Tipe credentials:

    1. get your project's API key and ORG secret ([instructions](https://docs.tipe.io/docs/graphql-api-request)),
    2. paste them into the `src/index.js`

4. Start the app:
  ```bash
  $ yarn start # or npm start
  ```

## License

MIT
