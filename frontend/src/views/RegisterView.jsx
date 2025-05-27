import { Link } from "react-router-dom"
import RegisterForm from "../components/RegisterForm";

export default function RegisterView() {
  return (
   <div className=" h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
     <div className="flex justify-center items-center min-h-screen">
        <RegisterForm />
      </div>
    </div>
  );
}

