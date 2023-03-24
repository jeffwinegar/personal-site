import getReadingTime from 'reading-time';

export function getTimeToRead(content: string) {
  if (!content) return;

  const textOnPage = content.replace(/<\/?[^>]+(>|$)/g, '');
  const readingTime = getReadingTime(textOnPage);

  return readingTime.text;
}
