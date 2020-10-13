import { DynamoDB } from 'aws-sdk';
import * as AWS from 'aws-sdk';

if (process.env.STAGE === 'local') {
  AWS.config.update({
    accessKeyId: 'not-important',
    secretAccessKey: 'not-important',
    region: 'local',
  });
}

const dynamoClient = new DynamoDB.DocumentClient({
  region: process.env.REGION,
  endpoint: process.env.ENV === 'local' ? 'http://localhost:8000' : undefined,
});

const getHelloWorld = async ({ id }) => {
  const result = await dynamoClient
    .query({
      TableName: 'HelloWorld',
      KeyConditionExpression: 'id = :v1',
      ExpressionAttributeValues: {
        ':v1': id,
      },
    })
    .promise();

  return result.Items[0];
};

export default {
  Query: {
    helloWorld: (root, args) => getHelloWorld(args),
  },
};
