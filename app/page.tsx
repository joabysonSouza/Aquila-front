import VideoBackground from "./Components/VideoBackground";
import Form from "./Components/Form";

export default function Home() {
  return (
    <>
      <VideoBackground>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
            <h1 className="mt-10 text-center text-4xl font-extrabold leading-9 tracking-tight text-indigo-400">
            Welcome to Aquila
            </h1>
            <p className="font-extrabold w-100  leading-9 tracking-tight mt-3 text-center justify-center text-yellow-50">
            Find out where your coordinates take you!</p>
          </div>
       <Form/>
      </VideoBackground>
    </>
  );
}
