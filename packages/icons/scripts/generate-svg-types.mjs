import { readdir, writeFile } from 'fs/promises';
import { basename } from 'path';

const outputFile = './src/types.ts';

const generateIconTypes = async() => {

  let typeDeclarations = '// Auto-generated icon types\n';
  typeDeclarations += 'export type IconName = \n';

  try {
    const files = await readdir("./src/icons/outlined");
    const something = files.filter((file) => file.endsWith('.js'));
    console.log(`Total .js files: ${something.length}`);
    const jsFiles = files.filter((file) => file.endsWith('FormatColorFill.js') || !file.endsWith('Fill.js'));
    jsFiles.forEach((file) => {
      const iconName = basename(file, '.js');
      typeDeclarations += `  | "${iconName}"\n`;
    });

    console.log(`Total .js files: ${jsFiles.length}`);
  } catch (err) {
    console.error(`Error reading files: ${err.message}`);
  }

  try {
    await writeFile(outputFile, typeDeclarations, 'utf8');
    console.log(`Icon types generated in ${outputFile}`);
  } catch (err) {
    console.error(`Error writing to ${outputFile}: ${err.message}`);
  }
}

generateIconTypes();