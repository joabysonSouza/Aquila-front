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
        className="font-semibold  text-indigo-600 hover:text-indigo-500"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}