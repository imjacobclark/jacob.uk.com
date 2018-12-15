// Using "import" broke the webpack transpilation and lost the handler... odd
const Dependencies = require('../Dependencies').default;

const dependencies = new Dependencies();

/*
    This needs to be aws-express-serverless... eventually
    Also dependencies need injecting...
*/
exports.handler = (event, context, callback) => {
  const html = dependencies.getRenderer()(event.requestContext.resourcePath);

  callback(null, {
    isBase64Encoded: false,
    statusCode: 200,
    headers: {
      'content-type': 'text/html',
    },
    body: html,
  });
};
