"use client";

import { useSearchParams } from "next/navigation";
import Container2 from "../Components/Container2/page";
import Image from "next/image";
import Button from "../Components/Button/page";
import { useRouter } from "next/navigation";

export default function page() {
  const params = useSearchParams();
  const router = useRouter();

  const score = params.get("score");
  const total = params.get("total");
  const category = params.get("category");
  const level = params.get("level");

  const persentScore = Math.round((Number(score) / Number(total)) * 100);

  const getMessage = () => {
    if (persentScore >= 90) return "🎉 Excellent! Outstanding performance!";
    if (persentScore >= 75) return "👏 Great job! Well done!";
    if (persentScore >= 50) return "👍 Good effort! Keep practicing!";
    return "💪 Keep trying! Practice makes perfect!";
  };

  return (
    <div className="pt-6 bg-bray-50 min-h-screen">
      <Container2>
        <div className="rounded-lg text-white w-full">
          <div className="mb-2 flex items-center gap-0 p-4 rounded-lg text-white w-full bg-gradient-to-r from-sky-800 to-sky-400">
            <Image
              src="/images/award3.png"
              alt="MCQ Image"
              width={80}
              height={80}
              className=""
            />
            <h1 className="font-bold text-3xl">MCQ Results</h1>
          </div>

          <div className="mb-2 p-10 lg:px-40 rounded-lg text-white w-full bg-gradient-to-r from-sky-900 to-sky-400">
            <div className="text-8xl pb-8 font-bold flex justify-center">
              {persentScore}%
            </div>

            <div className="text-lg font-semibold">
              <p>Category: {category}</p>
              <p>Level: {level}</p>
              <p>
                Score: {score} out of {total}
              </p>
            </div>

            <p className="text-xl font-medium mt-8">{getMessage()}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Button onClick={() => router.back()}>Try Again</Button>
            <Button onClick={() => router.push("/Options")}>
              Take Another MCQ
            </Button>
          </div>
        </div>
      </Container2>
    </div>
  );
}
