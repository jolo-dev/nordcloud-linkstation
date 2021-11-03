import { expect, haveResource } from "@aws-cdk/assert";
import * as sst from "@serverless-stack/resources";
import Backend from "../stacks/Backend";

test("Test Backend Stack", () => {
  const app = new sst.App();
  // WHEN
  const stack = new Backend(app, "Backend");
  // THEN
  expect(stack).to(haveResource("AWS::Lambda::Function"));
  expect(stack).to(haveResource("AWS::ApiGateway::Api"));
});
