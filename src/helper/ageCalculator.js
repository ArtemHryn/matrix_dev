import { intervalToDuration } from 'date-fns';

export const ageCalculator = (day, month, year) => {
  const { years } = intervalToDuration({
    start: new Date(),
    end: new Date(year, month - 1, day),
  });
  return years;
};
