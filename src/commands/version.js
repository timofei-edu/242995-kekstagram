require(`colors`);

module.exports = {
  name: `--version`,
  description: `Prints version`,
  execute() {
    const [major, minor, patch] = require(`../../package.json`).version.split(`.`);
    console.log(`Kekstagram, version: ${major.red}.${minor.green}.${patch.blue}`);
  }
};
