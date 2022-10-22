export function formatDollar(num) {
  var p = num.toFixed(2).split(".");
  return (
    "$" +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num + (num != "-" && i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export function percentage(num, per) {
  return (num / 100) * per;
}

export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
