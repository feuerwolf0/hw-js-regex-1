import Validator from '../functions';

test.each([
  ['Правильный никнейм', 'user12user', true],
  ['Правильный никнейм', 'us_er-us666er', true],
  ['Неправильный никнейм', '12useruser', false],
  ['Неправильный никнейм', 'useruser442', false],
  ['Неправильный никнейм', '_useruser-', false],
  ['Неправильный никнейм', 'use4444ruser', false],
  ['Неправильный никнейм', 'useruser442', false],
])('Проверка: %s: %s', (title, username, bool) => {
  const validator = new Validator();
  const result = validator.validateUsername(username);
  expect(result).toBe(bool);
});
