#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { SqsStack } = require('./sqs-stack');

const app = new cdk.App();
new SqsStack(app, 'NathanTestSqsStack');
app.synth();
