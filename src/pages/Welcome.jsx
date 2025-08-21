import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

function Welcome() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="flex flex-col justify-between flex-1 p-6">
        {/* Top Section */}
        <div className="text-center mt-20">
          <h1 className="text-xl font-bold">Welcome to PopX</h1>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mb-10">
          <button
            className="bg-purple-600 text-white w-full py-3 rounded-lg"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>

          <button
            className="bg-purple-200 text-purple-800 w-full py-3 mt-3 rounded-lg font-bold"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}

export default Welcome;
