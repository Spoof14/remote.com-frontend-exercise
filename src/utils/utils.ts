import { Currency } from 'types/types';

// Orignal thought was to use a map to store currency and character combinations
// which is also fine if we don't want to have different formats depending on the user origin.
export function formatSalary(value: number, currency: Currency) {
  if (!currency) return new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2 }).format(value);
  return `${currency} ${new Intl.NumberFormat('de-DE', { style: 'currency', currency }).format(
    value,
  )}`;
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
