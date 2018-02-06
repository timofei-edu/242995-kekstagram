const args = process.argv.slice(2);

switch (args[0]) {
  case `--version`:
    console.log("v0.0.1");
    break;
  case `--help`:
    console.log(`Доступные команды:
--help    — печатает доступные команды;
--version — печатает версию приложения;`);
    break;
  case undefined:
    console.log(`Кекстаграм - инстаграм для котиков
Автор: Тимофей Б.`);
    break;
  default:
    console.error(`Неизвестная команда "${args[0]}".
Для просмотра доступных команд используйте --help`);
    process.exit(1);
}
