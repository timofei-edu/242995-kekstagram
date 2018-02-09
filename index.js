const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`Кекстаграм - инстаграм для котиков
Автор: Тимофей Б.`);
  process.exit(0);
}

switch (args[0]) {
  case `--version`:
    console.log(`v0.0.1`);
    break;
  case `--help`:
    console.log(`Доступные команды:
--help    — печатает доступные команды;
--version — печатает версию приложения;`);
    break;
  default:
    console.error(`Неизвестная команда "${args[0]}".
Для просмотра доступных команд используйте --help`);
    process.exit(1);
}
