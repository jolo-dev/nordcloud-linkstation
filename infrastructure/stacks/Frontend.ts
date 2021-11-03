import * as sst from '@serverless-stack/resources';
import {Fn, CfnOutput} from '@aws-cdk/core'
import path from 'path'

export default class FrontendStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const apiValue = Fn.importValue('ApiEndpoint');
    // Use SST NextJs Construct
    const nextJs = new sst.NextjsSite(this, 'Frontend', {
      path: path.join(__dirname, '../..', 'frontend'),
      environment: {
        "API_URL": apiValue
      }
    });

    this.addOutputs({
      "NextJsURL": nextJs.url
    });

    new CfnOutput(this, 'NextJsURLOutput', {
      value: nextJs.url,
      description: 'The URL of the NextJS Site',
      exportName: 'NextJsURL',
    });
  }
}
