import React, { FormEvent } from "react";
import Input from "../Input";
import Button from "../Button";
import Link from "next/link";

const Form = () => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <Input label="Email" type="email" />
        <Input label="Password" type="password" />

        <div className="text-sm">
          <a
            href="#"
            className="font-semibold ml-2 text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>

        <Button name=" Sign in" type="submit" />
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Are you new here?
        <Link
          href={"/Register"}
          className="font-semibold ml-2 leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Register now
        </Link>
      </p>
    </div>
  );
};
export default Form;
