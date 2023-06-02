import { readFile, writeFile } from "fs/promises"
import { groupCSS } from "../..";

export async function handleCssFile(path: string) {
  try {
    const css = await readFile(path, "utf-8");

    const commentedCss = groupCSS(css);
    
    await writeFile(path, commentedCss, "utf8")
  } catch(e) {
    console.log("Failed to comment file at", path)
  }
}