"use client";

import { MenuIcon } from "lucide-react";
import Container from "../Components/Container/page";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Button from "../Components/Button/page";
import { useState } from "react";
import { useRouter } from "next/navigation";

const dropdownMenuItems = [
  {
    id: 1,
    title: "SELECT CATEGORY",
    options: ["Medicine", "Pharmacy", "Dentistry"],
  },
  {
    id: 2,
    title: "SELECT LEVEL",
    options: ["Easy", "Medium", "Hard"],
  },
  {
    id: 3,
    title: "SELECT TYPE",
    options: ["Multiple Choice"],
  },
];

export default function page() {      
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const [questionsCount, setQuestionsCount] = useState(10);

  const router = useRouter();

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center flex-col gap-16 bg-gray-50">
      <Container>
        <section className="flex flex-col justify-center items-center text-center mb-10 gap-6 px-4">
          <h1 className="text-3xl font-extrabold md:text-4xl lg:text-5xl text-gray-900">
            Welcome to <span className="text-cyan-600">MCQs </span>TEST
          </h1>
          <p className="text-base font-medium text-gray-600 max-w-xl">
            An interactive MCQ platform designed to help you practice, assess,
            and improve your skills efficiently.
          </p>
        </section>

        <div className="bg-white p-8 rounded-xl flex flex-col gap-8 shadow-md border border-gray-200">
          <div>
            <label
              htmlFor="number_of_questions"
              className="block mb-2 text-base font-semibold text-gray-800"
            >
              Number of Questions
            </label>
            <input
              type="number"
              id="number_of_questions"
              className="w-full h-12 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition"
              value={questionsCount}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 0 && value <= 20) {
                  setQuestionsCount(value);
                }
              }}
              min={1}
              max={20}
              placeholder="Enter number of questions (max 20)"
              required
            />
          </div>

          <div className="border border-gray-200 rounded-xl p-4 flex flex-col gap-2 bg-gray-50 md:flex-row md:justify-between md:items-center">
            {dropdownMenuItems.map((menu) => (
              <DropdownMenu key={menu.id}>
                <DropdownMenuTrigger className="cursor-pointer bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100 transition">
                  {menu.id === 1 && (selectedCategory ?? menu.title)}
                  {menu.id === 2 && (selectedLevel ?? menu.title)}
                  {menu.id === 3 && (selectedType ?? menu.title)}
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-white text-gray-800 border border-gray-200 rounded-lg p-1 shadow-lg">
                  <DropdownMenuLabel className="px-3 py-2 text-sm text-gray-500">
                    {menu.title}
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator className="bg-gray-200" />

                  {menu.options.map((option, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="px-4 py-2 rounded-md cursor-pointer text-gray-800 hover:bg-gray-100 focus:bg-gray-100 data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900"
                      onClick={() => {
                        if (menu.id == 1) setSelectedCategory(option);
                        if (menu.id == 2) setSelectedLevel(option);
                        if (menu.id == 3) setSelectedType(option);
                      }}
                    >
                      {option}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
          <Button
            disabled={!selectedCategory || !selectedLevel || !selectedType}
            onClick={() => {
              router.push(
                `/Mcqs?category=${selectedCategory}&level=${selectedLevel}&type=${selectedType}&questions=${questionsCount}`
              );
            }}
          >
            Start MCQ TEST
          </Button>
        </div>
      </Container>
    </div>
  );
}
