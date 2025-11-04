import { extname } from "path"

const acceptedExtension = [".css", ".scss"];

export function isCssFile(path: string) {
  return acceptedExtension.includes(extname(path));
}