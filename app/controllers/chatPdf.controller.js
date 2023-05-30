const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

exports.getPdfChat = async (req, res) => {
  try {
    // Run a command
    // const ingestScriptPath = path.join(process.cwd(), '/privateGPT/ingest.py');
    // let ingestCommand = `python3 ${ingestScriptPath}`;
    // const ingestResult = await execSync(ingestCommand, { encoding: 'utf-8', stdio: 'pipe' });
    // console.log('ingestResult..................',ingestResult);
    const scriptPath = path.join(process.cwd(), '/privateGPT/privateGPT.py');
    let pyCommand = `python3 ${scriptPath}`;
    let pythonCommand = `${pyCommand} ${req.body.question}`;
    const result = await execSync(pythonCommand, { encoding: 'utf-8', stdio: 'pipe' });
    console.log('result..................',result);
    res.status(200).send({
      message: "Answer get successfully.",
      data: result,
      error: [],
    });
  } catch (error) {
    console.log('error...........',error)
    res.status(400).send({
      message: "something went wrong",
      data: [],
      error: error
    });
  }
}