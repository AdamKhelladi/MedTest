import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the MCQ App</h1>
      <p>This is the home page of the MCQ App.</p>

      <Link href={"/Options"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Quiz
        </button>
      </Link>
    </div>
  );
}

