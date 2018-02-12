require(`colors`);

module.exports = {
  name: `--description`,
  description: `Prints description`,
  execute() {
    console.log(`Kekstagram, description: ${require(`../../package.json`).description.green}`);
  }
};
