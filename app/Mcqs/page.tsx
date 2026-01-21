"use client";

import { useSearchParams } from "next/navigation";
import Container from "../Components/Container/page";
import Image from "next/image";

import { Question, questionsData } from "../mcqOptions";
import { ReactNode } from "react";
import { useState } from "react";

function getQuestions(category: string, level: string) {
  if (questionsData[category] && questionsData[category][level]) {
    return questionsData[category][level];
  } else {
    return [];
  }
}

export default function page() {
  const params = useSearchParams();

  const category = params.get("category");
  const level = params.get("level");
  const type = params.get("type");
  const questions = params.get("questions");

  const mcqQuestions = getQuestions(category || "", level || "");

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});

  const selectOption = (questionIndex: number, option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }))
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-8">
      <Container>
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
                <svg
                  className="w-4 h-4 mt-1 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 10 16"
                >
                  <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                </svg>
                <h1 className="font-semibold text-lg mb-2">{q.question}</h1>
              </div>

              {q.options.map((option: string, optIndex: number) => {
                const isSelected = selectedAnswers[qindex] === option;

                return (
                  <div
                    key={optIndex}
                    onClick={() => selectOption(qindex, option)}
                    className={`border border-gray-300 rounded-lg p-3 mb-2 duration-400 cursor-pointer ${isSelected ? "bg-sky-500 text-white" : "bg-white hover:bg-gray-200"}`}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
