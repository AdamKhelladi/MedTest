"use client";

import Button from "./Button/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  {
    name: "Medicine",
    description: "Test your knowledge in various medical topics.",
    imageUrl: "/images/medicineLogo.png",
  },
  {
    name: "Pharmacy",
    description: "Explore questions related to pharmaceuticals.",
    imageUrl: "/images/phrmacyLogo.png",
  },
  {
    name: "Dentistry",
    description: "Challenge yourself with dental care questions.",
    imageUrl: "/images/dentistLogo.png",
  },
];

export default function Page() {
  const router = useRouter();

  return (
      <div className="py-20">
        <h1 className="font-bold text-3xl lg:text-5xl text-sky-900 text-center">
          Categories
        </h1>
        <p className="text-sm lg:text-lg text-gray-600 text-center">
          Explore the available quiz categories
        </p>

        <div className="mt-10 grid grid-cols-1 place-items-center md:grid-cols-3 gap-8">
          {categories.map((category: any, index: number) => (
            <div
              key={index}
              className="min-h-[340px] flex flex-col items-center rounded-xl border-2 border-sky-600 p-4 duration-400 hover:shadow-lg hover:shadow-sky-600"
            >
              <Image
                className={index === 1 ? "w-32 mb-5" : ""}
                src={category.imageUrl}
                alt={category.name}
                width={100}
                height={200}
              />

              <h2 className="font-semibold text-2xl text-sky-900 mt-4">
                {category.name}
              </h2>
              <p className="text-gray-600 text-center mt-2 mb-6">
                {category.description}
              </p>

              <Button onClick={() => router.push("/Options")}>
                Start {category.name} MCQ
              </Button>
            </div>
          ))}
        </div>
      </div>
  );
}
