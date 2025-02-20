export function generateRandomId(len) {
  let id = "";
  let randomNum;
  for (let i = 0; i < len; i++) {
    randomNum = Math.floor(Math.random() * 10);
    id += randomNum;
  }

  return id;
}
