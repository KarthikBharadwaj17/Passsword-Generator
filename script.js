const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 15;

function getPasswordChar() {
  let randomChar = Math.floor(Math.random() * characters.length);
  for (let i = 0; i < characters.length; i++) {
    return characters[randomChar];
  }
}

function passwordGenerator() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += getPasswordChar();
  }
  return password;
}

function generatePassword() {
  const randomPasswordOne = passwordGenerator();
  console.log(randomPasswordOne);

  const randomPasswordTwo = passwordGenerator();
  console.log(randomPasswordTwo);

  let passwordElOne = document.getElementById("password-el-1");
  let passwordElTwo = document.getElementById("password-el-2");

  passwordElOne.textContent = randomPasswordOne;
  passwordElTwo.textContent = randomPasswordTwo;
}
