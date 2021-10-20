import { createPassword } from "./utils/createPassword.js";
import commander from "commander";
import chalk from "chalk";
import clipboardy from "clipboardy";

const program = commander;
const out = chalk;
const clipboard = clipboardy;

program.version("1.0.0").description("CLI based Password Generator");

program
  .option("-l,--length <number>", "length of generated password", "8")
  .option("-s,--save", "save password to passwords.txt")
  .option("-nn,--no-numbers", "remove numerical characters from password")
  .option("-ns,--no-symbols", "remove symbols from password")
  .parse();

const { length, save, numbers, symbols } = program.opts();

//Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

//Copy to clipboard
clipboard.writeSync(generatedPassword);
console.log(out.blue("Generated password:") + out.bold(generatedPassword));
console.log(out.yellow("Password copied to clipboard!"));
