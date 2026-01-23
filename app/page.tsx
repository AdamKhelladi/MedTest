"use client";

import Link from "next/link";
import Header from "./Components/Header";
import Image from "next/image";
import Container from "./Components/Container/page";
import Button from "./Components/Button/page";
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

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <Container>
        <div className="md:pl-16 text-white w-full bg-gradient-to-r from-cyan-900 to-purple-500 mt-0 p-8 rounded-lg shadow-md">
          <div className="py-8 md:py-0 flex flex-col md:flex-row justify-between items-center">
            <div className="order-2 md:order-0">
              <h1 className="font-bold text-5xl mb-4 md:text-5xl lg:text-7xl">
                Test Your Knowledge..
              </h1>
              <p className="font-semibold text-lg">
                MCQs in Medicine, Pharmacy, and Dendictry
              </p>
              <p className="mt-6 hidden md:block">
                An interactive MCQ platform designed to help you practice,
                assess, and improve your skills efficiently.
              </p>
            </div>
            <Image
              className="md:mr-[-50px] animate-float md:w-100 lg:w-130 xl:w-175"
              src="/images/homePic3.png"
              alt="Test Your Knowledge"
              width={400}
              height={300}
            />
          </div>

          <Link href={"/Options"}>
            <button className="md:mt-[-20px] text-white w-full md:w-fit md:px-16 rounded-lg cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 duration-400 hover:bg-gradient-to-bl font-medium rounded-base text-lg md:text-2xl px-4 py-4 text-center leading-5 lg:text-xl lg:py-4">
              Start MCQ
            </button>
          </Link>
        </div>

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
      </Container>
    </div>
  );
}
