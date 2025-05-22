import { Link } from "react-router-dom"
import RegisterForm from "../components/RegisterForm";

export default function RegisterView() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <RegisterForm />
    </div>
  );
}
