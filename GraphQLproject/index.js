/*const { schema, root } = require('./schema/main');
const { graphql } = require('graphql');

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});*/
const { graphql } = require('graphql');
const readline = require('readline');
const mySchema = require('./schema/main');

const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rli.question('Client Request: ', inputQuery => {
    graphql(mySchema, inputQuery).then(result => {
        console.log('Server Answer :', result.data);
    });
    rli.close();
});
