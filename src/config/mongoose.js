const mongoose = require('mongoose');
const { mongo, env } = require('./vars');

mongoose.Promise = Promise;

if (env === 'development') {
  mongoose.set('debug', true);
}

const MONGO_URI = mongo.uri;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoDB URI');
}

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection
  .once('open', () => {})
  .on('error', () => {});
