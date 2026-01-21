export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type QuestionBank = {
  [category: string]: {
    [level: string]: Question[];
  };
};

export const questionsData: QuestionBank = {
  Medicine: {
    Easy: [
      {
        question: "What is the normal human body temperature?",
        options: ["36°C", "37°C", "38°C", "39°C"],
        answer: "37°C",
      },
      {
        question: "Which vitamin is produced by sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D",
      },
    ],
    Medium: [
      {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Skin", "Heart", "Kidney"],
        answer: "Skin",
      },
      {
        question: "Which blood type is known as the universal donor?",
        options: ["A", "B", "AB", "O"],
        answer: "O",
      },
    ],
    Hard: [
      {
        question: "Which part of the brain regulates balance?",
        options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
        answer: "Cerebellum",
      },
      {
        question: "What is the normal range of adult heart rate (bpm)?",
        options: ["50-70", "60-100", "80-120", "100-140"],
        answer: "60-100",
      },
    ],
  },
  Science: {
    Easy: [
      {
        question: "Which language is used for web pages?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript",
      },
    ],
    Medium: [
      {
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Computer Style Syntax",
          "Creative Style System",
          "Coded Style Script",
        ],
        answer: "Cascading Style Sheets",
      },
    ],
    Hard: [
      {
        question: "Which data structure uses FIFO order?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue",
      },
    ],
  },
  Math: {
    Easy: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
    ],
    Medium: [
      {
        question: "Solve: 3x + 5 = 20",
        options: ["3", "5", "7", "15"],
        answer: "5",
      },
    ],
    Hard: [
      {
        question: "Derivative of x² is?",
        options: ["x", "2x", "x²", "2"],
        answer: "2x",
      },
    ],
  },
};