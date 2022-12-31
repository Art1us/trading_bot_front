export default function convertDate(date) {
  const [year, month, day] = date.split("-");
  return [month, day, year].join("/");
}
