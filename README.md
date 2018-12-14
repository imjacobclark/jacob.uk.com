# jacobclark.xyz

A universal React app powering [jacobclark.xyz](https://www.jacobclark.xyz).

# Stack

* Node.js
* React
* Redux
* Express *
* AWS Lambda *
* Webpack
* Babel
* Jest
* ESLint
* Supertest

*Both Express and Lambda runtimes are built via webpack out the box.

## Versions:

* Node version: 9.0.4
* npm 5.6.0

# Building and running

```shell
$ npm install
$ npm run build
$ npm start
```

This will spin up a local Express server running  at [localhost:3000](http://localhost:3000).

# Testing

```shell
$ npm install
$ npm test
```

# Heroku

Deployed on the free tier of Heroku at [http://six.jacobclark.xyz/](http://six.jacobclark.xyz/). Supports server and client side rendering.

# AWS Lambda

This application can be run on AWS Lambda. 

It currently only supports server side rendering, whilst a client side bundle is generated and loaded up - I haven't yet written any CloudFormation to orchestrate the creation of S3 buckets to the bundle.

`npm run build` will create a `dist/lambda.js` file which can be uploaded to an AWS Lambda function and fronted via an AWS API Gateway.