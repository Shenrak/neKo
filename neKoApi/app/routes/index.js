const filenames = [
  'test',
  // 'chat',
  // 'users',
];

module.exports = filenames.map(filename => `${__dirname}/${filename}`)
                          .map(require);
