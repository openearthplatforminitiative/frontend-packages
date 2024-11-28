import { exec } from 'child_process';

const baseDir = './src/icons/';
const from = '../../node_modules/@material-symbols/svg-400/outlined/*.svg';
const to = baseDir

const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
};

const generateIcons = async () => {
  console.log(`Generating icons...`);
  try {
    await runCommand(`svgr --typescript --out-dir "${to}" --icon -- "${from}"`);
    console.log(`Icons generated successfully.`);
  } catch (error) {
    console.error(`Error generating icons: ${error}`);
  }
};

generateIcons();