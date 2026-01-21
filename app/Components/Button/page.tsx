type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({children, onClick, disabled}: ButtonProps) {
  return (
    <button
      type="button"
      className=" text-white rounded-lg cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 lg:text-xl lg:py-4"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
