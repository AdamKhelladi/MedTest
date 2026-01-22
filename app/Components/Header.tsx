import Container from "./Container/page";
import Image from "next/image";

export default function Header() {
  return (
    <Container>
      <div className="text-white flex justify-between items-center py-3 px-4 md:px-12 my-2 rounded-xl bg-gradient-to-r from-cyan-900 to-purple-500">
        <div className="flex items-center gap-2">
          <Image
            className=""
            src="/images/logo.png"
            alt="Logo"
            width={30}
            height={30}
          />
          <h1 className="text-2xl font-bold">MedTEST</h1>
        </div>
        <div className="flex items-center gap-3">
          <p className="hover:underline text-lg cursor-pointer duration-300 hover:text-gray-200">
            Log in
          </p>
          <p className="hover:underline text-lg cursor-pointer duration-300 hover:text-gray-200">
            Sign up
          </p>
        </div>
      </div>
    </Container>
  );
}
