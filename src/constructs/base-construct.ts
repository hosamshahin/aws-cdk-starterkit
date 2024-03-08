import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class BaseConstruct extends Construct {
  public readonly stage: string;
  public readonly account: string;
  public readonly region: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.stage = process.env.ENVIRONMENT || 'dev';
    this.account = cdk.Stack.of(this).account;
    this.region = cdk.Stack.of(this).region;
  }
}
