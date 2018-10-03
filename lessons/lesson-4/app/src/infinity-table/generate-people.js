const fname = [
  'Oleg',
  '~Katsia',
  'John',
  'Viktor',
  '#Sue',
  'JavaScript',
  '<Thomas',
  '>Sergei',
  'Snehal',
  'Oleg',
  'Divia'
];
const lname = [
  'Peterson',
  'Oleg',
  'Johnson-Petrov-Sannikov-Ivanov-Smirnov',
  'Cuban',
  'Twist',
  'Sidorov',
  'Vasiliev',
  'React',
  'Yahoo'
];

export function generate(count) {
  // generate
  const records = [];

  // add records
  for (let i = 0; i < count * 1000; i++) {
    records.push({
      recid: i + 1,
      personid: i + 1,
      fname: fname[Math.floor(Math.random() * fname.length)],
      lname: lname[Math.floor(Math.random() * lname.length)],
      email: 'olehlustenko@epam.com',
      email2: 'olehlustenko@epam.com',
      email3: 'olehlustenko@epam.com',
      email4: 'olehlustenko@epam.com',
      email5: 'olehlustenko@epam.com',
      sdate: '1/1/2016',
      manager: '--'
    });
  }

  return records;
}

generate(35);
