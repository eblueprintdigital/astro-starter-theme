/**
 * Format a date string into a human-readable format
 * @param dateString - ISO date string or Date object
 * @param options - Intl.DateTimeFormatOptions for customizing the output
 * @returns Formatted date string
 */
export function formatDate(
  dateString: string | Date,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  const date =
    typeof dateString === 'string' ? new Date(dateString) : dateString;

  // Make sure the date is valid
  if (isNaN(date.getTime())) {
    console.error(`Invalid date: ${dateString}`);
    return 'Invalid date';
  }

  return date.toLocaleDateString('en-US', options);
}
