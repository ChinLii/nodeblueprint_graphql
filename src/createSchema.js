const { mergeTypes, mergeResolvers, fileLoader } = require('merge-graphql-schemas');
const { schemaComposer } = require('graphql-compose');
const path = require('path');

require('./graphql-mongoose/');

const typeDefs = fileLoader(path.join(__dirname, 'modules/**/*.graphql'));
const resolvers = fileLoader(path.join(__dirname, 'modules/**/resolvers.*'));
const mergedTypeDefs = mergeTypes(typeDefs);
const mergedResolvers = mergeResolvers(resolvers);

schemaComposer.addTypeDefs(mergedTypeDefs);
schemaComposer.addResolveMethods(mergedResolvers);

module.exports = schemaComposer.buildSchema();
