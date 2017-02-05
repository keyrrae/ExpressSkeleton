const { schema, root } = require('./schema/main');
const { graphql } = require('graphql');

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
