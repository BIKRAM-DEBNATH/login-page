import { useNavigate } from "react-router-dom";

function Signup({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleSignup = () => {
    // later: add validation + API call
    setIsAuthenticated(true);
    navigate("/account-settings");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Create your PopX account</h1>
      <input type="text" placeholder="Full Name" className="border p-2 w-full my-2" />
      <input type="text" placeholder="Phone Number" className="border p-2 w-full my-2" />
      <input type="email" placeholder="Email Address" className="border p-2 w-full my-2" />
      <input type="password" placeholder="Password" className="border p-2 w-full my-2" />
      <button 
        className="bg-purple-600 text-white w-full py-2 mt-4 rounded"
        onClick={handleSignup}
      >
        Create Account
      </button>
    </div>
  );
}

export default Signup;
