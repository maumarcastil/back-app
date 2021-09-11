const { ApolloServer } = require("apollo-server");
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const path = require('path');

const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './schemas')), { all: true });
const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, './resolvers/*.js')));

const server = new ApolloServer({ schema: makeExecutableSchema({ typeDefs, resolvers }) });

module.exports = server;
