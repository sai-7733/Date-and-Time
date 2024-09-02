const now = new Date();
const formattedDate = now.toLocaleString();
console.log(formattedDate);
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(
  `Current Date and Time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
);
