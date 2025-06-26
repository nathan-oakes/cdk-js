const { Stack, Duration } = require('aws-cdk-lib');
const sqs = require('aws-cdk-lib/aws-sqs');
const { Construct } = require('constructs');

class SqsStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    new sqs.Queue(this, 'NathanTestQueue', {
      queueName: 'NathanTest',
      visibilityTimeout: Duration.seconds(300),
    });
  }
}

module.exports = { SqsStack };
