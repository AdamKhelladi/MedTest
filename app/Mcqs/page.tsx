"use client";

import { useSearchParams } from "next/navigation";
import Container from "../Components/Container/page";
import Image from "next/image";

import { Question, questionsData } from "../mcqOptions";
import { ReactNode } from "react";

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
  console.log(mcqQuestions);

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

        <div className="border-gray-300 border-2 rounded-lg p-4 mt-6 bg-gray-100">
          {mcqQuestions.map((q: Question, index: number) => (
            <div key={index}>
              <div className="flex justify-between gap-4">
                <span className="">
                  {index + 1}
                </span>
                <h1 className="font-semibold text-xl mb-2">{q.question}</h1>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
