import { title } from "process";
import Container from "../Components/Container/page";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const dropdownMenuItems = [
  {
    id: 1,
    title: "SELECT CATEGORY",
    options: ["Medicine", "Science", "Math"],
  },
  {
    id: 2,
    title: "SELECT LEVEL",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: 3,
    title: "SELECT TYPE",
    options: ["Multiple Choice", "True/False"],
  },
];

export default function page() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-16 bg-[#111]">
      <Container>
        <section className="flex flex-col justify-center items-center text-center mb-10 gap-6 px-4">
          <h1 className="text-3xl font-extrabold mb-[-10px] text-white mb-8 md:text-4xl lg:text-5xl">
            Welcome to MCQ TEST
          </h1>
          <p className="text-1xl font-medium text-[#ccc]">
            An interactive MCQ platform designed to help you practice, assess,
            and improve your skills efficiently.
          </p>
        </section>

        <div className="bg-[#222] p-8 rounded-lg flex flex-col gap-8 shadow-lg">
          <div className="gap-8">
            <label
              htmlFor="number_of_questions"
              className="block mb-2.5 text-1xl font-bold text-white"
            >
              Number of Questions
            </label>
            <input
              type="number"
              id="number_of_questions"
              className="outline-0 border-2 rounded-xl duration-400 w-full h-12 p-2 border-[#333] placeholder:text-[#777] bg-[#333] text-white focus:border-[#555]"
              defaultValue={10}
              min={0}
              max={50}
              placeholder="Enter number of questions (max 50)"
              required
            />
          </div>

          <div className="border border-[#333] rounded-xl p-4 flex justify-evenly items-center">
            {dropdownMenuItems.map((menu) => (
              <DropdownMenu key={menu.id}>
                <DropdownMenuTrigger className="outline-0 cursor-pointer bg-[#333] border border-[#333] rounded-lg px-4 py-3 text-white hover:bg-[#222] transition">
                  {menu.title}
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-[#2a2a2a] text-white border border-[#444] rounded-lg p-1 shadow-xl">
                  <DropdownMenuLabel className="px-3 py-2 text-sm text-[#aaa]">
                    {menu.title}
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator className="bg-[#444]" />

                  {menu.options.map((option, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="text-white px-4 py-2 cursor-pointer rounded-md hover:bg-[#444] focus:bg-[#444] data-[highlighted]:bg-[#444] data-[highlighted]:text-white"
                    >
                      {option}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
