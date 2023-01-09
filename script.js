window.onload = function () {
  let word = "прокрастинація";
  let count = 0;
  let remain;
  let answer = []; // що відкрито
  const countElement = document.getElementById("count");
  let remainElement = document.getElementById("remain");

  function init() {
    answer[0] = word[0]; // перша літера буде відкрита
    answer[word.length - 1] = word[word.length - 1]; // остання літера буде відкрита
    remain = word.length - 2;

    for (let i = 1; i < word.length - 1; i++) {
      answer[i] = "_"; // між першою та останньою літерою - знаки підкреслення
    }

    console.log(answer);
    console.log(answer.join(" "));
    let answ = document.getElementById("answ");
    answ.innerHTML = answer.join(" ");
  }
  function check() {
    let guess = prompt("Введіть літеру:");

    for (let i = 0; i < word.length; i++) {
      // проходимо рядок word поелементно, як масив
      if (word[i] === guess) {
        // якщо літера рядка збіглася з вгаданою
        answer[i] = guess; // записуємо її до масиву відкритих букв
        remain--; // зменшуємо на 1 кількість спроб, що залишилися.
        remainElement.innerHTML = "Залишилось " + remain + " спроб";
      }
    }
    count++;
    countElement.innerHTML = `Було ${count} спроб`;
    answ.innerHTML = answer.join(" ");
  }

  const guessButton = document.getElementById("guess");
  guessButton.addEventListener("click", check);

  if (count == 10 && remain == 0) {
    alert("Ви перемогли!");
  } else {
    alert("Ви програли!");
  }

  init();
};
