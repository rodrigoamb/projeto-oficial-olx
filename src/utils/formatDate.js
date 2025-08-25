export function formatDate(isoDate) {
  const date = isoDate.split("T")[0];
  const time = isoDate.split("T")[1].split(".")[0];
  const hours = time.split(":")[0];
  const minutes = time.split(":")[1];
  const [year, month, day] = date.split("-");

  return `${day}/${month}/${year} às ${hours}:${minutes}`;
}
