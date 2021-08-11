export const parseDate = (string) =>
  new Date(string).toDateString().split(" ").slice(1).join(" ");
