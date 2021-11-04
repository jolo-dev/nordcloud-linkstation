import FrontendStack from "./stacks/Frontend";
import BackendStack from "./stacks/Backend";

import * as sst from "@serverless-stack/resources";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "python3.8"
  });

  new BackendStack(app, "backend-stack");
  
  new FrontendStack(app, "frontend-stack");
}
