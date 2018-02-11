module.exports = {
  name: `--version`,
  description: `Prints version`,
  execute() {
    console.log(`Kekstagram, version: ${require(`../../package.json`).version}`);
  }
};
