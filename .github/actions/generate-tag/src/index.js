import * as core from "@actions/core";

try {
  const prefix = core.getInput("prefix");
  const runNumber = process.env.GITHUB_RUN_NUMBER;

  if (!runNumber) {
    throw new Error("GITHUB_RUN_NUMBER is not available");
  }

  const tag = `${prefix}${runNumber}`;

  core.info(`Generated tag: ${tag}`);
  core.setOutput("tag", tag);
  
} catch (error) {
  const message = error instanceof Error 
    ? error.message
    : String(error);
  
  core.setFailed(message);
}