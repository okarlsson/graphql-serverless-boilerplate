# Serverless-GraphQl Boilerplate

This is a simple boilerplate to get a GraphQl API producing "Hello World!" in Aws Lambda.  

## Getting started

Requires `node` >= 8.10 and Java Runtime Engine >= 6.x

```
git clone git@github.com:okarlsson/graphql-serverlesss-boilerplate.git
cd graphql-serverlesss-boilerplate
npm install
npm start
```
This will install and start a a local DynamoDB on your machine on localhost:8000 and start your GraphQl server on localhost:3000

Visit http://localhost:3000/playground to test your requests. Enter the following query to se the Hello World! message from your new Dynamo table

```
{
  helloWorld(id:1){
    id,
    message
  }
}
```

## Deploy

1) Enter the region you want to deploy to in your serverless.yml file.

2) Enter your IAM credentials from AWS into your .aws folder and credentials file

```
[default]
aws_access_key_id=XXXX
aws_secret_access_key=XXXXX
```

3) Run:
```
sls deploy
```

4) The cli will now print your endpoint url in the console, just copy and paste it into your web browser!
