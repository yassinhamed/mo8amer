const animals = [
  {
    name: "Froggy",
    emoji: "🐸",
    correct: "jump",
    dialogue: "Ribbit! I want to hop to the lily pad. Which move helps me?",
  },
  {
    name: "Birdy",
    emoji: "🐦",
    correct: "fly",
    dialogue: "Tweet tweet! I need to reach the rainbow in the sky.",
  },
  {
    name: "Fishy",
    emoji: "🐠",
    correct: "swim",
    dialogue: "Splash splash! Help me zoom through the water.",
  },
  {
    name: "Puppy",
    emoji: "🐶",
    correct: "walk",
    dialogue: "Woof! I want to trot to the toy basket.",
  },
  {
    name: "Bunny",
    emoji: "🐰",
    correct: "jump",
    dialogue: "Boing! Which move takes me to the carrot patch?",
  },
  {
    name: "Duckling",
    emoji: "🦆",
    correct: "swim",
    dialogue: "Quack! I am ready for a fun swim in the pond.",
  },
];

const choices = [
  { value: "walk", emoji: "🚶", title: "Walk", hint: "Step, step on the ground", className: "choice-walk" },
  { value: "fly", emoji: "🪽", title: "Fly", hint: "Up high in the sky", className: "choice-fly" },
  { value: "swim", emoji: "🐟", title: "Swim", hint: "Splash in the water", className: "choice-swim" },
  { value: "jump", emoji: "🦘", title: "Jump", hint: "Bounce up and down", className: "choice-jump" },
];

const animalImage = document.getElementById("animal-img");
const animalName = document.getElementById("animal-name");
const dialogue = document.getElementById("dialogue");
const feedback = document.getElementById("feedback");
const scoreLabel = document.getElementById("score");
const roundLabel = document.getElementById("round");
const choicesWrap = document.getElementById("choices");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const animalCard = document.querySelector(".animal-card");
const storyCard = document.getElementById("story");

let current = 0;
let score = 0;
let answered = false;

function renderChoices() {
  choicesWrap.innerHTML = "";

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `choice-btn ${choice.className}`;
    button.dataset.choice = choice.value;
    button.innerHTML = `<strong>${choice.emoji} ${choice.title}</strong><span>${choice.hint}</span>`;
    button.addEventListener("click", () => checkAnswer(choice.value));
    choicesWrap.appendChild(button);
  });
}

function updateScoreboard() {
  scoreLabel.textContent = `Stars: ${score}`;
  roundLabel.textContent = `Round ${current + 1} / ${animals.length}`;
}

function loadAnimal() {
  const animal = animals[current];
  answered = false;

  animalImage.textContent = animal.emoji;
  animalName.textContent = animal.name;
  dialogue.textContent = animal.dialogue;
  feedback.textContent = "";
  nextButton.style.display = "none";
  restartButton.hidden = true;
  animalCard.classList.remove("celebrate");
  storyCard.classList.remove("celebrate");

  renderChoices();
  updateScoreboard();
}

function checkAnswer(choice) {
  if (answered) {
    return;
  }

  answered = true;
  const correct = animals[current].correct;
  const buttons = document.querySelectorAll(".choice-btn");

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.dataset.choice === correct) {
      button.classList.add("correct");
    }
    if (button.dataset.choice === choice && choice !== correct) {
      button.classList.add("wrong");
    }
  });

  if (choice === correct) {
    score += 1;
    feedback.textContent = "Great job! You picked the perfect move!";
    animalCard.classList.add("celebrate");
  } else {
    const answerName = correct.charAt(0).toUpperCase() + correct.slice(1);
    feedback.textContent = `Nice try! The best answer was ${answerName}.`;
    storyCard.classList.add("celebrate");
  }

  updateScoreboard();
  nextButton.style.display = "inline-flex";
}

function showEnding() {
  animalImage.textContent = "🏆";
  animalName.textContent = "Party Time!";
  dialogue.textContent = `You helped ${animals.length} animal friends. What a superstar!`;
  feedback.textContent = `Final stars: ${score} / ${animals.length}`;
  choicesWrap.innerHTML = "";
  nextButton.style.display = "none";
  restartButton.hidden = false;
  animalCard.classList.add("celebrate");
  storyCard.classList.add("celebrate");
  roundLabel.textContent = "All done!";
}

function nextAnimal() {
  current += 1;
  if (current >= animals.length) {
    showEnding();
    return;
  }

  loadAnimal();
}

function restartGame() {
  current = 0;
  score = 0;
  answered = false;
  loadAnimal();
}

nextButton.addEventListener("click", nextAnimal);
restartButton.addEventListener("click", restartGame);

loadAnimal();
