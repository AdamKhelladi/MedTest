import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <h1>Welcome to the MCQ App</h1>
      <p>This is the home page of the MCQ App.</p>


    </div>
  );
}


// <Link href={"/Options"}>
//   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//     Start Quiz
//   </button>
// </Link>