import * as sst from "@serverless-stack/resources";
import path from 'path'
import {CfnOutput} from '@aws-cdk/core'

export default class BackendStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Use SST Function Construct
    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /api/best-powerstation/{x}/{y}": "handler.handler",
      },
      defaultFunctionProps: {
        handler: path.join(__dirname, '../..', 'backend/handler.py'),
        srcPath: path.join(__dirname, '../..', 'backend')
      }
    });

    // Show API endpoint in output
    this.addOutputs({
      "ApiEndpoint": api.url,
    });

    new CfnOutput(this, 'ApiEndpointOutput', {
      value: api.url,
      description: 'The endpoint of this API',
      exportName: 'ApiEndpoint',
    });

  }
}
