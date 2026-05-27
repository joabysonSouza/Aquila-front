import React from "react";

type ButtonProps = {
  name: string;
  type: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  bgColor? : String;
  hoverColor?: String
};

function Button({ name, type, onClick, bgColor="bg-indigo-600", hoverColor="bg-indigo-500" }: ButtonProps) {
  return (
    <div>
      <button
        type={type}
        className= {`flex w-full justify-center rounded-md ${bgColor} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:${hoverColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}

export default Button
