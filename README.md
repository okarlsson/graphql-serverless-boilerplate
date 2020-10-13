# Serverless-GraphQL Boilerplate

This is a simple boilerplate to get a GraphQL API producing "Hello World!" in Aws Lambda.

## Getting started

Requires `node` >= 8.10 and Java Runtime Engine >= 6.x

```
git clone git@github.com:okarlsson/graphql-serverlesss-boilerplate.git
cd graphql-serverlesss-boilerplate
npm install
npm start
```

This will install and start a a local DynamoDB on your machine on localhost:8000 and start your GraphQL server on localhost:3000

## Test it out

Visit the playground on [http://localhost:3000/local/playground](http://localhost:3000/local/playground)

### Enter a query

```
query{
  helloWorld{
    id
    message
  }
}
```

Run the query and see the result from your DynamoDB table!

## Deploy

1. Enter the region you want to deploy to in your serverless.yml file.

2. Enter your IAM credentials from AWS into your .aws folder and credentials file

```
[default]
aws_access_key_id=XXXX
aws_secret_access_key=XXXXX
```

_Or export the variables in your shell_

```
export AWS_ACCESS_KEY_ID=XXXX
export AWS_SECRET_ACCESS_KEY=XXXXX
```

3. Run:

```
sls deploy
```

4. The cli will now print your endpoint url in the console, just copy and paste it into your web browser!
