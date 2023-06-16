let game = document.querySelector(".gameContainer");

let score = document.querySelector(".score");

const jeopardyCategories = [
  {
    genre: "WHO",
    questions: [
      {
        questions: "Who wrote Harry Potter?",
        answers: ["J.K. Rowling", "J.R.R. Tolkien"],
        correct: "J.K. Rowling",
        level: "easy",
      },
      {
        questions: "Who was born on Krypton?",
        answers: ["Superman", "Aquaman"],
        correct: "Superman",
        level: "medium",
      },
      {
        questions: "Who Designed the first car?",
        answers: ["Karl Benz", "Henry Ford"],
        correct: "Karl Benz",
        level: "hard",
      },
    ],
  },
  {
    genre: "WHERE",
    questions: [
      {
        questions: "Where is Buckinghamn Palace",
        answers: ["Richmond", "London"],
        correct: "London",
        level: "easy",
      },
      {
        questions: "Where is the Colosseum?",
        answers: ["Rome", "Milan"],
        correct: "Rome",
        level: "medium",
      },
      {
        questions: "Where is Mount Kilamanjaro?",
        answers: ["Zimbabwe", "Tanzania"],
        correct: "Tanzania",
        level: "hard",
      },
    ],
  },
  {
    genre: "WHEN",
    questions: [
      {
        questions: "When is Christmas?",
        answers: ["Jan 30", "Dec 25"],
        correct: "Dec 25",
        level: "easy",
      },
      {
        questions: "When was WWII?",
        answers: ["1932", "1941"],
        correct: "1941",
        level: "medium",
      },
      {
        questions: "When was JFK shot?",
        answers: ["1963", "1961"],
        correct: "1963",
        level: "hard",
      },
    ],
  },
  {
    genre: "WHAT",
    questions: [
      {
        questions: "What is kg short for?",
        answers: ["Kilojoule", "Kilogram"],
        correct: "Kilogram",
        level: "easy",
      },
      {
        questions: "What do koalas eat?",
        answers: ["straw", "Eucalyptus"],
        correct: "Eucalyptus",
        level: "medium",
      },
      {
        questions: "What is the capital of Saudi Arabia?",
        answers: ["Jeddah", "Riyadh"],
        correct: "Riyadh",
        level: "hard",
      },
    ],
  },
  {
    genre: "HOW MANY",
    questions: [
      {
        questions: "How man players in a football team?",
        answers: ["15", "11"],
        correct: "11",
        level: "easy",
      },
      {
        questions: "How man seconds are in an hour?",
        answers: ["36000", "3600"],
        correct: "3600",
        level: "medium",
      },
      {
        questions: "How man people are in China?",
        answers: ["1.1 billion", "1.4 billion"],
        correct: "1.4 billion",
        level: "hard",
      },
    ],
  },
];
