"use client";

import Link from "next/link";
import Header from "./Components/Header";
import Categoreis from "./Components/Categories";
import Image from "next/image";
import Container from "./Components/Container/page";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
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

        <Categoreis />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}
