import Container from "../Components/Container/page";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
              className="outline-0 border-2 rounded-b-md w-full h-12 p-2 border-[#333] placeholder:text-[#777] bg-[#333] text-white focus:border-[#555]"
              defaultValue={10}
              min={0}
              max={50}
              placeholder="Enter number of questions (max 50)"
              required
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </div>
  );
}
