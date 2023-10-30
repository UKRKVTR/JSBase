const word = prompt("Введіть слово");
const div = document.querySelector(".window");

for (let i = 0; i < word.length; i++) {
  console.log(word.charAt(i));
}

function getRow(firstWord, secondWord) {
  const aInFirst = (firstWord.match(/a/g) || []).length;
  const aInSecond = (secondWord.match(/a/g) || []).length;

  if (aInFirst > aInSecond) {
    return firstWord;
  } else if (aInSecond > aInFirst) {
    return secondWord;
  } else {
    if (firstWord.length > secondWord.length) {
      return firstWord;
    } else if (secondWord.length > firstWord.length) {
      return secondWord;
    } else {
      return "Кількість 'а' в обох рядках однакова.";
    }
  }
}

const firstWord = "мама мыла раму";
const secondWord = "папа мыла раму";

const rez = getRow(firstWord, secondWord);
div.textContent = rez;
