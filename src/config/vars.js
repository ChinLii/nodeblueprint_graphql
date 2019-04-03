const path = require('path');

require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env')
});

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  mongo: {
    uri: process.env.MONGO_URI
  }
};
