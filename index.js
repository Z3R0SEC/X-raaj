const fs = require("fs").promises;
const fsx = require("fs");
const path = require("path");
const config = require("./config");
const connect = require("./lib/connection");
const { getandRequirePlugins } = require("./assets/database/plugins");
const { UpdateLocal, WriteSession} = require("./lib");
const express = require("express");

const app = express();
const port = 3682;

global.__basedir = __dirname;

async function auth() {
  try {
    if (!fsx.existsSync("./session/creds.json")) {
      await WriteSession();
    }
    return initialize();
  } catch (error) {
    console.error("[+] Failed To Get Session File:", error);
    return process.exit(1);
  }
}

const readAndRequireFiles = async (directory) => {
  try {
    const files = await fs.readdir(directory);
    return Promise.all(
      files
        .filter((file) => path.extname(file).toLowerCase() === ".js")
        .map((file) => require(path.join(directory, file)))
    );
  } catch (error) {
    console.error("Error reading and requiring files:", error);
    throw error;
  }
};

async function initialize() {
  console.log("============> X-RaaJ-K [Z3R0SEC] <============");
  try {
    await readAndRequireFiles(path.join(__dirname, "/assets/database/"));
    console.log("Syncing Database");
    await config.DATABASE.sync();
    console.log("⬇  Installing Plugins...");
    await readAndRequireFiles(path.join(__dirname, "/assets/plugins/"));
    await getandRequirePlugins();
    console.log("✅ Plugins Installed!");
    return  await connect();
  } catch (error) {
    console.error("Initialization error:", error);
    return process.exit(1); // Exit with error status
  }
}

auth();

app.get("/", (req, res) => {
    res.send("Hacker App Activated");
});

app.listen(port, () => {
    console.log(`Hosted: http://localhost:${port}`);
});
