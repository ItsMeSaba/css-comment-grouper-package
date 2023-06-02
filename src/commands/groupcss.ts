#!/usr/bin/env node

import { readdir, stat, writeFile } from "fs/promises"
import { extname, join } from "path"
import { isFolder } from "./utils/isFolder";
import { isCssFile } from "./utils/isCssFile";
import { handleCssFile } from "./utils/handleCssFile";

const args = process.argv.splice(2);

const folder = args[0] ?? "./src";

async function main(location: string) {
  try {
    const files = await readdir(location);

    for (let file of files) {
      if (isFolder(file)) main(join(location, file))

      else if (isCssFile(file)) handleCssFile(join(location, file));
    }
  } catch(e) {
    console.log(`${location} is not folder`)
  }
}

main(folder)