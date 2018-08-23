# Serverless-GraphQl Boilerplate

This is a simple boilerplate to get a GraphQl API producing "Hello World!" in Aws Lambda.  

## Getting started

Requires `node` >= 8.10

```
git clone git@github.com:okarlsson/graphql-serverlesss-boilerplate.git
cd graphql-serverlesss-boilerplate
npm install
sls offline start
```
Visit http://localhost:3000/graphql to test your requests. Enter {hello} and click play to view the result of your query.

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
serverless deploy
```

4) The cli will now print your endpoint url in the console, just copy and paste it into your web browser!
