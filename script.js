const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborghinis",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "None of the above",
      correct: "b",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  // Load the initial quiz
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
  
    const currentQuizData = quizData[currentQuiz];
    questionEl.textContent = currentQuizData.question;
    a_text.textContent = currentQuizData.a;
    b_text.textContent = currentQuizData.b;
    c_text.textContent = currentQuizData.c;
    d_text.textContent = currentQuizData.d;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
  }
  
  function getSelected() {
    const selectedAnswer = Array.from(answerEls).find(
      (answerEl) => answerEl.checked
    );
    return selectedAnswer ? selectedAnswer.id : null;
  }
  
  submitBtn.addEventListener("click", () => {
    const selectedAnswer = getSelected();
  
    if (selectedAnswer) {
      // Check if the answer is correct
      if (selectedAnswer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      // Load the next question or display the final score
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Play Again</button>
        `;
      }
    } else {
      alert("Please select an answer before submitting.");
    }
  });
  