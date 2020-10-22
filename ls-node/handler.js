'use strict';

module.exports.hello = async event => {
  console.log("Executed!!!")
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'From LocalStack',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
