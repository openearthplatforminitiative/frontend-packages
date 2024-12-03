import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
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
    await runCommand(`svgr --typescript --jsx-runtime "automatic" --out-dir "${to}" --icon -- "${from}"`);
    console.log(`Icons generated successfully.`);
  } catch (error) {
    console.error(`Error generating icons: ${error}`);
  }
  console.log("Create index file...");
  const indexFile = path.join(to, 'index.ts');
  const files = fs.readdirSync(to);
  const exportEntries = files.map((file) => {
    const basename = path.basename(file, path.extname(file));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    if (exportName === 'index') return ''; 
    return `export { default as ${exportName} } from './${basename}'`;
  })
  fs.writeFileSync(indexFile, exportEntries.join('\n'));
  console.log(`Index file created successfully.`);
};

generateIcons();