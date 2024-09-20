import { describe, expect, it } from 'vitest';
import { capitalizeFirstLetter, formatSalary } from './utils';
import { Currency, Person } from 'types/types';

const person: Person = {
  id: 1,
  name: 'Ann Henry',
  jobTitle: 'Product manager',
  country: 'Germany',
  salary: 120000,
  currency: 'EUR',
  employment: 'employee',
};

// It returns a string with a non-breaking space, so I replace it with a real space for the tests
const formatSalaryWithReplace = (value: number, currency: Currency) =>
  formatSalary(value, currency).replace(' ', ' ');

describe('formatSalary', () => {
  it('should format a EUR salary correctly', () => {
    const salary = formatSalaryWithReplace(person.salary, person.currency);
    expect(salary).toBe('EUR 120.000,00 €');
  });

  it('should format a USD salary correctly', () => {
    const salary = formatSalaryWithReplace(person.salary, 'USD');
    expect(salary).toBe('USD 120.000,00 $');
  });

  it('should format a GBP salary correctly', () => {
    const salary = formatSalaryWithReplace(person.salary, 'GBP');
    expect(salary).toBe('GBP 120.000,00 £');
  });

  it('should format a missing currency correctly', () => {
    // In this case we lie to TS because we can't be 100% sure about what we receive from the backend
    const salary = formatSalaryWithReplace(person.salary, '' as Currency);
    expect(salary).toBe('120.000,00');
  });
});

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a string', () => {
    const capitalized = capitalizeFirstLetter('hello');
    expect(capitalized).toBe('Hello');
  });
});
