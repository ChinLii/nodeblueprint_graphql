require('./models');
require('./config/mongoose');

const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const jwt = require('express-jwt');
const schema = require('./createSchema');

const app = express();
const { port, jwtSecret } = require('./config/vars');

app.use(cors());

const auth = jwt({
  secret: jwtSecret,
  credentialsRequired: false
});

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    user: req.user,
    auth: req.header('Authorization')
  })
});

app.use(
  '/api',
  bodyParser.json(),
  auth
);

server.applyMiddleware({ app, path: '/api' });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); /* eslint-disable-line */
});
