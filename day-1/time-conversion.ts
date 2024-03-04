/***
    Given a time in -hour AM/PM format, convert it to military (24-hour) time.
    Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
    - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 */

function timeConversion(s: string): string {
  const amOrPm = s.slice(s.length - 2);
  let hours = s.slice(0, 2);
  const seconds = s.slice(6, 8);
  const minutes = s.slice(3, 5);

  if (amOrPm == "AM" && Number(hours) == 12) {
    return `00:${minutes}:${seconds}`;
  }

  if (amOrPm == "AM") return `${hours}:${minutes}:${seconds}`;
  if (amOrPm == "PM" && Number(hours) == 12)
    return `${hours}:${minutes}:${seconds}`;

  return `${Number(hours) + 12}:${minutes}:${seconds}`;
}

timeConversion("06:24:09AM");
