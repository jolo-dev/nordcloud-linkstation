import * as sst from "@serverless-stack/resources";
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda'
import { CfnOutput } from '@aws-cdk/core'

export default class BackendStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const api = new apigateway.RestApi(this, 'api', {
      description: 'example api gateway',
      deployOptions: {
        stageName: 'dev',
      },
    });

    // 👇 create an Output for the API URL
    new CfnOutput(this, 'ApiEndpointOutput', {
      value: api.url,
      description: 'The endpoint of this API',
      exportName: 'ApiEndpoint',
    });


    const dockerImageFunction = new lambda.DockerImageFunction(this, 'FastAPIDocker', {
      code: lambda.DockerImageCode.fromImageAsset('../backend')
    })

    api.root.addMethod('GET', new apigateway.LambdaIntegration(dockerImageFunction, { proxy: true }))

  }
}

