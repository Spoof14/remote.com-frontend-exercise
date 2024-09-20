import typography from 'theme/typography';

export type Currency = 'EUR' | 'USD' | 'GBP';

export type Person = {
  id: number;
  name: string;
  jobTitle: string;
  country: string;
  salary: number;
  currency: Currency;
  employment: string;
};

export type FontSize = keyof typeof typography;
