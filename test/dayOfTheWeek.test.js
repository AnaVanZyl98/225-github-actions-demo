const { dayOfTheWeek } = require('../src/app');

describe('Day of the week function', () => {
  test('It should check that the date is correponding to the correct day of the week', () => {
    const day = dayOfTheWeek(new Date('3/11/2020'));
    expect(day).toBe('Wednesday');
  });
});
