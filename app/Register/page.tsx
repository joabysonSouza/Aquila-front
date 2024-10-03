import { NextPage } from "next";
import React, { FormEvent } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import VideoContainer from "../Components/VideoBackground";

const Register: NextPage<FormEvent> = () => {
  return (
    <VideoContainer>
      <div className=" register mt-10  sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <Input label="Name" type="text" />
          <Input label="Last Name" type="text" />
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <Input label="Confirm password" type="password" />
        </form>
        <div className="mt-8">
          <Button name="Register" type="submit" />
        </div>
      </div>
    </VideoContainer>
  );
};


export default Register;

