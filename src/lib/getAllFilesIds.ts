import fs from "fs";
import path from "path";
import { IFileName } from "../interfaces";

export function getAllFilesIds(dir: string): IFileName[] {
  const directory = path.resolve(process.cwd(), "src", "data", "pages", dir);

  const fileNames = fs.readdirSync(directory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
