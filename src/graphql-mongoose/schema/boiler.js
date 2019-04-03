const { composeWithMongoose } = require('graphql-compose-mongoose/node8');
const { schemaComposer } = require('graphql-compose');
const { BoilerModel } = require('./../../models/schema/boiler');

const customizationOptions = {};
const boilerTC = composeWithMongoose(BoilerModel, customizationOptions);


schemaComposer.Query.addFields({
  boilerById: boilerTC.getResolver('findById'),
  boilerByIds: boilerTC.getResolver('findByIds'),
  boilerOne: boilerTC.getResolver('findOne'),
  boilerMany: boilerTC.getResolver('findMany'),
  boilerCount: boilerTC.getResolver('count'),
  boilerConnection: boilerTC.getResolver('connection'),
  boilerPagination: boilerTC.getResolver('pagination')
});

schemaComposer.Mutation.addFields({
  boilerCreateOne: boilerTC.getResolver('createOne'),
  boilerCreateMany: boilerTC.getResolver('createMany'),
  boilerUpdateById: boilerTC.getResolver('updateById'),
  boilerUpdateOne: boilerTC.getResolver('updateOne'),
  boilerUpdateMany: boilerTC.getResolver('updateMany'),
  boilerRemoveById: boilerTC.getResolver('removeById'),
  boilerRemoveOne: boilerTC.getResolver('removeOne'),
  boilerRemoveMany: boilerTC.getResolver('removeMany')
});

module.exports = schemaComposer.buildSchema();
