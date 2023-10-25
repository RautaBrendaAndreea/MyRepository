import chalk from 'chalk';

const collegues = [
  { name: 'Collegue1', color: 'blue' },
  { name: 'Collegue2', color: 'green' },
  { name: 'Collegue3', color: 'red' },
  { name: 'Collegue4', color: 'yellow' },
];

collegues.forEach((collegue) => {
  console.log(chalk[collegue.color](collegue.name));
});
