import * as sst from '@serverless-stack/resources';

export default class FrontendStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Use SST NextJs Construct
    new sst.NextjsSite(this, 'Frontend', {
      path: '../../frontend'
    });

  }
}
