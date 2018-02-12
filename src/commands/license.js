require(`colors`);

module.exports = {
  name: `--license`,
  description: `Prints license`,
  execute() {
    console.log(`Kekstagram, license: ${require(`../../package.json`).license.yellow}`);
  }
};
