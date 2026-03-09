import parse from "./parser.js";
import * as fs from "node:fs";

if (process.argv.length < 3) {
  console.log('Usage: node baby.js <name>');
  process.exit(1);
}


const name = process.argv[2];
const sourceCode = fs.readFileSync(name, "utf-8");
const parseTree = parse(sourceCode);
if (parseTree.succeeded()) {
  console.log("Parse succeeded!");
} else {
  console.error(parseTree);
}