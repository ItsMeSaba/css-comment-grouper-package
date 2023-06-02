import { dirname, basename, extname } from "path"

const foldersToExclude = ["node_modules", "dist", "build", ".git"];

export function isFolder(path: string) {
  if (extname(path).length > 0) return false;

  if (foldersToExclude.includes(basename(path))) return false;

  return true;
}