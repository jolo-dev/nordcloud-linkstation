import * as sst from "@serverless-stack/resources";

export default class BackendStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Use SST Function Construct
    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /api/best-powerstation/{x}/{y}": "../../backend/handler.py",
      },
      defaultFunctionProps: {
        handler: "../../backend/handler.py",
        runtime: "python3.8",
        srcPath: "../../backend"
      }
    });

    // Show API endpoint in output
    this.addOutputs({
      ApiEndpoint: api.url,
    });

  }
}
