import dynamodb from 'serverless-dynamodb-client';

const AWSXRay = require('aws-xray-sdk');
const AWS =  AWSXRay.captureAWS(require('aws-sdk'));

let dynamoClient;

if (process.env.NODE_ENV === 'production') {
    dynamoClient = new AWS.DynamoDB.DocumentClient();
} else {
    dynamoClient = dynamodb.doc;
}

const promisify = foo =>
    new Promise((resolve, reject) => {
        foo((error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });

const queryFunctions = {
    getHelloWorld(args) {
        return promisify(callback =>
            dynamoClient.query(
                {
                    TableName: 'HelloWorld',
                    KeyConditionExpression: 'id = :v1',
                    ExpressionAttributeValues: {
                        ':v1': args.id,
                    },
                },
                callback
            )
        ).then(result => {
            return result.Items[0];
        });
    },
};

export default {
    Query: {
        helloWorld: (root, args) => queryFunctions.getHelloWorld(args),
    }
};