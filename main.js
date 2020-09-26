const firstRow = 'мама мыла раму';
const SecondRow = 'собака друг человека';

const calcSymbol = (str, symbol) => {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === symbol) {
        result += 1
    }
  }
  return result
}

const getRow = (str1, str2) => {
  return (calcSymbol(str1, 'a') > calcSymbol(str2, 'a')) ? str1 : str2
}

console.log(getRow(firstRow, SecondRow))
