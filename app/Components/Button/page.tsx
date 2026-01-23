"use client";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({children, onClick, disabled}: ButtonProps) {
  return (
    <button
      type="button"
      className=" text-white w-full rounded-lg cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 duration-400 hover:bg-gradient-to-bl font-medium rounded-base text-lg px-4 py-4 text-center leading-5 lg:text-xl lg:py-4"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
