"use client";

import { useSearchParams } from "next/navigation";
import Container2 from "../Components/Container2/page";
import Image from "next/image";

import { Question, questionsData } from "../mcqOptions";
import { useState, useEffect } from "react";
import Button from "../Components/Button/page";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const params = useSearchParams();

  const category = params.get("category") || "";
  const level = params.get("level") || "";
  const questionsCount = Number(params.get("questions")) || 10;

  const [mcqQuestions, setMcqQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (questionsData[category] && questionsData[category][level]) {
      const allQuestions = questionsData[category][level];
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      setMcqQuestions(shuffled.slice(0, questionsCount));
    }
  }, [category, level, questionsCount]);

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});

  const selectOption = (questionIndex: number, option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    mcqQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score++;
      }
    });

    router.push(
      `/Results?score=${score}&total=${mcqQuestions.length}&category=${category}&level=${level}`,
    );
  };

  const allAnswersSelected =
    mcqQuestions.length === Object.keys(selectedAnswers).length;

  return (
    <div className="bg-gray-50 min-h-screen pt-8 md:pt-4">
      <Container2>
        <div className="flex justify-between items-center text-white w-full bg-gradient-to-r from-blue-600 to-cyan-100 mt-0 p-4 rounded-lg shadow-md">
          <div>
            <h1 className="font-bold text-3xl mb-4">MCQs Page</h1>
            <p>{category}</p>
            <p>{level} Level</p>
          </div>
          <Image
            src="/images/quizLogo.png"
            alt="MCQ Image"
            width={140}
            height={160}
            className="mt-[-40px] md:hidden"
          />
        </div>

        <div className="border-gray-300 border-2 rounded-lg p-3 mt-6 mb-4 bg-gray-100">
          {mcqQuestions.map((q: Question, qindex: number) => (
            <div key={qindex} className="mb-6">
              <div className="flex gap-3">
                {/* <svg
                  className="w-4 h-4 mt-1 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 10 16"
                >
                  <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                </svg> */}
                <h2 className="font-semibold text-lg">{qindex + 1}.</h2>
                <h2 className="font-semibold text-lg mb-2">{q.question}</h2>
              </div>

              {q.options.map((option: string, optIndex: number) => {
                const isSelected = selectedAnswers[qindex] === option;

                return (
                  <div
                    key={optIndex}
                    onClick={() => selectOption(qindex, option)}
                    className={`border border-gray-300 rounded-lg p-3 mb-2 duration-400 cursor-pointer ${isSelected ? "bg-sky-200 text-black" : "bg-white hover:bg-gray-200"}`}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
          ))}

          <Button disabled={!allAnswersSelected} onClick={handleSubmit}>
            Submit Answers
          </Button>
        </div>
      </Container2>
    </div>
  );
}
