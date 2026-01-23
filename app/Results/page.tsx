"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Container2 from "../Components/Container2/page";
import Image from "next/image";
import Button from "../Components/Button/page";

function ResultsContent() {
  const params = useSearchParams();
  const router = useRouter();

  const score = params.get("score") || "0";
  const total = params.get("total") || "1";
  const category = params.get("category") || "";
  const level = params.get("level") || "";

  const percentScore = Math.round(
    (Number(score) / Number(total)) * 100
  );

  const getMessage = () => {
    if (percentScore >= 90) return "🎉 Excellent! Outstanding performance!";
    if (percentScore >= 75) return "👏 Great job! Well done!";
    if (percentScore >= 50) return "👍 Good effort! Keep practicing!";
    return "💪 Keep trying! Practice makes perfect!";
  };

  return (
    <div className="pt-6 bg-gray-50 min-h-screen">
      <Container2>
        <div className="rounded-lg text-white w-full">

          {/* Header */}
          <div className="mb-2 flex items-center gap-2 p-4 rounded-lg bg-gradient-to-r from-sky-900 to-cyan-400">
            <Image
              src="/images/award3.png"
              alt="MCQ Image"
              width={80}
              height={80}
            />
            <h1 className="font-bold text-3xl">MCQ Results</h1>
          </div>

          {/* Score Box */}
          <div className="mb-2 p-10 lg:px-40 rounded-lg bg-gradient-to-r from-sky-900 to-cyan-400">

            <div className="text-8xl pb-8 font-bold flex justify-center">
              {percentScore}%
            </div>

            <div className="text-lg font-semibold space-y-1">
              <p>Category: {category}</p>
              <p>Level: {level}</p>
              <p>
                Score: {score} out of {total}
              </p>
            </div>

            <p className="text-xl font-medium mt-8">
              {getMessage()}
            </p>

          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <Button onClick={() => router.back()}>
              Try Again
            </Button>

            <Button onClick={() => router.push("/Options")}>
              Take Another MCQ
            </Button>
          </div>

        </div>
      </Container2>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex justify-center items-center">
          Loading...
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
