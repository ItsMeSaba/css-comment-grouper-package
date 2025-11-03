#!/usr/bin/env node

import { join } from 'path';
import { readdir } from 'fs/promises';
import { isFolder } from './utils/is-folder';
import { isCssFile } from './utils/is-css-file';
import { handleCssFile } from './utils/handle-css-file';

const args = process.argv.splice(2);

const folder = args[0] ?? './src';

async function main(location: string) {
  try {
    const files = await readdir(location);

    for (let file of files) {
      if (isFolder(file)) main(join(location, file));
      else if (isCssFile(file)) handleCssFile(join(location, file));
    }
  } catch (e) {
    console.log(`${location} is not folder`);
  }
}

main(folder);
