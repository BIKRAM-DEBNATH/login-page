import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    // later: add validation
    setIsAuthenticated(true);
    navigate("/account-settings");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Signin to your PopX account</h1>
      <input type="email" placeholder="Email Address" className="border p-2 w-full my-2" />
      <input type="password" placeholder="Password" className="border p-2 w-full my-2" />
      <button 
        className="bg-purple-600 text-white w-full py-2 mt-4 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
