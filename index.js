const core = require("@actions/core");
const path = require("path");
const fs = require("fs");
const { render } = require("./util");

async function run() {
  try {
    const jsonFilePath = core.getInput("json", {
      required: true
    });

    // Parse the task definition
    const jsonAbsolutePath = path.isAbsolute(jsonFilePath)
      ? jsonFilePath
      : path.join(process.env.GITHUB_WORKSPACE, jsonFilePath);

    if (!fs.existsSync(jsonAbsolutePath)) {
      throw new Error(`Json file does not exist: ${jsonFilePath}`);
    }

    const jsonObj = require(jsonAbsolutePath);

    const result = render(jsonObj);

    console.log(result);

    // Write out a new task definition file
    var tempFile = tmp.fileSync({
      dir: process.env.RUNNER_TEMP,
      prefix: "json-rendered-",
      postfix: ".json",
      keep: true,
      discardDescriptor: true
    });

    const newJsonObj = JSON.stringify(result, null, 2);
    fs.writeFileSync(tempFile.name, newJsonObj);
    core.setOutput("result", tempFile.name);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
