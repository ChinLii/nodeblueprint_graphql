const resolvers = {
  Query: {
    get: async (root) => {
      const variab = root;
      return variab;
    }
  },
  Mutation: {
    create: async (root) => {
      const variab = root;
      return variab;
    }
  }
};

module.exports = resolvers;
