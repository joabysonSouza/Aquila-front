import React from "react";

interface inputProps {
  label: string;
  type: string;
}

export default function Input({ label, type }: inputProps) {
  return (
    <div className="mx-5">
      <label
        htmlFor="email"
        className="font-semibold  text-indigo-400 hover:text-indigo-500"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          required
          className="block w-full rounded-md border-0 bg-slate-300 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
         step="any" />
      </div>
    </div>
  );
}
