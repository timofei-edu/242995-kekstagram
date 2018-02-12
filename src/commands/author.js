require(`colors`);

module.exports = {
  name: `--author`,
  description: `Prints author name`,
  execute() {
    console.log(`Kekstagram, author: ${require(`../../package.json`).author.blue}`);
  }
};
