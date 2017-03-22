/*
const { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

module.exports = { mySchema, queryType };
*/

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

const queryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'world',
        },
    },
});

const mySchema = new GraphQLSchema({
    query: queryType,
});

module.exports = mySchema;
