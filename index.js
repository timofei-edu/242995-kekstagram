const packageInfo = require(`./package`);
require(`colors`);

const commands = [
  require(`./src/commands/version`),
  require(`./src/commands/author`),
  require(`./src/commands/license`),
  require(`./src/commands/description`)
];

const argv = process.argv.slice(2);

if (argv.length === 0) {
  console.log(`${packageInfo.name} - ${packageInfo.description}`);
  process.exit(0);
}

const firstArg = argv[0];

if (firstArg === `--help`) {
  console.log(`Available commands:`);
  commands.forEach((command) => console.log(`${command.name.gray}\t${command.description.green}`));
  console.log(`\n${`--help`.gray}\t${`Shows help`.green}`);
  process.exit(0);
}

const currentCommand = commands.find((command) => firstArg === command.name);

if (!currentCommand) {
  console.error(`Unrecognized command: "${firstArg}". Run "node index.js --help" for usage.`);
  process.exit(1);
} else {
  currentCommand.execute();
  process.exit(0);
}
