import { expect, haveResource } from "@aws-cdk/assert";
import * as sst from "@serverless-stack/resources";
import Frontend from "../stacks/Frontend";

test("Test Stack", () => {
  const app = new sst.App();
  // WHEN
  const stack = new Frontend(app, "frontend");
  // THEN
  expect(stack).to(haveResource("AWS::Lambda::Function"));
});
