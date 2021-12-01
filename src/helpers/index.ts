import fs from "fs";
import path from "path";
import fp from "lodash/fp";

export const getInput = (challengeFilePath: string) => {
  const dayString = path.basename(challengeFilePath).replace(/\D+/g, "");

  const content = fs.readFileSync(`./src/input/${dayString}.txt`).toString();

  return content;
};

export const createGetFormattedInput = <T>(format: (rawInput: string) => T) =>
  fp.flow(getInput, format);
