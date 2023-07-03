let game = document.querySelector(".gameContainer");

let score = document.querySelector(".score");

const jeopardyCategories = [
  {
    genre: "WHO",
    question: [
      {
        question: "Who wrote Harry Potter?",
        answers: ["J.K. Rowling", "J.R.R. Tolkien"],
        correct: "J.K. Rowling",
        level: "easy",
      },
      {
        question: "Who was born on Krypton?",
        answers: ["Superman", "Aquaman"],
        correct: "Superman",
        level: "medium",
      },
      {
        question: "Who Designed the first car?",
        answers: ["Karl Benz", "Henry Ford"],
        correct: "Karl Benz",
        level: "hard",
      },
    ],
  },
  {
    genre: "WHERE",
    question: [
      {
        question: "Where is Buckinghamn Palace",
        answers: ["Richmond", "London"],
        correct: "London",
        level: "easy",
      },
      {
        question: "Where is the Colosseum?",
        answers: ["Rome", "Milan"],
        correct: "Rome",
        level: "medium",
      },
      {
        question: "Where is Mount Kilamanjaro?",
        answers: ["Zimbabwe", "Tanzania"],
        correct: "Tanzania",
        level: "hard",
      },
    ],
  },
  {
    genre: "WHEN",
    question: [
      {
        question: "When is Christmas?",
        answers: ["Jan 30", "Dec 25"],
        correct: "Dec 25",
        level: "easy",
      },
      {
        question: "When was WWII?",
        answers: ["1932", "1941"],
        correct: "1941",
        level: "medium",
      },
      {
        question: "When was JFK shot?",
        answers: ["1963", "1961"],
        correct: "1963",
        level: "hard",
      },
    ],
  },
  {
    genre: "WHAT",
    question: [
      {
        question: "What is kg short for?",
        answers: ["Kilojoule", "Kilogram"],
        correct: "Kilogram",
        level: "easy",
      },
      {
        question: "What do koalas eat?",
        answers: ["straw", "Eucalyptus"],
        correct: "Eucalyptus",
        level: "medium",
      },
      {
        question: "What is the capital of Saudi Arabia?",
        answers: ["Jeddah", "Riyadh"],
        correct: "Riyadh",
        level: "hard",
      },
    ],
  },
  {
    genre: "HOW MANY",
    question: [
      {
        question: "How man players in a football team?",
        answers: ["15", "11"],
        correct: "11",
        level: "easy",
      },
      {
        question: "How man seconds are in an hour?",
        answers: ["36000", "3600"],
        correct: "3600",
        level: "medium",
      },
      {
        question: "How man people are in China?",
        answers: ["1.1 billion", "1.4 billion"],
        correct: "1.4 billion",
        level: "hard",
      },
    ],
  },
];

let playerScore = 0;

const getResult = () => {
  const allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach((card) => card.addEventListener("click", flipCard()));

  const cardOfButton = this.parentElement;

  if (cardOfButton.getAttribute(dataCorrect) == this.innerHTML) {
    playerScore =
      playerScore + parseInt(cardOfButton.getAttribute("dataValue"));
    score.innerHTML = playerScore;
    cardOfButton.classList.add(".correctAnswer");
    setTimeout(() => {
      while (cardOfButton.firstChile) {
        cardOfButton.removeChild(cardOfButton.lastChild);
      }

      cardOfButton.innerHTML = cardOfButton.getAttribute("dataValue");
    }, 100);
  } else {
    cardOfButton.classList.add(".wrongAnswer");
    setTimeout(() => {
      while (cardOfButton.firstChile) {
        cardOfButton.removeChild(cardOfButton.lastChild);
      }

      cardOfButton.innerHTML = 0;
    }, 100);
  }
  cardOfButton.removeEventListener("click", flipCard());
};

const flipCard = () => {
  this.innerHTML = "";
  this.style.fontSize = "15px";
  this.style.lineHeight = "30px";
  const textDisplay = document.createElement("div");
  textDisplay.classList.add("cardText");
  textDisplay.innerHTML = this.getAttribute("dataQuestion");
  const buttonOne = document.createElement("button");
  const buttonTwo = document.createElement("button");

  buttonOne.classList.add("buttonOne");
  buttonTwo.classList.add("buttonTwo");
  buttonOne.innerHTML = this.getAttribute("dataAnswerOne");
  buttonOne.addEventListener("click", getResult());
  buttonTwo.addEventListener("click", getResult());
  buttonTwo.innerHTML = this.getAttribute("dataAnswerTwo");
  this.append(textDisplay, buttonOne, buttonTwo);

  const allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach((card) => card.removeEventListener("click", flipCard()));
};

const addCategory = (category) => {
  let column = document.createElement("div");
  column.classList.add("genreColumn");

  let genreTitle = document.createElement("div");
  genreTitle.classList.add("genreTitle");
  genreTitle.innerText = category.genre;

  column.appendChild(genreTitle);
  game.append(column);

  category.question.forEach((question) => {
    const card = document.createElement("div");
    card.classList.add("card");
    column.append(card);

    if (question.level === "easy") {
      card.innerHTML = 100;
    } else if (question.level === "medium") {
      card.innerHTML = 200;
    } else if (question.level === "hard") {
      card.innerHTML = 300;
    }

    card.setAttribute("dataQuestion", question.question);
    card.setAttribute("dataAnswer1", question.answers[0]);
    card.setAttribute("dataAnswer2", question.answers[1]);
    card.setAttribute("dataCorrect", question.correct);
    card.setAttribute("dataValue", card.getInnerHTML());

    // card.addEventListener("click", flipCard());
  });
};

jeopardyCategories.forEach((category) => addCategory(category));
