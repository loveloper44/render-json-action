const core = require("@actions/core");
const path = require("path");
const fs = require("fs");
const { render } = require("./util");

async function run() {
  try {
    const jsonFile = core.getInput("json", {
      required: true
    });

    // Parse the task definition
    const jsonPath = path.isAbsolute(jsonFile)
      ? jsonFile
      : path.join(process.env.GITHUB_WORKSPACE, jsonFile);

    if (!fs.existsSync(jsonPath)) {
      throw new Error(`Json file does not exist: ${jsonFile}`);
    }

    const taskDefContents = require(jsonPath);

    const result = render(taskDefContents);

    console.log(result);

    core.setOutput("result", result);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
